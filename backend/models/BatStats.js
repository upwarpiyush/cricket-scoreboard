// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const batStatsSchema = new mongoose.Schema(
	{
        player: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
		},
        runs: {
			type: Number,
            required: true,
		},
        four: {
			type: Number,
            required: true,
		},
        six: {
			type: Number,
            required: true,
		},
        balls: {
			type: Number,
            required: true,
		},
        wicket: {
			type: String,
            required: true,
		}
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("batStats", batStatsSchema);
