module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i;
    //here this is context, but this.get('user-agent') if get from this.header..wired
    return iosReg.test(this.get('user-agent'));
  },
};