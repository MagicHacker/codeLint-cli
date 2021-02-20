/**
 * 下载模板
 */
const download = require('download-git-repo')
const path = require('path')

exports.downInit = () => {
  const url = 'MagicHacker/codeLintTpl'
  const target = path.resolve(__dirname, './test')
  download(`github:${url}`, target, (err) => {
    if (err) {
      console.error('报错', err)
    }
  })
}