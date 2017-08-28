'use strict'
const itemApi = require('./api.js')
const itemUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const viewSkills = function (e) {
  e.preventDefault()
  const data = ''
  itemApi.index(data)
    .then(itemUi.onIndexItemSuccess)
    .catch(itemUi.onIndexItemError)
}

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
  $('#skillsBtn').on('click', viewSkills)
  // $('#signInForm').on('submit', onSignIn)
  // $('#logOutBtn').on('click', onLogOut)
  // $('#changePwdForm').on('submit', onChangePwd)
  // $('#viewProfileBtn').on('click', onViewProfile)
  // $('#userInfo').on('submit', '#updateUserForm', onUpdateProfile)
}

module.exports = {
  addHandlers
}
