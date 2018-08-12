// components/course.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   course:{
    type:Object
   }
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
    clickCourse(e){
      if (e.currentTarget.dataset.isFull) return
      //通过触发自定义事件传值
      this.triggerEvent('tapCourse', {id:e.currentTarget.dataset.id,
        title: e.currentTarget.dataset.title
      });
    }
  }
})
