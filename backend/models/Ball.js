// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const ballSchema = new mongoose.Schema(
	{
		bowler: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
		},
        wicket: {
			type: Boolean,
		},
        wide: {
			type: Boolean,
		},
        noBall: {
			type: Boolean,
		},
        run: {
			type: Number,
		}
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("ball", ballSchema);
