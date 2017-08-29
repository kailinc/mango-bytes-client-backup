'use strict'
const store = require('../store')

const showItemTemplate = require('../templates/items.handlebars')

const onIndexItemSuccess = function (data) {
  console.log(data)
  $('#items').empty()
  const showItemHTML = showItemTemplate({ items: data.items })
  $('#items').append(showItemHTML)
}

const onIndexItemError = function (error) {
  console.log(error)
}

const onViewItemSuccess = function (data) {
  console.log(data)
}

const onViewItemError = function (error) {
  console.log(error)
}
module.exports = {
  onIndexItemSuccess,
  onIndexItemError,
  onViewItemSuccess,
  onViewItemError
}
