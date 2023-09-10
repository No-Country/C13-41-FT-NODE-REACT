const successfulPurchase = async (req, res) => {
  try {

    return res
      .status(200)
      .json({ message: "Service Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Service" });
  }
};

module.exports = {
  successfulPurchase
};