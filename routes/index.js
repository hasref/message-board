var express = require("express");
var router = express.Router();

const sampleMessages = [
  {
    text: "Where does the road lead?",
    author: "Wise Philosopher",
    date: new Date(),
  },
  {
    text: "I peered into the abyss and the abyss stared past.",
    author: "Contemporary Philosopher",
    date: new Date(),
  },
  {
    text: "In the beginning the universe was created. This has made a lot of people very angry and has generally been regarded as a bad move.",
    author: "Douglas",
    date: new Date(),
  },
  {
    text: "Don't Panic. Sincerely, Rust.",
    author: "Steve",
    date: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messages", messages: sampleMessages });
});

/* GET form page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* form submission */
router.post("/new", function (req, res, next) {
  sampleMessages.unshift({
    text: req.body.message,
    author: req.body.author,
    date: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
