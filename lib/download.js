/**
 * 下载模板
 */
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora('loading……')

exports.downloadRepo = async (url, target) => {
  try {
    spinner.start()
    await download(`github:${url}`, target, { clone: true })
    spinner.succeed(`${chalk.green('dowanload successed!')}`)
  } catch (error) {
    spinner.fail(`${chalk.red(error)}`)
    process.exit(1)
  }
}