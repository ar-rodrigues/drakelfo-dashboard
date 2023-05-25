// pages/api/auth/login.js

// Define an array of users with their credentials
const users = [ { "id": 1, "username": "alisson", "password": "842oldpass" }, { "id": 2, "username": "user2", "password": "password2" } ]
//JSON.parse(process.env.USERS);
console.log(users)

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    // Find the user based on the provided username
    const user = users.find(u => u.username === username);

    if (user && user.password === password) {
      // Authentication succeeded
      return res.status(200).json(user);
    } else {
      // Authentication failed
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
