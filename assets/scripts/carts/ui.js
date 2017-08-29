'use strict'
const store = require('../store')
const showCartsTemplate = require('../templates/carts.handlebars')

const modifyTime = function (data) {
  for (let i = 0; i < data.length; i++) {
    data[i].updatedAt = filterDate(data[i].updatedAt)
  }
  return data
}

const filterDate = function (date) {
  return date.split('T')[0]
}

const onGetCartsSuccess = function (data) {
  // console.log(data)
  const modDate = modifyTime(data)
  $('#userProfile').css('display', 'none')
  $('#firstJumbo').css('display', 'none')
  $('#items').empty()
  const showCartsHTML = showCartsTemplate({ carts: modDate })
  $('#items').append(showCartsHTML)
}

const onGetCartsError = function (error) {
  console.log(error)
}
//
// const onSignInSuccess = function (data) {
//   store.user = data.user
//   $('#signInMsg').text(' ')
//   $('#signInForm').get(0).reset()
//   $('#signInModal').modal('hide')
//   $('.userIn').css('display', 'block')
//   $('.userOut').css('display', 'none')
// }
//
// const onSignInError = function (error) {
//   console.log(error)
//   $('#signInMsg').text('There was a problem with signing in. The email/password do not match or the account is not signed up.')
//   $('#signInForm').get(0).reset()
// }
//
// const onChangePwdSuccess = function () {
//   $('#changePwdForm').get(0).reset()
//   $('#changePwdModal').modal('hide')
//   $('#alertSuccess').css('display', 'block').text('Well Done! You have changed your password!')
//   $('#changePwdMsg').text(' ')
//   $('#alertDanger').css('display', 'none')
// }
//
// const onChangePwdError = function (error) {
//   console.log(error)
//   $('#changePwdForm').get(0).reset()
//   $('#changePwdMsg').text('There was a problem changing your password.')
// }
//
// const onLogOutSuccess = function () {
//   store.user = null
//   $('.userIn').css('display', 'none')
//   $('.userOut').css('display', 'block')
// }
//
// const onLogOutError = function (error) {
//   console.log(error)
// }
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
  onGetCartsError
  // onSignInSuccess
}
