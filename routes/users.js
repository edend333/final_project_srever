const express= require("express");
const bcrypt = require("bcrypt");


const router = express.Router();

// מאזין לכניסה לראוט של העמוד בית לפי מה שנקבע לראוטר
// בקובץ הקונפיג
router.get("/", async(req,res) => {
  res.json({msg:"Users endpoint"});
})


module.exports = router;