/**Content-Type application/json */

const respondJSON = (request, response, status, object) => {
    const content = JSON.stringify(object);
    response.writeHead(status, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(content, 'utf8'),
    });

    if (request.method !== 'HEAD' && status !== 204) {
        response.write(content);
    };

    response.end();
};

const success = (request, response) => {

};

const badRequest = (request, response) => {

};

const unauthorized = (request, response) => {

};

const forbidden = (request, response) => {

};

const internal = (request, response) => {

};

const notImplemented = (request, response) => {

};

module.exports = {
    success,
    badRequest,
    unauthorized,
    forbidden,
    internal,
    notImplemented,
};