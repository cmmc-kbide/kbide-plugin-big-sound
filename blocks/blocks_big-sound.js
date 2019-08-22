Blockly.Blocks['big_sound_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BIG SOUND");
    this.appendValueInput("BIG_SOUND_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("BIG_SOUND_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};