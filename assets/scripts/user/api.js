'use strict'
const store = require('../store')
const config = require('../config.js')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    // url: 'http://httpbin.org/post',
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

const viewProfile = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/users/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateUser = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/update-user/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create,
  signIn,
  logOut,
  changePwd,
  viewProfile,
  updateUser
}
