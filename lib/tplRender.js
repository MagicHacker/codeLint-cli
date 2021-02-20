/**
 * 处理模板渲染
 */

const handleBars = require('handlebars')
const fs = require('fs')
exports.renderStart = () => {
  const name= 'Joe'
  const packagePath = '../package.json'
  const content = fs.readFileSync(packagePath, 'utf-8')
  const result = handleBars.template(content)(name)
  fs.writeFileSync(packagePath, result)
}