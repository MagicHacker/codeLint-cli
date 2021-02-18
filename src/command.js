/**
 * 使用commander处理命令行
 */
const { program } = require('commander')
const { version } = require('./utils/constants')
program
  // 定义当前版本
  .version(version, '-v, --version', 'output the version number')
  // 定义用法
  .usage('<command> [options]')
  // 定义初始化指令
  .command('init', 'init the project')
  .parse(process.argv)