'use strict'
const store = require('../store')
const config = require('../config.js')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePwd = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  signIn,
  logOut,
  changePwd
}
