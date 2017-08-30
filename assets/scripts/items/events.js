'use strict'
const itemApi = require('./api.js')
const itemUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const addToPOJO = function (data) {

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
  const data = {item_id: itemId, quantity: quantity}
  // itemApi.show(itemId)
  //   .then(itemUi.onViewItemSuccess)
  //   .catch(itemUi.onViewItemError)
}

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
