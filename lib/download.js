/**
 * 下载模板
 */
const download = require('download-git-repo')
const path = require('path')
const chalk = require('chalk')

exports.downInit = () => {
  const url = 'MagicHacker/codeLintTpl'
  const target = path.resolve(__dirname, '../')
  download(`github:${url}`, target, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
  })
}