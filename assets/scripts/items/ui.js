'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/items.handlebars')
const showItemTemplate = require('../templates/item.handlebars')

const onIndexItemSuccess = function (data) {
  $('#main').css('display', 'block')
  $('#items').empty()
  $('#firstJumbo').css('display', 'none')
  $('#userProf').empty()
  const showItemsHTML = showItemsTemplate({ items: data.items })
  $('#items').append(showItemsHTML)
}

const onIndexItemError = function (error) {
  console.log(error)
}

const onViewItemSuccess = function (data) {
  $('#items').empty()
  const showItemHTML = showItemTemplate({ item: data.item })
  $('#items').append(showItemHTML)
}

const onViewItemError = function (error) {
  console.log(error)
}

const onNewCartSuccess = function (data) {
  $('#alertSuccess').css('display', 'block')
  $('#alertSuccess').text('Item added to new cart!')
  $('#alertDanger').css('display', 'none')
  console.log('this is data from onNewCartSuccess ', data)
}

const onNewCartError = function (error) {
  console.log(error)
}

module.exports = {
  onIndexItemSuccess,
  onIndexItemError,
  onViewItemSuccess,
  onViewItemError,
  onNewCartSuccess,
  onNewCartError
}
