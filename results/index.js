const file = require('fs')
const path = require('path')

const results = file.readFileSync(path.resolve(__dirname, 'results.csv'))
  .toString()
  .split('\n')
  .map(row => row.split('|').map(column => column.toString().trim()).map(column => column === '&nbsp;' ? '' : column))
  .map(res => ([
    res[0],                                     //'competition',
    res[1] ? new Date(res[1]) : new Date(0),    //'date',
    res[2],                                     //'location',
    res[3],                                     //'competitionType',
    res[4],                                     //'sex',
    res[5],                                     //'name',
    res[6],                                     //'province',
    parseFloat(res[7]) || 0,                    //'weight',
    res[8],                                     //'oldWeightClass',
    res[9],                                     //'weightClass',
    res[10],                                    //'ageCategory',
    parseFloat(res[11]) || 0,                   //'squat',
    parseFloat(res[12]) || 0,                   //'bench',
    parseFloat(res[13]) || 0,                   //'deadlift',
    parseFloat(res[14]) || 0,                   //'total',
    parseFloat(res[15]) || 0,                   //'wilks',
    parseInt(res[16]) || 0,                     //'year',
    res[17] !== 'yes'                           //'equipped'
  ]))

module.exports = results
