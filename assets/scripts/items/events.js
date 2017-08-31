'use strict'
const itemApi = require('./api.js')
const cartEvent = require('../carts/events.js')
const itemUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const currentCart = require('../currentCart')

const viewAll = function () {
  itemApi.index()
    .then(itemUi.onIndexItemSuccess)
    .catch(itemUi.onIndexItemError)
}

const onViewItem = function () {
  const itemId = $(this).parent().data('id')
  itemApi.show(itemId)
    .then(itemUi.onViewItemSuccess)
    .catch(itemUi.onViewItemError)
}

const onAddToCart = function (e) {
  const itemId = $(this).parent().parent().data('id')
  const quantity = $(this).parent().parent().data('quantity')
  const newCart = {
    cart: {
      products: [{item_id: itemId, quantity: quantity}]
    }
  }
  const data = {item_id: itemId, quantity: quantity}
  if (currentCart.cart.products.length === 0) {
    cartEvent.onCreateCart(newCart)
  } else {
    if (UniqueItem(data)) {
      currentCart.cart.products.push(data)
      cartEvent.onUpdateCart(currentCart, store.cartId)
    }
  }
}

const UniqueItem = function (data) {
  const itemId = data.item_id
  for (let i = 0; i < currentCart.cart.products.length; i++) {
    if (itemId === currentCart.cart.products[i].item_id) {
      return false
    }
  }
  return true
}

const addHandlers = () => {
  $('#allBtn').on('click', viewAll)
  $('#items').on('click', '.viewItemBtn', onViewItem)
  $('#items').on('click', '.addCartBtn', onAddToCart)
}

module.exports = {
  addHandlers
}
