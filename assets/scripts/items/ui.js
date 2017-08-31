'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/items.handlebars')
const showItemTemplate = require('../templates/item.handlebars')

const onIndexItemSuccess = function (data) {
  $('#items').empty()
  const showItemsHTML = showItemsTemplate({ items: data.items })
  $('#items').append(showItemsHTML)
}

const onIndexItemError = function (error) {
  console.log(error)
}

const onViewItemSuccess = function (data) {
  console.log('data from viewing a single item', data)
  $('#items').empty()
  const showItemHTML = showItemTemplate({ item: data.item })
  $('#items').append(showItemHTML)
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
