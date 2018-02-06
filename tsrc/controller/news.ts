import { Controller } from 'egg'

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    // await this.ctx.render('news/list.tpl', dataList);
    this.ctx.body = 'news';
  }
}

module.exports = NewsController;