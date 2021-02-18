#!/usr/bin/env node
require('../src/cFonts')
const { program } = require('commander')
const { name, version } = require('../src/utils/constants')
const chalk = require('chalk')
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
  .description('init relative repository')
  .action(() => {
    console.log('init')
  })
// 解析参数
program.parse(process.argv)