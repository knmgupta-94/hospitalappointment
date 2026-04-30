import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {

  try {

    const aToken = req.headers['atoken'];

    console.log("Received token:", aToken);



    if (!aToken) {
      return res.json({ success: false, message: 'Not authorised, login again - token missing' });
    }

    const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);


    console.log("Auth token received:", aToken);
    console.log("Decoded token email:", token_decode.email);
    console.log("Expected admin email:", process.env.ADMIN_EMAIL);


    if (!token_decode.email || token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: 'Not authorised, login again - email mismatch' });
    }

    // If all good, proceed to the next middleware/controllers
    next();
  } catch (error) {
    console.log('Auth Error:', error);
    // More descriptive error in case of invalid or expired tokens
    res.json({ success: false, message: 'Invalid or expired token, please login again' });
  }
};

export default authAdmin;
