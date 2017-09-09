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
  $('#userProfile').css('display', 'none')
  const itemId = $(this).parent().data('id')
  itemApi.show(itemId)
    .then(itemUi.onViewItemSuccess)
    .catch(itemUi.onViewItemError)
}

const onAddToCart = function (e) {
  e.preventDefault()
  if (!store.user) {
    $('#guestModal').modal('show')
  } else {
    const quantity = getFormFields(e.target).quantity
    const newCart = {
      cart: {
        products: [{item_id: $(this).data('id'), quantity: quantity}]
      }
    }
    const data = {item_id: $(this).data('id'), quantity: quantity}
    if (quantity) {
      if (currentCart.cart.products.length === 0) {
        $('#alertSuccess').css('display', 'block')
        $('#alertSuccess').text('Item added to new cart!')
        $('#alertDanger').css('display', 'none')
        cartEvent.onCreateCart(newCart)
      } else {
        if (UniqueItem(data)) {
          $('#alertSuccess').css('display', 'block')
          $('#alertSuccess').text('Item added to existing cart!')
          $('#alertDanger').css('display', 'none')
          currentCart.cart.products.push(data)
          cartEvent.onUpdateCart(currentCart, store.cartId)
        } else {
          UpdateItemQuanity(data)
        }
      }
    } else {
      $('#alertDanger').css('display', 'block').text('You need to add a quantity')
      $('#alertSuccess').css('display', 'none')
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
  $('#items').on('submit', '.itemForm', onAddToCart)
}

// function to update quantity of item of current shopping cart
const UpdateItemQuanity = function (data) {
  // console.log('current cart is from UpdateItemQuanity() ', currentCart)
  $('#alertDanger').css('display', 'block').text('You already added this item to cart. You can only buy 1 per time.')
  $('#alertSuccess').css('display', 'none')
}
module.exports = {
  addHandlers
}
