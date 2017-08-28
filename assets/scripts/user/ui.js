'use strict'
const store = require('../store')
// const showUserShoesTemplate = require('../templates/user-shoes.handlebars')
// const showUserCollectionsTemplate = require('../templates/user-collections.handlebars')

const onSignUpSuccess = function (data) {
  $('#signUpForm').get(0).reset()
  $('#signUpMsg').text(' ')
  $('#signUpModal').modal('hide')
  $('#alertSuccess').css('display', 'block').text('Well Done! You are signed in!')
  $('#signUpError').css('display', 'none')
}

const onSignUpError = function (error) {
  console.log(error)
  $('#signUpMsg').text('There was a problem with signing up. The email is taken.')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#signInMsg').text(' ')
  $('#signInForm').get(0).reset()
  $('#signInModal').modal('hide')
  $('.userIn').css('display', 'block')
  $('.userOut').css('display', 'none')
}

const onSignInError = function (error) {
  console.log(error)
  $('#signInMsg').text('There was a problem with signing in. The email/password do not match or the account is not signed up.')
  $('#signInForm').get(0).reset()
}

const onChangePwdSuccess = function () {
  $('#changePwdForm').get(0).reset()
  $('#changePwdModal').modal('hide')
  $('#alertSuccess').css('display', 'block').text('Well Done! You have changed your password!')
  $('#changePwdMsg').text(' ')
  $('#alertDanger').css('display', 'none')
}

const onChangePwdError = function (error) {
  console.log(error)
  $('#changePwdForm').get(0).reset()
  $('#changePwdMsg').text('There was a problem changing your password.')
}

const onLogOutSuccess = function () {
  store.user = null
  $('.userIn').css('display', 'none')
  $('.userOut').css('display', 'block')
}

const onLogOutError = function (error) {
  console.log(error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onLogOutSuccess,
  onLogOutError,
  onChangePwdSuccess,
  onChangePwdError
}
