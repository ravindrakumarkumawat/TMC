const {
    register,
    login,
  } = require('../models/User')
  
  
  
  const registerCustomer = async (req, res) => {
    const customer = await register(req)
  
    if(customer.error) {
      return res.status(500).json(customer)
    }
    
    res.status(201).json(customer)
  }
  
  const loginCustomer = async (req, res) => {
    const customer = await login(req)
  
    if(customer.error) {
      return res.status(500).json(customer)
    }
  
    if(customer.message) {
      return res.status(400).json(customer)
    }
  
    res.status(200).json(customer) 
  }
  
  
  module.exports = {
    registerCustomer,
    loginCustomer,
  }