// Truly name of this exercise is "Basic: Filter"

function getShortMessages(messages) {
    return messages
        .filter(message => message.message.length < 50)
        .map(message => message.message)
}

module.exports = getShortMessages;