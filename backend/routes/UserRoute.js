const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    getallUsers,
    getSingleUser,
    deleteUser,
    UpdateRole,
    updateProfile,
} = require("../controller/UserController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// register user
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

// get user details for admin
router.route("/aboutuser").get(isAuthenticatedUser, getUserDetails);

// update password after login by user
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// logout
router.route("/logout").get(logout);

// update profile details by user
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// get all user for admin
router
    .route("/admin/users")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getallUsers);

// get single user, edit role, delete user
router
    .route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateRole);

module.exports = router;