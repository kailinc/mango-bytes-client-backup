'use strict'
const cartApi = require('./api.js')
const cartUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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

const onGetCarts = function () {
  cartApi.index()
    .then((data) => filterCarts(data))
    .then(cartUi.onGetCartsSuccess)
    .catch(cartUi.onGetCartsError)
}
//
// const onSignIn = function (e) {
//   e.preventDefault()
//   const data = getFormFields(e.target)
//   userApi.signIn(data)
//     .then(userUi.onSignInSuccess)
//     .catch(userUi.onSignInError)
// }
//
// const onLogOut = function () {
//   userApi.logOut()
//     .then(userUi.onLogOutSuccess)
//     .catch(userUi.onLogOutError)
// }
//
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
// const onUpdateProfile = function (e) {
//   e.preventDefault()
//   const data = getFormFields(e.target)
//   userApi.updateUser(data)
//     .then(userUi.onUpdateProfileSuccess)
//     .catch(userUi.onUpdateProfileError)
// }

const addHandlers = () => {
  $('#cartBtn').on('click', onGetCarts)
  // $('#signInForm').on('submit', onSignIn)
  // $('#logOutBtn').on('click', onLogOut)
  // $('#changePwdForm').on('submit', onChangePwd)
  // $('#viewProfileBtn').on('click', onViewProfile)
  // $('#userInfo').on('submit', '#updateUserForm', onUpdateProfile)
}

module.exports = {
  addHandlers
}
