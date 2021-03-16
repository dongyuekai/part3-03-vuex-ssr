export default {
  debug: true,
  state: {
    user: {
      name: 'xdfs',
      age: 33,
      sex: '男'
    }
  },
  setUserNameAction(name) {
    if (this.debug) {
      console.log('setUserNameAction triggered：', name)
    }
    this.state.user.name = name
  }
}