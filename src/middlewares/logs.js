const logRequest = (req, res, next) => {
    console.log('Terjadi request pada PATH: ', req.path);
    next();
}

module.exports = logRequest;