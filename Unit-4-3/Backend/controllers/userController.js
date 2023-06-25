const BaseController = require("./baseController");
const UserModel = require("../models/userModel");
class User extends BaseController {
  constructor() {
    super(UserModel, User);
  }
}
module.exports = new User();
