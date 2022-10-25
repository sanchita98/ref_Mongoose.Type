const router = require("express").Router()

const newsController = require("../controller/news.controller")

router.post("/add", newsController.addNews)
router.get("/get", newsController.getNews)
router.post("/getById", newsController.getNewsByCategoryId)


module.exports = router