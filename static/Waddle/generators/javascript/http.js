Blockly.JavaScript["http_import"] = function (block) {
  var code = "const http = require('http');\n";
  return code;
};

Blockly.JavaScript["http_get"] = function (block) {
    var mode = block.getFieldValue('MODE');
    var ok = Blockly.JavaScript.statementToCode(block, 'OK');
    var error = Blockly.JavaScript.statementToCode(block, 'ERROR');
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || "''";
    var code = `http.${mode}(${url},{},{},
   (response) => {
        if (response.data) {
          try {
            ${ok}
          } catch (e) {
            ${error}
          }
        }
      }
    );
`;
    return code;
};

Blockly.JavaScript['http_response'] = function () {
    return ['response', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['http_responsedropdown'] = function (block) {
    var dropdown_mode = block.getFieldValue('MODE');
        var code = `response.${dropdown_mode}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['http_error'] = function () {
    return ['e', Blockly.JavaScript.ORDER_NONE];
};