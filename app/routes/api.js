const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = 'harry'
module.exports = function (router) {
    //regist
    router.post('/users', (req, res) => {
        const user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        try {
            if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === '' | req.body.email === null || req.body.email === '') {
                res.status(400).json({success: false, message: 'Ensure username , email, and password were provider'})
            } else {
                user.save(function (err) {
                    if (err) {
                        res.status(401).json({success: false, message: 'Usernam or email already exsists'})
                    } else {
                        res.status(200).json({success: true, user: user, message: 'User created'})
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }
    });
    //login
    router.post('/authenticate', (req, res) => {
        console.log(req.body)
        User.findOne({username: req.body.username}).select('email username password').exec((err, user) => {
            try {
                if (err) throw err;

                if (!user) {
                    res.json({succes: false, message: 'Clound no authentification user'})
                } else if (user) {
                    if (req.body.password) {
                        const valid = user.comparePassword(req.body.password);
                        if (!valid) {
                            res.json({success: false, message: 'Clound not authentificate password'})
                        } else {
                            const token = jwt.sign({username: user.name, email: user.email}, secret, {expiresIn: '24h'})
                            res.json({success: true, message: 'User authentifacation', token: token, user: user})
                        }
                    } else {
                        res.json({success: false, message: 'No password provided'})
                    }
                }
            } catch (e) {
                console.log(e)
            }
        });
    })
    router.use( (req,res, next) => {
        const token = req.body.token || req.body.query || req.header('x-access-token')
        if (token) {
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    res.json({success: false, message: 'Token invalid'})
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            res.json({success: false, message: 'No token provided'})
        }
    })
    router.get('/me', ((req, res)  => {
        res.send(req.decoded)
    }))
    return router
}
