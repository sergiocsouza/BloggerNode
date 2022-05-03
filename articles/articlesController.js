const express = require("express");
const router = express.Router();




router.get("/articles", (req, res)=>{
    res.send("rota de articles")
});

router.get("admin/articles/new", (req, res)=>{
    res.send("new articles!")
})


module.exports = router;