const getCurrent = async (req, res) => {
  const { email, name } = req.user;

  res.json({
    status: "succes",
    code: 200,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = getCurrent;
