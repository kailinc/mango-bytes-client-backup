'use strict'
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  userApi.add(data)
    .then(userUi.onSignUpSuccess)
    .catch(userUi.onSignUpError)
}

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
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
  // console.log(data)
  userApi.changePwd(data)
    .then(userUi.onChangePwdSuccess)
    .catch(userUi.onChangePwdError)
}

const onUserShoes = function () {
  $('#successNotify').css('display', 'none')
  $('#errorNotify').css('display', 'none')
  const userId = store.user.id
  userApi.userShoes(userId)
    .then(userUi.onUserShoesSuccess)
    .catch(userUi.onUserShoesError)
}

const onUserCollections = function () {
  $('#successNotify').css('display', 'none')
  $('#errorNotify').css('display', 'none')
  const userId = store.user.id
  userApi.userCollections(userId)
    .then(userUi.onUserCollectionsSuccess)
    .catch(userUi.onUserCollectionsError)
}

const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#logOutBtn').on('click', onLogOut)
  $('#changePwd').on('submit', onChangePwd)
  $('#userShoesBtn').on('click', onUserShoes)
  $('#userCollectionsBtn').on('click', onUserCollections)
}

module.exports = {
  addHandlers,
  onUserShoes
}
