const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';
//export token containing user email, user provider, secret, and expiration
module.exports = {
    signToken: function ({provider, email}) {
        const payload = { provider, email };
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}