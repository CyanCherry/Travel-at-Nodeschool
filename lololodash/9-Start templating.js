const _ = require("lodash");

const welcome = function (userInfo) {
    return _.template("Hello <%=name%> (logins: <%=login.length%>)")(userInfo);
};

module.exports = welcome;

console.log(welcome(
    {
        name: "Foo",
        login: [1407574431, 140753421]
    }
));