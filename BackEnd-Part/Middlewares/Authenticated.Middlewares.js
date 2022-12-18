const jwt = require('jsonwebtoken')


const SECRET_KEY = process.env.SECRET_KEY

const authentication = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]

    if (token) {
        const decoded = jwt.verify(token, SECRET_KEY, function (err, decoded) {
            if (err) {
                res.status(404).send('Please login to access the endpoint')
            } else {
                return decoded
            }
        });

        if (decoded) {

            const { AdminID, UserID } = decoded
            req.body.AdminID = AdminID
            req.body.UserID = UserID
            next()
            req.body.UserID = UserID
            req.body.AdminID = AdminID

        } else {
            res.status(401).send({
                message: 'Please login to access the endpoint',
                status: "Failed"
            })
        }
    } else {
        res.status(401).send({
            message: 'Please login to access the endpoint',
            status: "Failed"
        })
    }

}

const requestIp = require('request-ip');

// inside middleware handler
const ipMiddleware = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    req.body.UserIP = clientIp
    next();
};



module.exports = { authentication, ipMiddleware }