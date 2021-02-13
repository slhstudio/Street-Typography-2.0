const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const photoController = require('./server/controllers/photoController')
const userController = require('./server/controllers/userController')
const authRoutes = require('./server/routes/auth-routes')
const passportSetup = require('./server/services/passport-setup')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('dotenv').config({ path: '.env' })

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/app'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //a day
    keys: [process.env.COOKIE_KEY],
  }),
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)

app.listen(3001, () => {
  console.log('listening on 3001')
})

//create
app.post('/addPhoto', photoController.upload, photoController.resize, photoController.savePhoto)

//read
app.get('/findphoto/:photo', photoController.findPhoto) //TODO: may not need this
app.get('/findAllPhotos', photoController.getAll)
app.get('/findMine', photoController.getMine)

//update
app.post('/uploadChange/:photo', photoController.update)

//delete
app.delete('/delete/:image', photoController.deletePhoto)

//locate
app.get('/locate/near', photoController.mapPhotos)

//sign in
app.get('/user', userController.isSignedIn)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app
