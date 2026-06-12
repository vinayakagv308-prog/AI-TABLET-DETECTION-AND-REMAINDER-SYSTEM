const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let reminders = [];

app.post("/add-reminder", (req, res) => {
    const { tabletName, tabletTime } = req.body;

    const reminder = {
        tabletName,
        tabletTime
    };

    reminders.push(reminder);

    res.json(reminder);
});

app.get("/reminders", (req, res) => {
    res.json(reminders);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});