import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword, userType });
    await user.save();

    const token = jwt.sign({ user }, 'secretKey', { expiresIn: '1h' });
    res.status(201).json({  user });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ user }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token,user });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
