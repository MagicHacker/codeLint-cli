/**
 * 处理命令行交互
 */
const inQ = require('inquirer')
const { techList, linterList, formatterList } = require('../utils/questionLists')

exports.inQInit = async () => {
  const techFrame = await inQ.prompt(techList)
  const linter = await inQ.prompt(linterList)
  const formatter = await inQ.prompt(formatterList)
  return { techFrame, linter, formatter }
}