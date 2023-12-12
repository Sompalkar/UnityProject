import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; 



const jwtSecret = 'wekfkwjfnkjnkjfnkjqk ';


export const register = async (req, res) => {

  try {
    const { username, password, userType } = req.body;

    const createdUser = new User({ username, password, userType });
    await createdUser.save();

    res.status(201).json({
      createdUser

    });

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });


  }
};



export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ user }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({
      token,
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


