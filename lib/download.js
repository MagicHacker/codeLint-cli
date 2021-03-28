/**
 * 下载模板
 */
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const chalk = require('chalk')

exports.downloadRepo = async (url, target) => {
  try {
    await download(`github:${url}`, target, { clone: true })
  } catch (error) {
    console.log(chalk.red(error))
    process.exit()
  }
}