'use strict'
const store = require('../store')
const frontCart = require('../frontCart')
const showCartsTemplate = require('../templates/carts.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
const showPaidCartTemplate = require('../templates/paid-cart.handlebars')

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
      if (key === '_id') {
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
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#items').empty()
  console.log(modDate)
  const showCartsHTML = showCartsTemplate({ carts: modDate })
  $('#items').append(showCartsHTML)
}

const onGetCartsError = function (error) {
  console.log(error)
}

const onViewCartSuccess = function (data) {
  let showCartHTML = ''
  data.cart.updatedAt = filterDate(data.cart.updatedAt)
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#items').empty()
  if (data.cart.isPaid === false) {
    showCartHTML = showCartTemplate({ cart: data.cart })
  } else {
    showCartHTML = showPaidCartTemplate({ cart: data.cart })
  }
  $('#items').append(showCartHTML)
  data = filterCart(data.cart)
  data = deleteId(data)
  // frontCart.cart = filterCart(data.cart)
  frontCart.cart = data
}

const onViewCartError = function (error) {
  console.log(error)
}

const onDestroyCartSuccess = function () {
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#items').empty()
}

const onDestroyCartError = function (error) {
  console.log(error)
}

const onUpdateCartSuccess = function (data) {
  console.log('ui data', data)
}

const onUpdateCartError = function (error) {
  console.error(error)
}
//
// const onViewProfileSuccess = function (data) {
//   $('#main').css('display', 'none')
//   $('#userProfile').css('display', 'block')
//   $('#userInfo').empty()
//   const showUserProfileHTML = showUserProfileTemplate({ user: data.user })
//   $('#userInfo').append(showUserProfileHTML)
//   console.log(data)
// }
//
// const onViewProfileError = function (error) {
//   console.log(error)
// }
//
// const onUpdateProfileSuccess = function () {
//   $('#alertSuccess').css('display', 'block').text('Well Done! You have updated your profile!')
//   $('#alertDanger').css('display', 'none')
// }
//
// const onUpdateProfileError = function (error) {
//   console.log(error)
//   $('#alertDanger').css('display', 'block').text('Sorry, there was a problem with updating your profile.')
//   $('#alertSuccess').css('display', 'none')
// }

module.exports = {
  onGetCartsSuccess,
  onGetCartsError,
  onViewCartSuccess,
  onViewCartError,
  onDestroyCartSuccess,
  onDestroyCartError,
  onUpdateCartSuccess,
  onUpdateCartError
}
