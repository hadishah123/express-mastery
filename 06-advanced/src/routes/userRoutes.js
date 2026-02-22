const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password too short"),
  ],
  validate,
  userController.register
);