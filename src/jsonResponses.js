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
    const responseJSON = {
        message: '',
        id: '',
    };

    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response) => {
    const responseJSON = {
        message: '',
        id: '',
    };

    respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response) => {
    const responseJSON = {
        message: '',
        id: '',
    };

    respondJSON(request, response, 200, responseJSON);
};

const forbidden = (request, response) => {
    const responseJSON = {
        message: '',
        id: '',
    };

    respondJSON(request, response, 200, responseJSON);
};

const internal = (request, response) => {
    const responseJSON = {
        message: 'Internal Server Error. Something went wrong.',
        id: 'internalError',
    };

    respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
    const responseJSON = {
        message: 'A GET request for this page has not been implemented.',
        id: 'notImplemented',
    };

    respondJSON(request, response, 501, responseJSON);
};

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound',
    };

    respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    success,
    badRequest,
    unauthorized,
    forbidden,
    internal,
    notImplemented,
    notFound,
};