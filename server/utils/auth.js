const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

3
//may need to adjust input params
module.exports = {
    signToken: function (email) {
        const payload = { email };
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}