// components/my-input/my-input.js

const app=getApp()
const timeInterval=10

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myInput:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'获取验证码',
    count:timeInterval,
    interval:-1,
    isGettingVCode:false//是否获取验证码
  },
  detached() {
    // console.log("组件被销毁了...")
    if (this.data.interval && this.data.myInput.type === 'vcode') {
      clearInterval(this.data.interval)
    }
  },
  attached(){
    // console.log(app.globalData);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onInputBlur(e) {
      switch (this.data.myInput.type) {
        case 'mobile':
          app.globalData.mobile = e.detail.value
          break;

        case 'vcode':
          app.globalData.vcode = e.detail.value
          break;
      }

      console.log(app.globalData)
    },
    getVcode(){
      const result = this.validateMobile()

      if(!result){
        wx.showToast({
          title: '手机号验证失败',
          image:'/images/error.png',
          mask:true,
          duration:2000
        })
        return
      }
      if (this.data.isGettingVCode) return
      console.log("1111111111")
      this.setData({
        title: `（${this.data.count}）`
      })

      // this.data.isGettingVCode = true
      this.setData({
        isGettingVCode: true
      })
      this.data.interval = setInterval(() => {
        this.data.count--

        //判断当前count的值，是否已经小于等于0，如果是，停止定时器，并且恢复成默认状态
        if (this.data.count <= 0) {
          clearInterval(this.data.interval)
          this.data.interval = null
          this.data.count = timeInterval
          // this.data.isGettingVCode = false
          this.setData({
            isGettingVCode: false
          })
          this.setData({
            title: '获取验证码',
          })
          return
        }

        console.log(this.data.count)
        this.setData({
          title: `（${this.data.count}）`
        })
      }, 1000)

    },
    validateMobile() {
      //1.手机号正则
      var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/

      if (!reg.test(app.globalData.mobile)) {
        return false
      }

      return true
    }
  }
})
