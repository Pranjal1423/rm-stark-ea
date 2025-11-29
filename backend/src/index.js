require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("RM STARK EA Backend Running ✔");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
