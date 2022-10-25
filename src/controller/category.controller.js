const Category = require("../model/category.model");

exports.addCategory = (req, res) => {
  const categoryData = new Category(req.body);
  categoryData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "category added successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

exports.getCategory = (req, res) => {
  Category.find()
    .then((resData) => {
      res.jsonp({
        message: "category get successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

exports.updateCategoryById = (req, res) => {
  Category.findByIdAndUpdate({ _id: req.body.CategoryId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "category updated successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

exports.deleteCategoryById = (req, res) => {
  Category.findByIdAndDelete({ _id: req.body.CategoryId }, req.body)
    .then((resData) => {
      res.jsonp({
        message: "category deleted successfully",
        status: true,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};

exports.getCategoryById = (req, res) => {
  Category.findOne({ _id: req.body.CategoryId })
    .then((resData) => {
      res.jsonp({
        message: "category get by id successfully",
        status: true,
        result: resData,
      });
    })
    .catch((err) => {
      res.jsonp({
        message: "something went wrong",
        status: false,
      });
    });
};
