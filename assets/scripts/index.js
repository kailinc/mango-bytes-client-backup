'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const user = require('./user/events.js')
const shoe = require('./shoe/events.js')
const collection = require('./collection/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  user.addHandlers()
  shoe.addHandlers()
  collection.addHandlers()
})
