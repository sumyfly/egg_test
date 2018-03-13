import { Controller } from 'egg'

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }

  async isIOS() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }

  async login() {
    await this.ctx.render('login.tpl', {});
  }
}

module.exports = HomeController;
// export = HomeController