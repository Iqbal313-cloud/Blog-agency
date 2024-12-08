const express = require("express");
const {
  createTeamMember,
  getTeamMembers,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController");

const router = express.Router();

router.post("/", createTeamMember); // Create a new team member
router.get("/", getTeamMembers); // Get all team members
router.put("/:id", updateTeamMember);
router.delete("/:id", deleteTeamMember);

module.exports = router;
