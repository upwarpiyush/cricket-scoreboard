// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const playerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		mobile_no: {
			type: String,
			required: true,
			trim: true,
		},
		runs: {
			type: Number,
		},
		wickets: {
			type: Number,
		},
		balls_bowled: {
			type: Number,
		},
		balls_played: {
			type: Number,
		},
		not_outs: {
			type: Number,
		},
        teams: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Team"
            }
        ],
        matches: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Match"
            }
        ],
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("player", playerSchema);
