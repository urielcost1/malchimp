// src/config/env.js

require('dotenv').config();

module.exports = {
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
  PORT: process.env.PORT || 3000,
};
