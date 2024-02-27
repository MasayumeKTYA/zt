Component({
  data: {
    ios: 0,
    active: 0,
    tab: [
      {
        title: "工作",
        icon: "fa fa-bus",
      },
      {
        title: "助手",
        icon: "fa fa-bath",
      },
      {
        title: "常用",
        icon: "fa fa-plus-circle",
      },
      {
        title: "分析",
        icon: "fa fa-bank",
      },
      {
        title: "我",
        icon: "fa fa-address-book",
      },
    ],
  },
  lifetimes: {
    attached() {
      const res = wx.getSystemInfoSync();

      const ios = res.screenHeight - res.safeArea.bottom;
      this.setData({
        ios,
      });
      console.log(res);
      console.log(ios);
    },
    ready() {
      setTimeout(() => {
        // const ctx = wx.createCanvasContext("myCanvas");
        // ctx.beginPath();
        // ctx.arc(100, 25, 2, 0, 2 * Math.PI);
        // ctx.setFillStyle("blue");
        // ctx.fill();
        // ctx.draw();

        const node = this.selectComponent("#myCanvas");
        console.log(node);
      }, 2000);
    },
  },
  methods: {
    text() {
      const node = this.selectComponent(".tab");
      console.log(node);
    },
  },
});
