/* Returns a message according to the 'validation' string */
const validationMessage = (validation, field, value = 'string') => {
    const messages = {
        required: `'${field}' field is required`,
        cast: `'${field}' field must be a ${value}`,
        positiveInteger: `'${field}' value is not valid`,
        pattern: `The ${field} value does not follow a correct format`
    };
    return messages[validation];
};

module.exports = {
    validationMessage
};