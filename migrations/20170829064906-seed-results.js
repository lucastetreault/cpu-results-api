'use strict'

const results = require('../results')

let dbm
let type
let seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  return Promise.all(results.map(result => new Promise((resolve, reject) => db.insert('results', [
    'competition',
    'date',
    'location',
    'competitionType',
    'sex',
    'name',
    'province',
    'weight',
    'oldWeightClass',
    'weightClass',
    'ageCategory',
    'squat',
    'bench',
    'deadlift',
    'total',
    'wilks',
    'year',
    'equipped'
  ], result, (err) => {
    if (err) { reject(err) }
    resolve()
  }))))
}

exports.down = function (db) {
  return null
}

exports._meta = {
  'version': 1
}
