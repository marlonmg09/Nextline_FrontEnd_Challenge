'use strict';

module.exports.endpoint = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            data: [
                {
                    name: 'Personal',
                    id: 123
                },
                {
                    name: 'Business',
                    id: 777
                },
                {
                    name: 'Other',
                    id: 999
                }
            ]
        }),
    };
    callback(null, response);
};