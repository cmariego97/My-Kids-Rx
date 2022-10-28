const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

3
//may need to adjust input params
module.exports = {
    signToken: function ({provider, email}) {
        const payload = { provider, email };
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}