#!/usr/bin/env node
const { cFontsInit } = require('../lib/cFonts')
const { program } = require('commander')
const { version } = require('../utils/constants')
const chalk = require('chalk')
const { inQInit } = require('../lib/inquirer')
const { downloadRepo } = require('../lib/download')
const { config } = require('../utils/config')
const fse = require('fs-extra')
const rmrf = require('rimraf')
const { installNpm } = require('../lib/install')
program
  // 定义当前版本
  .version(version, '-v, --version', 'output the version number')
  // 定义用法
  .usage('<command>')

program
  // 定义初始化指令
  .command('init')
  .alias('i')
  .description('init relative repository')
  .action(async () => {
    try {
      const { linter } = await inQInit()
      await downloadRepo(config[linter.key].url, './downloadTpl')

      // 拷贝下载的文件
      // 模板package.json
      const tplPackageJSON = require(`${process.cwd()}/downloadTpl/package.json`)
      const { devDependencies, husky } = tplPackageJSON
      const tpllintStaged = tplPackageJSON['lint-staged']
      // target package.json
      const targetPackageJSON = require(`${process.cwd()}/package.json`)
      const targetDevDependencies = targetPackageJSON.devDependencies ? targetPackageJSON.devDependencies : {}
      const targetHusky = targetPackageJSON.husky ? targetPackageJSON.husky : {}
      const targetLintStaged = targetPackageJSON['lint-staged'] ? targetPackageJSON['lint-staged'] : {}
      targetPackageJSON.devDependencies = Object.assign({}, JSON.parse(JSON.stringify(targetDevDependencies)), JSON.parse(JSON.stringify(devDependencies)))
      targetPackageJSON.husky = Object.assign({}, JSON.parse(JSON.stringify(targetHusky)), JSON.parse(JSON.stringify(husky)))
      targetPackageJSON['lint-staged'] = Object.assign({}, JSON.parse(JSON.stringify(targetLintStaged)), JSON.parse(JSON.stringify(tpllintStaged)))

      // 将目标package.json写入
      fse.writeFile(`${process.cwd()}/package.json`, JSON.stringify(targetPackageJSON, null, 2), 'utf-8', (err) => {
        if (err) {
          console.log('write:', chalk.red(err))
        } else {
          // 拷贝文件到项目下
          fse.copy('./downloadTpl/config', `${process.cwd()}`, err => {
            if (err) {
              console.log('copy:', chalk.red(err))
            }else {
              rmrf('./downloadTpl', err => {
                if (err) {
                  console.log('remove:', chalk.red(err))
                } else {
                  // 安装相应依赖
                  installNpm()
                }
              })
            }
          })
        }
      })
    } catch (error) {
      console.log('download ERR:', chalk.red(error))
    }
  })
  // 监听help
  program.on('--help', () => {
    cFontsInit()
    console.log()
    console.log(`Run ${chalk.cyan('codeLint-cli <command> --help')} for detailed usage of given command.`)
    console.log()
  })

  // 监听未定义的命令
  program.on('command:*', function () {
    console.log(`${chalk.red(`Invalid command: ${program.args.join(' ')}`)}`)
    console.log(`${chalk.green('See --help for a list of available commands.')}`)
    process.exit(1)
  })

// 解析参数
program.parse(process.argv)
