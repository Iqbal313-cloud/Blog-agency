const Team = require("../models/team");

// Create a team member
exports.createTeamMember = async (req, res) => {
  try {
    const member = await Team.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all team members
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find();
    res.json(members);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const updatedMember = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json(updatedMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json({ message: "Team member deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
