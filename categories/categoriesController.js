const express = require("express");
const router = express.Router();




router.get("/categories", (req, res)=>{
    res.send("rota de categorias")
});

router.get("/admin", (req, res)=>{
    res.send("Area da administração!")
})


module.exports = router;