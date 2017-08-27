'use strict'
const store = require('../store')
const config = require('../config.js')

const add = function (data) {
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
  // console.log(data)
  // console.log(store)
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
  // console.log(store.user.id)
  // console.log(store.user.id)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userShoes = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/user-shoes/' + data,
    method: 'GET'
  })
}

const userCollections = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/user-collections/' + data,
    method: 'GET'
  })
}

module.exports = {
  add,
  signIn,
  logOut,
  changePwd,
  userShoes,
  userCollections
}
