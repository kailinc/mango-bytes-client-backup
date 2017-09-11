'use strict'
const store = require('../store')
const frontCart = require('../frontCart')
const currentCart = require('../currentCart')
const userEvent = require('../user/events')
const showCartsTemplate = require('../templates/carts.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
const showPaidCartTemplate = require('../templates/paid-cart.handlebars')
const showPaidSideCartTemplate = require('../templates/paid-side-cart.handlebars')
const showUnpaidSideCartTemplate = require('../templates/unpaid-side-cart.handlebars')

// function to loop through data to change date formate with filterDate()
const modifyTime = function (data) {
  for (let i = 0; i < data.length; i++) {
    data[i].updatedAt = filterDate(data[i].updatedAt)
  }
  return data
}

// returns just the date in string
const filterDate = function (date) {
  return date.split('T')[0]
}

// function to filter cart data
// only have products attribute
const filterCart = function (data) {
  for (let key in data) {
    // skip loop if the property is from prototype
    if (!data.hasOwnProperty(key)) continue
    if (key !== 'products') {
      delete data[key]
    }
  }
  return data
}

// function to delete _id cuz back end picky
const deleteId = function (data) {
  for (let i = 0; i < data.products.length; i++) {
    for (let key in data.products[i]) {
      if (key === '_id' || key === 'id') {
        delete data.products[i][key]
      }
    }
  }
  return data
}

const onGetCartsSuccess = function (data) {
  // console.log(data)
  const modDate = modifyTime(data)
  modDate.sort(function (a, b) {
    let nameA = a.isPaid.toString().toUpperCase()
    let nameB = b.isPaid.toString().toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  $('#main').css('display', 'block')
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#items').empty()
  $('#userProf').empty()
  console.log(modDate)
  const showCartsHTML = showCartsTemplate({ carts: modDate })
  $('#items').append(showCartsHTML)
}

const onGetCartsError = function (error) {
  console.log(error)
}

const onGetCartSuccess = function (data) {
  console.log('this is cart data from onGetCartSUccess() ', data)
  data.cart.updatedAt = filterDate(data.cart.updatedAt)
  data = filterCart(data.cart)
  data = deleteId(data)
  // frontCart.cart = filterCart(data.cart)
  frontCart.cart = data
}

const onGetCartError = function (error) {
  console.log(error)
}

const onDestroyCartSuccess = function () {
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#alertSuccess').css('display', 'block').text('You have cleared the cart.')
  $('#alertDanger').css('display', 'none')
  $('#signUpError').css('display', 'none')
  $('#items').empty()
  currentCart.cart.products = []
  console.log('current cart from ondestroy cart is ', currentCart)
}

const onViewCartSuccess = function (data) {
  // console.log('data of viewcart success is ', data)
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  const showCartHTML = showCartTemplate({ items: data })
  $('#items').empty()
  $('#items').append(showCartHTML)
}

const onDestroyCartError = function (error) {
  console.log(error)
}

const onUpdateCartSuccess = function (data) {
  $('#alertSuccess').css('display', 'block').text('You have removed the item.')
  $('#alertDanger').css('display', 'none')
}

const onUpdateCartError = function (error) {
  console.log(error)
}

const onCreateCartSuccess = function (data) {
  store.cartId = data.cart.id
  currentCart.cart.products = data.cart.products
  $('#alertSuccess').css('display', 'block')
  $('#alertSuccess').text('Item added to new cart!')
  $('#alertDanger').css('display', 'none')
  cleanCart()
}

const onCreateCartError = function (error) {
  console.log(error)
}

const cleanCart = function () {
  for (let i = 0; i < currentCart.cart.products.length; i++) {
    delete currentCart.cart.products[i]['id']
    delete currentCart.cart.products[i]['_id']
  }
}

const renderPaidSide = function (status, id) {
  const data = {status, id}
  $('#userProf').empty()
  const showPaidSideCartTemplateHTML = showPaidSideCartTemplate({ data: data })
  $('#userProf').append(showPaidSideCartTemplateHTML)
}

const renderUnpaidSide = function (status, id) {
  const data = {status, id}
  $('#userProf').empty()
  const showUnpaidSideCartTemplateHTML = showUnpaidSideCartTemplate({ data: data })
  $('#userProf').append(showUnpaidSideCartTemplateHTML)
}

const onUpdateItemQuantitySuccess = function (data) {
  console.log('this is data from onUpdateItemQuantitySuccess ', data)
}

const onUpdateItemQuantityError = function (error) {
  console.log(error)
}

module.exports = {
  onGetCartsSuccess,
  onGetCartsError,
  onGetCartSuccess,
  onGetCartError,
  onDestroyCartSuccess,
  onDestroyCartError,
  onUpdateCartSuccess,
  onUpdateCartError,
  onCreateCartSuccess,
  onCreateCartError,
  onViewCartSuccess,
  renderPaidSide,
  renderUnpaidSide,
  onUpdateItemQuantitySuccess,
  onUpdateItemQuantityError
}
