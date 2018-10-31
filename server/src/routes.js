const AuthenticationController = require('./controllers/AuthenticationController');


module.exports = (app) => {
    app.get('/status', (req,res) => {
        res.send({it:"works"})
    });
    
    
    app.post('/register', AuthenticationController.register)
}