const _ = require("lodash");

function grouping(comments) {
    return _.chain(comments)
        .groupBy("username")
        .map((comments, username) => {
            return {username: username, comment_count: _.size(comments)}
        })
        .sortBy("comment_count")
        .reverse()
        .value();
}

module.exports = grouping;

console.log(grouping([
    {username: "tim", comment: "you are doing a great job!"},
    {username: "tim", comment: "when you have new workshoppers?"},
    {username: "cat_lover", comment: "wtf? where are all the cats gone?"},
    {username: "max", comment: "where have you been on friday? we missed you!"},
    {username: "max", comment: "You don't answer anymore - why?"},
    {username: "cat_lover", comment: "MORE cats!!!"},
    {username: "max", comment: "i really love your site"}
]));