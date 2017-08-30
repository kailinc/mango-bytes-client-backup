'use strict'
const store = require('../store')
const config = require('../config.js')

const index = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/carts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const create = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/carts',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const show = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/carts/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/carts/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/carts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

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
  index,
  show,
  destroy,
  update,
  create
  // changePwd,
  // viewProfile,
  // updateUser
}
