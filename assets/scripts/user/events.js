'use strict'
const userApi = require('./api.js')
const cartApi = require('../carts/api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const currentCart = require('../currentCart')
const cartEvent = require('../carts/events.js')

const onSignUp = function (e) {
  e.preventDefault()
  // const email = $('#email').val()
  const pwd = $('#pwd').val()
  const pwdConfirm = $('#pwdConfirm').val()
  if (pwd === pwdConfirm) {
    const data = getFormFields(e.target)
    // let userCred = {
    //   credentials: {
    //     email: email,
    //     password: pwd
    //   }
    // }
    // userCred = JSON.stringify(userCred)
    // console.log(userCred)
    userApi.create(data)
      .then(userUi.onSignUpSuccess)
      .catch(userUi.onSignUpError)
      // .then((userCred) => autoSignIn(data))
  } else {
    $('#signUpMsg').text('Password and Password Confirmation must match!')
  }
}

const autoSignIn = function (data) {
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .then(() => initCurrentCart())
    .catch(userUi.onSignInError)
}

const onLogOut = function () {
  userApi.logOut()
    .then(userUi.onLogOutSuccess)
    .catch(userUi.onLogOutError)
}

const onChangePwd = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  userApi.changePwd(data)
    .then(userUi.onChangePwdSuccess)
    .catch(userUi.onChangePwdError)
}

const onViewProfile = function (e) {
  e.preventDefault()
  const data = store.user.id
  userApi.viewProfile(data)
    .then(userUi.onViewProfileSuccess)
    .catch(userUi.onViewProfileError)
}

const onUpdateProfile = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  userApi.updateUser(data)
    .then(userUi.onUpdateProfileSuccess)
    .catch(userUi.onUpdateProfileError)
}

const initCurrentCart = function () {
  cartApi.index()
    .then((data) => cartEvent.filterCarts(data))
    .then((data) => setCurrentCart(data))
}

// initializes the cart if there is or isnt one already
const setCurrentCart = function (data) {
  let cart = filterPaid(data)
  if (cart) {
    store.cartId = cart.id
    currentCart.cart.products = cart.products
    cleanCart()
  }
}

// get cart that are not paid
const filterPaid = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].isPaid === false) {
      return data[i]
    }
  }
}

// removes id and _id in current cart
const cleanCart = function () {
  for (let i = 0; i < currentCart.cart.products.length; i++) {
    delete currentCart.cart.products[i]['id']
    delete currentCart.cart.products[i]['_id']
  }
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
  $('#signInForm').on('submit', onSignIn)
  $('#logOutBtn').on('click', onLogOut)
  $('#changePwdForm').on('submit', onChangePwd)
  $('#viewProfileBtn').on('click', onViewProfile)
  $('#userInfo').on('submit', '#updateUserForm', onUpdateProfile)
}

module.exports = {
  addHandlers
}
