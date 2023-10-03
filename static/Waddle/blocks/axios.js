Blockly.JavaScript['axios_import'] = function () {
  var code = `const axios = require('axios');\n`;
  return code;
};

//简单请求
Blockly.JavaScript['axios_getpost_simple'] = function (block) {
  var mode = block.getFieldValue('MODE');
  var ok = Blockly.JavaScript.statementToCode(block, 'OK');
  var error = Blockly.JavaScript.statementToCode(block, 'ERROR');
  var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `axios.${mode}(${url})
.then((response) => {
${ok}
})
.catch((error) => {
${error}
});
`;
  return code;
};

Blockly.JavaScript['axios_response'] = function () {
  return ['response', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['axios_responsedropdown'] = function (block) {
  var dropdown_mode = block.getFieldValue('MODE');
      var code = `response.${dropdown_mode}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['axios_error'] = function () {
  return ['error', Blockly.JavaScript.ORDER_NONE];
};

//请求头
Blockly.JavaScript["axios_headers"] = function(block){
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = `headers: ${value_num},`;
  return code;
}

//请求体
Blockly.JavaScript["axios_data"] = function(block){
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = `data: ${value_num},`;
  return code;
}

//复杂请求
Blockly.JavaScript['axios_getpost'] = function (block) {
  var dropdown_mode = block.getFieldValue('MODE');
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var statements_axiosHEADERS = Blockly.JavaScript.statementToCode(block, 'axiosHEADERS');
  var statements_axiosBODY = Blockly.JavaScript.statementToCode(block, 'axiosBODY');
  var statements_ok = Blockly.JavaScript.statementToCode(block, 'OK');
  var statements_error = Blockly.JavaScript.statementToCode(block, 'error');
  var code = `
var config = {
  method: '${dropdown_mode}',
  url: ${value_url},
  ${statements_axiosHEADERS}
  ${statements_axiosBODY}
  };
  
axios(config)
.then((response) => {
  ${statements_ok}
})
.catch((error) => {
  ${statements_error}
});
`;
  return code;
};

Blockly.JavaScript['axios_timeout'] = function (block) {
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = `timeout: ${value_num},\n`;
  return code;
};

Blockly.JavaScript['axios_maxcontentlength'] = function (block) {
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = `maxContentLength: ${value_num},\n`;
  return code;
};

Blockly.JavaScript['axios_withcredentials'] = function(block){
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  var code = `withCredentials: ${checkbox_name},\n`;
  return code;
}