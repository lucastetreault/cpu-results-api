const file = require('fs')
const path = require('path')

const results = file.readFileSync(path.resolve(__dirname, 'results.csv'))
  .toString()
  .split('\n')
  .map(row => row.split('|').map(column => column.toString().trim()).map(column => column === '&nbsp;' ? '' : column))
  .map(res => ([
    res[0],
    new Date(res[1]),
    res[2],
    res[3],
    res[4],
    res[5],
    res[6],
    parseFloat(res[7]) || 0,
    res[8],
    res[9],
    res[10],
    parseFloat(res[11]) || 0,
    parseFloat(res[12]) || 0,
    parseFloat(res[13]) || 0,
    parseFloat(res[14]) || 0,
    parseFloat(res[15]) || 0,
    parseInt(res[16]) || 0,
    res[17] !== 'yes'
  ]))

module.exports = results
