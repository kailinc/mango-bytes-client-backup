'use strict'
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

// const onSignUp = function (e) {
//   e.preventDefault()
//   const pwd = $('#pwd').val()
//   const pwdConfirm = $('#pwdConfirm').val()
//   if (pwd === pwdConfirm) {
//     const data = getFormFields(e.target)
//     userApi.create(data)
//       .then(userUi.onSignUpSuccess)
//       .catch(userUi.onSignUpError)
//   } else {
//     $('#signUpMsg').text('Password and Password Confirmation must match!')
//   }
// }
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
  // $('#signUpForm').on('submit', onSignUp)
  // $('#signInForm').on('submit', onSignIn)
  // $('#logOutBtn').on('click', onLogOut)
  // $('#changePwdForm').on('submit', onChangePwd)
  // $('#viewProfileBtn').on('click', onViewProfile)
  // $('#userInfo').on('submit', '#updateUserForm', onUpdateProfile)
}

module.exports = {
  addHandlers
}
