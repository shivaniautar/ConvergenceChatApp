const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

module.exports = {
  register(req, res) {
    User.create(req.body)
      .then(newUser => {
        const token = jwt.sign({
          id: newUser._id,
          email: newUser.email
        }, process.env.SECRET_KEY);
        res.cookie('token', token, {
          httpOnly: true
        })
          .json({ status: 'Success' })
      })
      .catch(err => res.status(400).json(err));
  },

  async login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    if (user === null) {
      console.log('did not find user');
      return res.sendStatus(400);
    }

    const result = await bcrypt.compare(password, user.password);

    if (result === false) {
      console.log("password wrong")
      return res.sendStatus(400);
    }

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.SECRET_KEY);

    // console.log(token)

    res.cookie('token', token, {
      httpOnly: true
    })

    
    res.json({ status: "Success", token })
    console.log(token)
  },
  
  // getOne(req, res){
  //   console.log('inside get one', req.cookies);
  //   console.log('this is the token', jwt.verify(req.cookies.token, process.env.SECRET_KEY).id)
  //   User.findById((jwt.verify(req.cookies.token, process.env.SECRET_KEY)).id)
  //     .then(console.log('then in getone'))
  //     .catch(console.log('catch in getone'));
  // },
  
  logout(_req, res) {
    res.clearCookie('token') //pass name of cookie you want to clear 
    res.json({status: 'Success'})
   }  

}