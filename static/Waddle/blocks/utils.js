Blockly.Blocks['utils_import'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("引入utils");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(BlockColors["utils"]);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['utils_isnative'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("是否为打包后的客户端");
        this.setOutput(true, "Boolean");
        this.setColour(BlockColors["utils"]);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};