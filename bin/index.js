#!/usr/bin/env node
require('../lib/cFonts')
const { program } = require('commander')
const { name, version } = require('../utils/constants')
const chalk = require('chalk')
const ora = require('ora')
const { inQInit } = require('../lib/inquirer')
const { downInit } = require('../lib/download')
program
  // 定义当前版本
  .version(version, '-v, --version', 'output the version number')
  // 定义用法
  .usage('<command> [options]')

program.on('--help', () => {
  console.log()
  console.log(`Run ${chalk.cyan('codeLint-cli <command> --help')} for detailed usage of given command.`)
  console.log()
})

program
  // 定义初始化指令
  .command('init')
  .alias('i')
  .description('init relative repository')
  .action(async () => {
    // const spinner = ora('正在下载……').start()
    const { linter, formatter } = await inQInit()
    downInit()
    console.log('xx', linter, formatter)
    // spinner.fail()
  })
// 解析参数
program.parse(process.argv)