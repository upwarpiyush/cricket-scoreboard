// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const matchSchema = new mongoose.Schema(
	{
		teamA: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
        teamB: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
		venue: {
			type: String,
			required: true,
			trim: true,
		},
		overs: {
			type: Number,
            required: true,
		},
		winTeam: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
        lossTeam: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
		status: {
			type: String,
			enum: ["upcomming", "inprogress", "completed"],
			required: true,
		},
		discription: {
			type: String,
		}
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("match", matchSchema);
