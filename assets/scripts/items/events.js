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
  // console.log('currentCart is', currentCart)
  // console.log('data is', data)
  if (!notRepeatingItem(data)) {
    // console.log('not repeating')
    // console.log('currentCart is', currentCart)
    if (currentCart.cart.products.length === 0) {
      console.log('creating a cart')
      // currentCart.cart.products.push(data)
      // console.log(currentCart)
      cartEvent.onCreateCart(newCart)
    } else {
      console.log('updating a cart')
      currentCart.cart.products.push(data)
      cartEvent.onUpdateCart(currentCart, store.cartId)
    }
  }
}

const notRepeatingItem = function (data) {
  return currentCart.cart.products.includes(data)
}

const addHandlers = () => {
  $('#allBtn').on('click', viewAll)
  $('#items').on('click', '.viewItemBtn', onViewItem)
  $('#items').on('click', '.addCartBtn', onAddToCart)
  // $('#logOutBtn').on('click', onLogOut)
  // $('#changePwdForm').on('submit', onChangePwd)
  // $('#viewProfileBtn').on('click', onViewProfile)
  // $('#userInfo').on('submit', '#updateUserForm', onUpdateProfile)
}

module.exports = {
  addHandlers
}
