'use strict'
const cartApi = require('./api.js')
const itemApi = require('../items/api.js')
const cartUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const frontCart = require('../frontCart')
const cartInfo = require('../cartInfo')
const currentCart = require('../currentCart')

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
    for (let i = 0; i < data.cart.products.length; i++) {
      if (data.cart.products[i].item_id === id) {
        data.cart.products.splice(i, 1)
      }
    }
  }
  return data
}

// this function gets the full item information for each item with ajax request
const getItems = function () {
  let fullItem = []
  for (let i = 0; i < frontCart.cart.products.length; i++) {
    const itemId = (frontCart.cart.products[i].item_id)
    itemApi.show(itemId)
      .then((data) => fullItem.push(data.item))
      .then(() => addItemQuantity(fullItem))
      .then(() => cartUi.onViewCartSuccess(fullItem))
      .catch((error) => console.log(error))
  }
}

// this function updates the quantity for
const addItemQuantity = function (data) {
  for (let i = 0; i < frontCart.cart.products.length; i++) {
    for (let k = 0; k < data.length; k++) {
      if (frontCart.cart.products[i].item_id === data[k].id) {
        data[k].quantity = frontCart.cart.products[i].quantity
      }
    }
  }
  console.log('this is data from addItemQuantity() ', data)
}

const onGetCarts = function () {
  if (!store.user) {
    $('#guestModal').modal('show')
  } else {
    $('#firstJumbo').css('display', 'none')
    cartApi.index()
      .then((data) => filterCarts(data))
      .then(cartUi.onGetCartsSuccess)
      .catch(cartUi.onGetCartsError)
  }
}

const onViewCart = function () {
  const data = $(this).parent().data('id')
  const paymentStatus = $(this).parent().data('paid')
  if (paymentStatus) {
    cartUi.renderPaidSide(paymentStatus, data)
  } else {
    cartUi.renderUnpaidSide(paymentStatus, data)
  }
  cartApi.show(data)
    .then(cartUi.onGetCartSuccess)
    .then(() => getItems())
    .catch(cartUi.onGetCartError)
}

const onDeleteCart = function () {
  const data = $(this).data('id')
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
const onDeleteItem = function () {
  const itemId = $(this).data('id')
  let data = UpdateData(frontCart, itemId, 0)
  let cartId = $('#userProf').children().data('cart-id')
  cartApi.update(data, cartId)
    .then(cartUi.onUpdateCartSuccess)
    .catch(cartUi.onUpdateCartError)
}

const onCreateCart = function (data) {
  // data = JSON.stringify(data)
  cartApi.create(data)
    .then(cartUi.onCreateCartSuccess)
    .catch(cartUi.onCreateCartError)
}

const onUpdateCart = function (data, id) {
  cartApi.update(data, id)
    .then(cartUi.onUpdateCartSuccess)
    .catch(cartUi.onUpdateCartError)
}

const addHandlers = () => {
  $('#cartBtn').on('click', onGetCarts)
  $('#items').on('click', '.viewCartBtn', onViewCart)
  $('#userProf').on('click', '.clearCartBtn', onDeleteCart)
  $('#items').on('change', '.itemQuantity', onUpdateQuantity)
  $('#items').on('click', '.deleteItemBtn', onDeleteItem)
  $('.createCartBtn').on('click', onCreateCart)
}

module.exports = {
  addHandlers,
  filterCarts,
  onCreateCart,
  onUpdateCart
}
