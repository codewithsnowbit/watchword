// write a function which generates a password of length n
const Password = (n) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    for (var i = 0; i < n; i++) result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}

module.exports = {
    Password
}

console.log(Password(300));