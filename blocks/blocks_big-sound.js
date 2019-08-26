Blockly.Blocks["big_sound_block"] = {
    init: function() {
      this.appendDummyInput().appendField("BIG SOUND");
      this.appendDummyInput()
        .appendField("ANALOG PIN")
        .appendField(new Blockly.FieldTextInput("A0"), "BIG_SOUND_ANALOG_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("BIG_SOUND_ANALOG_VALUE"),
          "BIG_SOUND_ANALOG_VALUE"
        );
      this.appendDummyInput()
        .appendField("DIGITAL PIN")
        .appendField(new Blockly.FieldTextInput("0"), "BIG_SOUND_DIGITAL_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("BIG_SOUND_DIGITAL_VALUE"),
          "BIG_SOUND_DIGITAL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };