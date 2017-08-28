'use strict'
const store = require('../store')
const config = require('../config.js')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/items',
    headers: {
      Authorization: 'Token token=W22m8DScP6ksAPy3jZBYgR0f2SJxji9jfFI3m0K1DD8=--yL1HkDIgU6a5SP8MddRV+KpRMgjTG3guENBYQHUP3ps='
    }
  })
}

// const create = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-up',
//     method: 'POST',
//     data
//   })
// }
//
// const signIn = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-in',
//     method: 'POST',
//     data
//   })
// }
//
// const changePwd = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const logOut = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//

//
// const updateUser = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiOrigin + '/update-user/' + store.user.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  index
  // signIn,
  // logOut,
  // changePwd,
  // viewProfile,
  // updateUser
}
