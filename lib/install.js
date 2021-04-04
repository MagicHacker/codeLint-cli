/**
 * install related dependencies
 */
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora('npm installing……')
const exec = require('child_process').exec

const installNpm = () => {
  // 进入项目目录
  process.chdir(process.cwd())
  spinner.start()
  // 执行npm install命令
  exec('npm install', err => {
    if (err) {
      spinner.stop(chalk.redBright("failed to install npm"))
    }else {
      spinner.succeed(chalk.green("npm install successed"))
    }
    // 退出进程
    process.exit()
  })
}

module.exports = {
  installNpm
}