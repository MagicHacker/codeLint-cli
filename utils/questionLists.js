/**
 * inquirer的询问列表
 */
const linterList = [
  {
    type: 'list',
    message: 'Pick the eslint config you needed:',
    name: 'key',
    choices: [
      {
        name: 'vue-prettier'
      },
      {
        name: 'react-prettier'
      }
    ],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

module.exports = {
  linterList
}