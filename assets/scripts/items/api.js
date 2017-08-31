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

const show = function (itemId) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/items/' + itemId,
    headers: {
      Authorization: 'Token token=W22m8DScP6ksAPy3jZBYgR0f2SJxji9jfFI3m0K1DD8=--yL1HkDIgU6a5SP8MddRV+KpRMgjTG3guENBYQHUP3ps='
    }
  })
}

module.exports = {
  index,
  show
}
