// components/nav.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: { type: String },
    bgColor: {
      type: String,
      value: "#fff",
    },
  },
  lifetimes: {
    attached() {
      const res = wx.getSystemInfoSync();

      const menu = wx.getMenuButtonBoundingClientRect();

      const menuPX = menu.top - res.statusBarHeight;
      this.setData({
        statusBar: res.statusBarHeight,
        meun: menu.height + menuPX * 2,
      });
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    statusBar: 0,
    meun: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
