// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const overSchema = new mongoose.Schema(
	{
		bowler: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
		},
        wickets: {
			type: Number,
            required: true,
		},
		balls: [
            {
			    type: mongoose.Schema.Types.ObjectId,
                ref: "Ball"
		    }
        ],
		runs: {
			type: Number,
            required: true,
		}
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("over", overSchema);
