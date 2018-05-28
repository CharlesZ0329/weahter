Page({
  data: {
    nowTemp: '14°',
    nowWeather: '多云'
  },
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now', //API address
      data: {
        city: '西安市' // name of city
      },
      success: res => {
       let result = res.data.result
       let temp = result.now.temp
       let weather = result.now.weather
       this.setData({
         nowTemp: temp + '°',
         nowWeather: weather
       })
      }
    })
  }
})
