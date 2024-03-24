import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {   
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/522/396/png-transparent-computer-icons-profile-miscellaneous-logo-profile.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
