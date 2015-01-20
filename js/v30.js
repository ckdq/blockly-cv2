Blockly.Blocks['findcontours'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput()
        .appendField("findContours")
        .appendField(new Blockly.FieldDropdown([
          ["external","cv2.RETR_EXTERNAL"],
          ["list","cv2.RETR_LIST"],
          ["ccomp", "cv2.RETR_CCOMP"],
          //["tree", "cv2.RETR_TREE"],
          ]), "mode")
        .appendField(new Blockly.FieldDropdown([
          ["none","cv2.CHAIN_APPROX_NONE"],
          ["simple","cv2.CHAIN_APPROX_SIMPLE"],
          ["tc89_l1", "cv2.CHAIN_APPROX_TC89_L1"],
          ["tc89_kcos", "cv2.CHAIN_APPROX_TC89_KCOS"],]), "approx");
    this.appendValueInput("img")
        .setCheck("image");
    //this.appendDummyInput()
    //    .appendField(new Blockly.FieldVariable('contours'), 'contours')
    //    .appendField(new Blockly.FieldVariable('hierarchy'), 'hierarchy');
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(true,"contours")
    this.setTooltip('');
  },
  /*getVars: function() {
    return [this.getFieldValue('contours'), this.getFieldValue('hierarchy')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('contours'))) { this.setFieldValue(newName, 'contours'); }
    if (Blockly.Names.equals(oldName, this.getFieldValue('hierarchy'))) { this.setFieldValue(newName, 'hierarchy'); }
  },*/
};
Blockly.Python['findcontours'] = function(block) {
  var img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('mode');
  //var contours = block.getFieldValue('contours');
  //var hierarchy = block.getFieldValue('hierarchy');
  var approx = block.getFieldValue('approx');
  var code = "cv2.findContours("+img+","+mode+","+approx+")[1]"
  return [code, Blockly.Python.ORDER_NONE];
};

