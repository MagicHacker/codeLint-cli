/**
 * inquirer的询问列表
 */

const linterList = [
  {
    type: 'list',
    message: 'Check the linter you needed',
    name: 'key',
    choices: [
      {
        name: 'Vue:linter'
      },
      {
        name: 'React:linter'
      }
    ],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

const formatterList = [
  {
    type: 'list',
    message: 'Check the formatter you needed',
    name: 'key',
    choices: [
      {
        name: 'Prettier'
      }
    ],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]
module.exports = {
  linterList,
  formatterList
}