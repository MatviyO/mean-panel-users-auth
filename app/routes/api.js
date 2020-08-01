const User = require('../models/user')

module.exports = function(router) {

    //regist
    router.post('/users',  (req,res) => {
        const user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === ''  | req.body.email === null || req.body.email === '') {
            res.status(400).json({success: false, message: 'Ensure username , email, and password were provider'})
        } else {
            user.save(function (err) {
                if (err) {
                    res.status(401).json({success: false, message: 'Usernam or email already exsists'})
                } else {
                    res.status(200).json({ success: true, user: user , message: 'User created'})
                }
            });
        }
    });
    //login
    router.post('/authenticate', (req, res) => {
        User.findOne({username: req.body.username}).select('email username password').exec((err, user) => {
            if (err) throw err;
            if(!user) {
                res.json({succes: false, message: })
            }

        })
        res.send('response')
    })

    return router

}
