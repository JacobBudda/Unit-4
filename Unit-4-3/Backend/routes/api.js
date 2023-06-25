var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const userController = require("../controllers/userController");

router.post("/add-user", async (req, res) => {
  data = req.body;
  data.user_id = uuidv4();
  userController.create(data, (err, userResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: userResponse,
    });
  });
});

router.post("/update-user", (req, res) => {
  let data = req.body;
  userController.findOneAndUpdate(
    { user_id: req.body.user_id },
    data,
    (err, updatedUser) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedUser,
      });
    }
  );
});

router.get("/find-user/:id", (req, res) => {
  userController.find({ user_id: req.params.id }, (err, userDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: userDetails,
    });
  });
});

router.post("/delete-user", (req, res) => {
  userController.findOneAndRemove(
    { user_id: req.body.user_id },
    (err, deletedUser) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedUser,
      });
    }
  );
});

router.get("/find-all-users", (req, res) => {
  userController.find({}, (err, allUserDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allUserDetails,
    });
  });
});

module.exports = router;
