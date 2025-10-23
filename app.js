const express = require("express")
const app = express();
const PORT = 5500 | process.env.PORT
app.get("/", (req, res) => {
    res.status(200).json(
        [
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" },
            { obj: "1" }
        ]
    );
})

app.listen(PORT, () => `${PORT} Conected`)