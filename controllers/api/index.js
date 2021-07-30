const express = require('express');
const router = express.Router();
const travellerRoutes = require("./travellerRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

router.use("/travellers",travellerRoutes)
router.use("/trips",tripRoutes)
router.use("/locations",locationRoutes)


module.exports = router;