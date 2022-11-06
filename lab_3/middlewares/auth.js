const auth = async (req, res, next) => {
    if (req.headers.authorization !== process.env.MASTER_KEY) {
        return res.status(401).json({ success: false, message: 'INVALID_TOKEN' });
    }

    next();
};

export default auth