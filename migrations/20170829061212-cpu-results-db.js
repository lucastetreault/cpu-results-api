'use strict'

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

exports.up = function (db, callback) {
  db.createTable('results', {
    id: {type: 'int', primaryKey: true, autoIncrement: true},
    competition: 'string',
    date: {type: 'date'},
    location: 'string',
    competitionType: 'string',
    sex: 'string',
    name: 'string',
    province: 'string',
    weight: 'decimal',
    oldWeightClass: 'string',
    weightClass: 'string',
    ageCategory: 'string',
    squat: 'decimal',
    bench: 'decimal',
    deadlift: 'decimal',
    total: 'decimal',
    wilks: 'decimal',
    year: 'integer',
    equipped: 'boolean'
  }, callback)
}

exports.down = function (db, callback) {
  db.dropTable('results', callback)
}

exports._meta = {
  'version': 1
}
