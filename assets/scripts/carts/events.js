'use strict'
const cartApi = require('./api.js')
const cartUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const frontCart = require('../frontCart')

// gets carts that belongs to the user
const filterCarts = function (data) {
  const cartsArray = data.carts
  let yourCarts = []
  for (let i = 0; i < cartsArray.length; i++) {
    if (cartsArray[i]._owner === store.user.id) {
      yourCarts.push(cartsArray[i])
    }
  }
  return yourCarts
}

// function to update cart info in the front end
const UpdateData = function (data, id, quantity) {
  if (quantity > 0) {
    for (let i = 0; i < data.cart.products.length; i++) {
      for (let key in data.cart.products[i]) {
        if (data.cart.products[i].item === id) {
          data.cart.products[i].quantity = parseInt(quantity)
        }
      }
    }
  } else {
    console.log('less than 1')
  }
  return data
}

const onGetCarts = function () {
  cartApi.index()
    .then((data) => filterCarts(data))
    .then(cartUi.onGetCartsSuccess)
    .catch(cartUi.onGetCartsError)
}

const onViewCart = function () {
  const data = $(this).parent().data('id')
  cartApi.show(data)
    .then(cartUi.onViewCartSuccess)
    .catch(cartUi.onViewCartError)
}

const onDeleteCart = function () {
  const data = $(this).parent().data('id')
  cartApi.destroy(data)
    .then(cartUi.onDestroyCartSuccess)
    .then(onGetCarts)
    .catch(cartUi.onDestroyCartError)
}

const onUpdateQuantity = function () {
  const quantity = $(this).val()
  const cartId = $(this).parent().parent().data('id')
  if (quantity > 0) {
    const itemId = $(this).parent().data('item-id')
    let data = UpdateData(frontCart, itemId, quantity)
    data = JSON.stringify(data)
    cartApi.update(data, cartId)
      .then(cartUi.onUpdateCartSuccess)
      .catch(cartUi.onUpdateCartError)
  }
}

// const onChangePwd = function (e) {
//   e.preventDefault()
//   const data = getFormFields(e.target)
//   userApi.changePwd(data)
//     .then(userUi.onChangePwdSuccess)
//     .catch(userUi.onChangePwdError)
// }
//
// const onViewProfile = function (e) {
//   e.preventDefault()
//   const data = store.user.id
//   userApi.viewProfile(data)
//     .then(userUi.onViewProfileSuccess)
//     .catch(userUi.onViewProfileError)
// }
//

const addHandlers = () => {
  $('#cartBtn').on('click', onGetCarts)
  $('#items').on('click', '.viewCartBtn', onViewCart)
  $('#items').on('click', '.clearCartBtn', onDeleteCart)
  $('#items').on('change', '.itemQuantity', onUpdateQuantity)
  // $('#logOutBtn').on('click', onLogOut)
  // $('#changePwdForm').on('submit', onChangePwd)
  // $('#viewProfileBtn').on('click', onViewProfile)
}

module.exports = {
  addHandlers
}
