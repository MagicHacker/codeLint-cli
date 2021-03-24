/**
 * 输出定制化logo和slogan
 */
const cFonts = require('cfonts')
const cFontsInit = () => {
  cFonts.say('code lint', {
    font: 'simple',
    align: 'left',
    colors: ['#f80'],
    background: 'transparent',
    letterSpacing: 0,
    lineHeight: 1,
    space: true,
    maxLength: '0',
  });
}

module.exports = {
  cFontsInit
}