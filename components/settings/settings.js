// components/settings/settings.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    settings: Object 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickStetings(e){
      // console.log(e);
  
      if (!e.currentTarget.dataset.navigateTo)  return
      //  console.log(e.currentTarget.dataset.navigateTo)
      this.triggerEvent('goToSettingsPage', e.currentTarget.dataset.navigateTo)

    }
  }
})
