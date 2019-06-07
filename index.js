const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-twgn9.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

const app = express();

app.use(express.json());
app.use(cors());

const Subscription = require("./Subscription");

app.post("/subscriptions", async (req, res) => {
  const sub = await Subscription.create(req.body);

  return res.json(sub);
});

app.get("/subscriptions", async (req, res) => {
  const subs = await Subscription.find();

  return res.json(subs);
});

app.listen(process.env.PORT || 3003);
