const { scanFromDB } = require('../database.js');

const talents = () => scanFromDB("talents");

module.exports = { talents}