// import express from "express";
const express = require("express")
const app = express();
const PORT = 5500
app.get("/", (req, res) => {
    res.send("Expected result should be Daniel");
    res.end()
})

app.listen(PORT, () => {
    console.log(`App is listening on Port => ${PORT}`);
})

module.exports = app;
// export default app