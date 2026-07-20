module.exports = (req, res, next) => {
    console.log(req.session.user)
    console.log('Role:', req.session.user?.role)

    if (!req.session.user) {
        return res.redirect('/auth/sign-in')
    }

    if (req.session.user.role !== 'admin') {
        console.log('Not an admin')
        return res.redirect('/')
    }

    console.log('Admin')
    next()
}