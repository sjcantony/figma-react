if (figma.editorType === 'figma') {
  figma.showUI(__html__, { width: 450, height: 700 });
  figma.ui.onmessage = msg => {
    if (msg.type === 'downloadData') {
      console.log(msg.data)
      console.log(msg.componentName)
    }
    if (msg.type === 'cancel') {
      figma.closePlugin();
    }
  }
  }

else {

  figma.showUI(__html__);
  figma.ui.onmessage = msg => {
    if (msg.type === 'downloadData') {
      console.log(msg.count)
    }
    figma.closePlugin();
  };
};
