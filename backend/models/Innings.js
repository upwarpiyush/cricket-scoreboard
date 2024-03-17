// Import the Mongoose library
const mongoose = require("mongoose");

// Define the player schema using the Mongoose Schema constructor
const inningsSchema = new mongoose.Schema(
	{
        innigsNo: {
			type: Number,
			enum: [1, 2],
			required: true,
		},
		battingTeam: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
        ballingTeam: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
		},
		runs: {
			type: Number,
            required: true,
		},
        wickets: {
			type: Number,
            required: true,
		},
		balls: {
			type: Number,
            required: true,
		},
		overs: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "Over"
		},
		status: {
			type: String,
			enum: ["upcomming", "inprogress", "completed"],
			required: true,
		},
		discription: {
			type: String,
		},
        battingStats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BatStats"
        },
        ballingStats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BallStats"
        }
	}
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("innings", inningsSchema);
