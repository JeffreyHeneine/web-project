require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

connectDB();

const app = express();

app.use("/api/products", productRoutes);

const mongoAtlas = 'mongodb+srv://user-123:user-123@esib-e-commerce.afbks.mongodb.net/shop?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())

try {
	mongoose.connect(mongoAtlas, {useNewUrlParser: true, useUnifiedTopology : true}, () => console.log("Mongoose Connected"));
} catch(e) {
	console.log("Couldn't connect");
}

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try{
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: newPassword,
            passwordConfirmation : newPassword,

        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status :'error', error: 'Duplicate email'})
    }
    
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


// const PORT = process.env.PORT || 3000;

app.listen(1337,() => 
            console.log('Server running on port: 1337 '));