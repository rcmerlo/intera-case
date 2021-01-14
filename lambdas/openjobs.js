const { scanFromDB } = require('../database.js')

const openjobs = () => scanFromDB("openjobs")

module.exports  = { openjobs}