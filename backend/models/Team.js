// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const teamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		captain: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
		},
		runs: {
			type: Number,
		},
		wins: {
			type: Number,
		},
		loss: {
			type: Number,
		},
		matches: [
			{
				type: mongoose.Schema.Types.ObjectId,
            	ref: "Match"
			}
		],
        players: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Player"
            }
        ],
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("team", teamSchema);
