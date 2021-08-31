module.exports = {
  login: async (req, res, next) => {
    try {
      const reg = req.body.message;
      if (user.length > 0) {
        res.status(200).json(reg);
      } else {
        res.status(401).json("Error 401");
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
 };
