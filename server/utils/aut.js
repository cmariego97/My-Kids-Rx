const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

3
//may need to adjust input params
module.exports = {
    signToken: function ({ email, _id}) {
        const payload = { email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}