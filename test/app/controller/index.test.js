const { app } = require('egg-mock/bootstrap');

describe('test/index.test.js', () => {

  it('should GET / with iOS', () => {
    return app.httpRequest()
      .get('/isIOS')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('isIOS: true');
  });

  it('should GET / with non iOS', () => {
    return app.httpRequest()
      .get('/isIOS')
      .expect(200)
      .expect('isIOS: false');
  });
});