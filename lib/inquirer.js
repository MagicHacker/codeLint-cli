/**
 * 处理命令行交互
 */
const inQ = require('inquirer')
const { linterList } = require('../utils/questionLists')

exports.inQInit = async () => {
  const linter = await inQ.prompt(linterList)
  return { linter }
}