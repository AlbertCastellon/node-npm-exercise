// Require the lodash library here in this line
const _ = require('lodash')

function sum(a, b) {
  return _.add(a, b)
}

function filterFalsyValues(arr) {
  return _.compact(arr)
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray)
}

function fillArray(arr, value) {
  return _.fill(arr, value)
}

function calculateMean(arr) {
  return _.mean(arr)
}

function camelCase(str) {
  return _.camelCase([str])
}

function capitalize(str) {
  return _.capitalize(str)
}

function sortByNames(arr) {
  return _.sortBy(arr, 'name')
}

function flatArrayAndCalculateMean(arr) {
  return _.mean(_.flatten(arr))
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  arrayOrdered = _.sortBy(arr, 'name')
  let arrSimple = []
  arrayOrdered.forEach(element => {
    arrSimple.push(_.capitalize(element.name))
  })
  return arrSimple
}

function transformToSnakeCaseAndAllCaps(arr) {
  for(let i = 0; i < arr.length; i++){
    arr[i] = _.toUpper(_.snakeCase(arr[i]))
  }
  return arr
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};
