// import express from "express";
const express = require("express")
const app = express();
const PORT = 5500
app.get("/", (req, res) => {
    res.status(200).send("Expected result should be Daniel");
})

// app.listen(PORT, () => {
//     console.log(`App is listening on Port => ${PORT}`);
// })

module.exports = app;
// export default app