/**
 * inquirer的询问列表
 * 先选plugin
 * 再选Linter
 * 最后选择prettier
 */
const techList = [
  {
    type: 'list',
    message: 'Pick the eslint plugin you needed:',
    name: 'key',
    choices: [
      {
        name: 'eslint-plugin-vue'
      },
      {
        name: 'eslint-plugin-react'
      }
    ],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]
const linterList = [
  {
    type: 'list',
    message: 'Pick the eslint config you needed:',
    name: 'key',
    choices: [
      {
        name: 'Airbnb config'
      },
      {
        name: 'Standard config'
      },
      {
        name: 'Alloy config'
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
  techList,
  linterList,
  formatterList
}