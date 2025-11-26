const userModel = require("../models/user-model");
module.exports.saveAddress = async (req, res) => {
  try {
    const { contact, line1, line2, city, state, zip } = req.body;

    const updatedUser = await userModel.findOneAndUpdate(
      { email: req.user.email },
      {
        $set: {
          address: {
            contact,
            line1,
            line2,
            city,
            state,
            zip,
          },
        },
      },
      { new: true }
    );
    res.json({
      success: true,
      message: "Address saved",
      address: updatedUser.address,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error" });
  }
};
