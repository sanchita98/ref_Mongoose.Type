const router = require("express").Router()

const categoryController = require("../controller/category.controller")

router.post("/add", categoryController.addCategory)
router.get("/get", categoryController.getCategory)
router.put("/update", categoryController.updateCategoryById)
router.delete("/delete", categoryController.deleteCategoryById)
router.post("/getById", categoryController.getCategoryById)

module.exports = router