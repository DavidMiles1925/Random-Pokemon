const router = require("express").Router();
const pokeRouter = require("./pokemon");

router.use("/pokemon", pokeRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Route not found"));
});

module.exports = router;
