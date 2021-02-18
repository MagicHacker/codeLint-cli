#!/usr/bin/env node
require('../src/cFonts')
const { program } = require('commander')
const { name, version } = require('../src/utils/constants')

program
  // 定义当前版本
  .version(version, '-v, --version', 'output the version number')
  // 定义用法
  .usage('<command> [options]')

program
  // 定义初始化指令
  .command('init')
  .description('init relative repository')
  .action(() => {
    console.log('init')
  })
// 解析参数
program.parse(process.argv)