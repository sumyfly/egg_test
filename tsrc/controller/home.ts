import { Controller } from 'egg'

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }

  async isIOS() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }
}

module.exports = HomeController;
// export = HomeController