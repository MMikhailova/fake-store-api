import User from '../models/user.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';

const routerControllers = {
    showForm: (req, res) => {
        res.status(200).render('home', {
            action: '/login',
            button: 'login',
            message: ''
        });
    },
    login: (req, res) => {
        const { email, password } = req.body;
        const userExist = User.getUserByEmail(email);
        if (userExist && password === userExist.password) {
            res.status(200).render('welcome', {
                user: email,
                message: 'Welcome back'
            });
        }
        if (userExist && password !== userExist.password) {
            res.status(404).render('home', {
                action: '/login',
                button: 'login',
                message: 'Email or Password is not correct!'
            });
        }
        if (!userExist) {
            res.status(200).render('home', {
                action: '/signup',
                button: 'signup',
                message: 'Please sign up first!'
            });
        }
    },
    signup: (req, res) => {
        const { email, password } = req.body;
        const emailValidated = validateEmail(email);
        const passwordValidated = validatePassword(password);
        if (emailValidated && passwordValidated) {
            const newUser = new User(email, password);
            newUser.addUser();
            res.status(200).render('welcome', {
                user: email,
                message: 'Hello'
            });
        } else {
            res.status(404).render('home', {
                action: '/signup',
                button: 'signup',
                message: 'Email or Password is incorrect'
            });
        }
    }
};
export default routerControllers;
