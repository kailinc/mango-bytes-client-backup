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
}

const onSignInError = function (error) {
  console.log(error)
  $('#signInMsg').text('There was a problem with signing in. The email/password do not match or the account is not signed up.')
  $('#signInForm').get(0).reset()
}
//
// const onChangePwdSuccess = function () {
//   uiActions.clearForms()
//   $('#changePwdModal').modal('hide')
//   $('#successNotify').css('display', 'block').text('You have changed your password')
//   $('#errorNotify').css('display', 'none')
//
// }
// const onChangePwdError = function (error) {
//   uiActions.clearForms()
//   $('#changePwdModal').modal('hide')
//   $('#errorNotify').css('display', 'block').text('The password you gave was wrong')
//   $('#successNotify').css('display', 'none')
// }
//
// const onLogOutSuccess = function () {
//   // console.log('logged out')
//   store.user = null
//   $('#landingPage').css('display', 'block')
//   $('#innerPage').css('display', 'none')
//   $('#errorNotify').css('display', 'none')
//   $('#successNotify').css('display', 'none')
//   $('#signUpSuccess').css('display', 'none')
//   $('#signUpError').css('display', 'none')
// }
//
// const onLogOutError = function (error) {
//   // console.log(error)
// }
//
// const onUserShoesSuccess = function (data) {
//   $('#content').empty()
//
//   if (data.user.shoes.length === 0) {
//     $('#errorNotify').css('display', 'block').text('You don\'t have any shoes. Add some shoes to see shoes.')
//     $('#successNotify').css('display', 'none')
//   } else {
//     const showUserShoesHTML = showUserShoesTemplate({ shoes: data.user.shoes })
//     $('#content').append(showUserShoesHTML)
//     // event handlers
//     $('.deleteShoeBtn').on('click', shoe.deleteShoe)
//     $('.viewShoeBtn').on('click', shoe.viewShoe)
//     $('.editShoeBtn').on('click', shoe.openEditModal)
//     $('#editShoeForm').on('submit', shoe.editShoe)
//   }
// }
//
// const onUserShoesError = function (error) {
//   // console.log(error)
// }
//
// const onUserCollectionsSuccess = function (data) {
//   $('#content').empty()
//   if (data.user.collections.length === 0) {
//     $('#errorNotify').css('display', 'block').text('You don\'t have any collections. Add some collections to see collections')
//     $('#successNotify').css('display', 'none')
//   } else {
//     const showUserCollectionsHTML = showUserCollectionsTemplate({ collections: data.user.collections })
//     $('#content').append(showUserCollectionsHTML)
//
//       // EVENT LISTNERS FOR COLLECTION ACTIONS
//     $('.deleteCollectionBtn').on('click', collection.deleteCol)
//     $('.viewCollectionBtn').on('click', collection.showCol)
//     $('.editCollectionBtn').on('click', collection.openEditColModal)
//     $('#editColForm').on('submit', collection.editCol)
//   }
// }
//
// const onUserCollectionsError = function (error) {
//   // console.log(error)
// }

// have a function to clear all forms
module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError
  // onLogOutSuccess,
  // onLogOutError,
  // onChangePwdSuccess,
  // onChangePwdError,
  // onUserShoesSuccess,
  // onUserShoesError,
  // onUserCollectionsSuccess,
  // onUserCollectionsError
}
