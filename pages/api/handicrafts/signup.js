// Assuming this is in /pages/api/handicrafts/signup.js
export default function handler(req, res) {
  // Log the incoming request body to inspect its structure
  try {
    console.log(req.body);
    res.send({ message: 'success' });
  } catch (error) {
    console.log(error.message);
  }
  // Continue with your actual signup logic
  // ...

  // In case of any errors, return a 400 status with a specific error message
  // res.status(400).json({ message: 'Detailed error message' });
}
