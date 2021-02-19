/**
 * 处理命令行交互
 */
const inQ = require('inquirer')
const { linterList, formatterList } = require('../utils/questionLists')

exports.inQInit = async () => {
  const linter = await inQ.prompt(linterList)
  const formatter = await inQ.prompt(formatterList)
  return { linter, formatter }
}