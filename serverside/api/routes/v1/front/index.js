const express = require("express");
const authRoutes = require("./auth.route");

const router = express.Router();
router.use("/auth",authRoutes);

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RhdGEiOiI2Mzg0OWY1Mzk1MWM4YmZhNDMxOWE3Y2QiLCJpYXQiOjE2Njk2NDI4MTAsImV4cCI6MTY2OTcyOTIxMH0.wnB7iJZaZVywh__CYD48Ut223oZ1JkzkE48ro7f5bdA
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2RhdGEiOiI2Mzg0YTU5NThkYWUzYmYyYjA1ZGMxMDciLCJpYXQiOjE2Njk2NDI4NDYsImV4cCI6MTY2OTcyOTI0Nn0.rJAtMNfLuYUONmRyADKehQ0Qa8pc9bgm-Sx7FNxmlXc