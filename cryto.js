const crypto = require('crypto');

const password = '123456';
const hashed = crypto.createHash('sha256')
    .update(password)
    .digest('hex');

console.log('Password original:', password);
console.log('Password hasheado:', hashed);