const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({message: err.message , error: 'Something went wrong'});
}
export default errorHandler;