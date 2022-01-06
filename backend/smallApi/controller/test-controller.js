//const models = require("../models");

module.exports = {
  log: async (req, res, next) => {
    try {
      const reg = { user: req.body.user, password: req.body.password };
      if (reg.user === "AndresMpa" && reg.password === "123") {
        res.status(200).json(reg);
      }
      console.log(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    console.log(req);
    try {
      const reg = {
        list: [
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            title: "Brunch this weekend?",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            title: "Jason",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            title: "Oui oui",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            title: "Birthday gift",
          },
          {
            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
            title: "Recipe to try",
          },
        ],
      };
      res.status(200).json(reg);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Ocurrió un error: " + e,
      });
      next(e);
    }
  },
  send: async (req, res, next) => {
    try {
      const reg = req.body;
      console.log(reg);
      res.status(200).json(reg);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Ocurrió un error: " + e,
      });
      next(e);
    }
  },
  getTarget: async (req, res, next) => {
    try {
      const reg = [
        {
          title: "Jason Oner",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        },
        {
          title: "Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        },
        {
          title: "Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        },
        {
          title: "Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        },
      ];
      res.status(200).json(reg);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Ocurrió un error: " + e,
      });
      next(e);
    }
  },
};
