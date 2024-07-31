// routes/auth.js

const express = require('express');
const router = express.Router();
const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Mock admin address for demonstration
const adminAddress = process.env.ADMIN_WALLET;

router.post('/login', async (req, res) => {
  const { address, signature } = req.body;

  if (address.toLowerCase() === adminAddress.toLowerCase()) {
    const message = `Login request for ${address}`;
    const recoveredAddress = await web3.eth.accounts.recover(message, signature);

    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
      // Mock JWT token
      const token = 'mock-jwt-token';
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid signature' });
    }
  } else {
    res.status(403).json({ message: 'Unauthorized address' });
  }
});

module.exports = router;
