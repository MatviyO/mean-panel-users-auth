const User = require('../models/user')

module.exports = function(router) {
    router.post('/users',  (req,res) => {
        const user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === ''  | req.body.email === null || req.body.email === '') {
            res.send('Ensure username , email, and password were provider')
        } else {
            user.save(function (err) {
                if (err) {
                    res.send('User name or Email exists!',err)
                } else {
                    res.send('user created');
                }
            });
        }



    });

    return router

}
