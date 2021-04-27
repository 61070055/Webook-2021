const crypto = require('crypto')

function genRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length)
}

function hashPassword(password, salt) {
  let paaswordToBeHash = password.toString().concat(salt)
  return crypto.createHash('sha512').update(paaswordToBeHash).digest('hex');
}

module.exports.hashPassword = hashPassword
module.exports.genRandomString = genRandomString