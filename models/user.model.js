import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['buyer', 'seller'], required: true },
});

// Pre-save hook to hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords with hashed password using Pre Hooks of Mongo  
userSchema.methods.comparePassword = async function (providedPassword) {
    try {
        return await bcrypt.compare(providedPassword, this.password);
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

export default User;
