const capitalizeFirstLetter = require('./capitalizeFirstLetter')
const isEvenNumber = require('./isEvenNumber')
const print = require('./print')
const numberArrayToString = require('./numberArrayToString')
const formatDate = require('./formatDate')

module.exports = (arr) => {
    return Array.from(new Set(arr));
  }