class BadRequestError extends Error{
    constructor(message='Bad Request') {
        super(message);
        this.status = 400;
    }
}

class InternalServerError extends Error{
    constructor(message = 'Internal Error') {
        super(message);
        this.status = 500;
    }
}

class NotFoundError extends Error {
    constructor(message = 'Not found') {
        super(message);
        this.status = 404;
    }
}

module.exports = {
    BadRequestError,
    InternalServerError,
    NotFoundError
}