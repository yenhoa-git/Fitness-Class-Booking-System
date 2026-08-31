require('dotenv').config();
const connectDB = require('../config/db');
const User = require('../models/User');

const admin = {
  name: 'Zerow Studio Admin',
  email: 'admin@zerowgym.com',
  password: 'ZerowAdmin2026!',
  role: 'admin',
};

const seedAdmin = async () => {
  await connectDB();
  const existingUser = await User.findOne({ email: admin.email });
  if (existingUser) {
    existingUser.name = admin.name;
    existingUser.role = admin.role;
    existingUser.password = admin.password;
    await existingUser.save();
    console.log('Admin account updated');
  } else {
    await User.create(admin);
    console.log('Admin account created');
  }
  process.exit(0);
};

seedAdmin().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
