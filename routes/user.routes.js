const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/auth");
const { validateBody, schemas } = require("../validations/validator");
/** POST Methods */
    /**
     * @openapi
     * '/user/register':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - firstName
     *              - lastName  
     *              - email
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: Test 
     *              email:
     *                type: string
     *                default: test@gmail.com
     *              password:
     *                type: string
     *                default: admin@123
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post(
  "/register",
  validateBody(schemas.createUserSchema),
  userController.createUser
);
router.post(
  "/login",
  validateBody(schemas.loginUserSchema),
  userController.login
);
router.put(
  "/:id",
  validateBody(schemas.updateUserSchema),
  userController.updateUser
);
router.get("/getUser/:id", userController.getUser);
router.get("/getAllUser",[verifyToken], userController.getAllUser);
router.delete("/deleteuser/:id", userController.deleteUser);

module.exports = router;
