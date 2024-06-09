const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000;
app.get("/", (req, res ) => {
    res.send("CaC Deploy si!");
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
