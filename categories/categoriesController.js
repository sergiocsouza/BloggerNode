const express = require("express");
const router = express.Router();



router.get("/admin/category/new", (req, res)=>{
    res.render("admin/categories/new");
})


module.exports = router;