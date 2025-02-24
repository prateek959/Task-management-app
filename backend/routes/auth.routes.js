import jwt from 'jsonwebtoken';

const authenticationToken = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization || req.headers.Authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(400).send("Authorization header format is incorrect");
        }

        // Extract the token
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).send("Token is missing or invalid");
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {

            if (err) {
                return res.status(401).send("Invalid or expired token");
            }

            // console.log(decoded);
            req.user = decoded;
            next();
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default authenticationToken;