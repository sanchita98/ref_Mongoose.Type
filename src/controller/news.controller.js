const News = require("../model/news.model");

exports.addNews = (req, res) => {
  const newsData = new News(req.body);
  newsData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "news added successfully",
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

exports.getNews = (req, res) => {
  News.find()
    .then((resData) => {
      res.jsonp({
        message: "news get successfully",
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

//reference
exports.getNewsByCategoryId = (req, res)=> {
  News.find({categoryID : req.body.categoryID})
  .then((resData) => {
    res.jsonp({
      message: "news get by Id successfully",
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
}