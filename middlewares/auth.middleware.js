import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token missing' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }

    req.user = decoded.user;
    next();
  });
};

export default verifyToken;
