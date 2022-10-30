const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';
//export token containing user email, user provider, secret, and expiration
module.exports = {
    signToken: function ({firstName, lastName, provider, email, password}) {
        const payload = { firstName, lastName, provider, email, password };
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}