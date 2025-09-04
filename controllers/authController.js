const login = (req, res, next) => {
    if(!req.body?.username || !req.body?.password){
        const error = new Error('Username and password are required');
        error.status = 400;
        return next(error);
    }
    res.status(200).json({});
}

export { login };