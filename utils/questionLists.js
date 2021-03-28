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
        name: 'alloy/vue'
      },
      {
        name: 'alloy/react'
      }
    ],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

const formatterList = [
  {
    type: 'checkbox',
    message: 'Check the formatter you needed',
    name: 'key',
    choices: [
      {
        name: 'Prettier',
        checked: true
      }
    ],
    filter: function(val) {
      return val.map(item => item.toLowerCase())
    }
  }
]
module.exports = {
  linterList,
  formatterList
}