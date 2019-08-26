Blockly.JavaScript["big_sound_block"] = function(block) {
    var text_big_sound_analog_pin = block.getFieldValue("BIG_SOUND_ANALOG_PIN");
    var variable_big_sound_analog_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("BIG_SOUND_ANALOG_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_big_sound_digital_pin = block.getFieldValue(
      "BIG_SOUND_DIGITAL_PIN"
    );
    var variable_big_sound_digital_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("BIG_SOUND_DIGITAL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int BIG_SOUND_ANALOG_PIN = ${text_big_sound_analog_pin}; 
	int BIG_SOUND_DIGITAL_PIN = ${text_big_sound_digital_pin}; 
  	#END
	#SETUP
	  pinMode(BIG_SOUND_ANALOG_PIN, INPUT);
	  pinMode(BIG_SOUND_DIGITAL_PIN, INPUT);
	#END
	    
	 
	  float ${variable_big_sound_analog_value} = analogRead (BIG_SOUND_ANALOG_PIN);
	  int ${variable_big_sound_digital_value} = digitalRead (BIG_SOUND_DIGITAL_PIN);
	  
	  delay (200);
	
    `;
    return code;
  };