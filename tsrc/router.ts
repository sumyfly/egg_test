const router = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/isIOS', controller.home.isIOS)
  router.get('/news', controller.news.list);
};

module.exports = router