Page({
  data: {
    list: [],
    show: false,
  },
  onLoad(options) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(String.fromCharCode(65 + i));
    }
    arr.push("");
    arr.push("");
    this.setData({
      list: arr,
    });
  },
  onReady() {
   
  },
  showB(e) {
    const { index } = e.currentTarget.dataset;
    console.log(e);
    if (index == 2) {
      this.setData({
        show: true,
      });
    }
  },
  hideB() {
    this.setData({
      show: false,
    });
  },
});
