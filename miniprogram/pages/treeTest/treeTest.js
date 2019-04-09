// pages/treeTest/treeTest.js
Page({
  data: {
    unnormalizedValue: [
      {
        id: 1,
        name: '第一级1'
      },{
        id: 9,
        name: '第一级3'
      }, {
        id:10,
        pid: 9,
        name: '11'
      },
      {
        id: 8,
        name: '第一级2'
      },
      {
        id: 2,
        pid: 1,
        name: '第二级'
      },
      {
        id: 3,
        pid: 1,
        name: '第二级'
      },
      {
        id: 4,
        pid: 2,
        name: '第三级'
      },
      {
        id: 5,
        pid: 4,
        name: '第四级'
      },
      {
        id: 6,
        pid: 5,
        name: '第五级'
      },
      {
        id: 7,
        pid: 6,
        name: '第六级'
      }
    ]
   
  },
  selThis(e) {
    console.log(e.detail);
  },
  onLoad() {
    this.setData({
      unnormalizedValue2: this.data.unnormalizedValue
    },()=>{
      setTimeout(() => {
        this.setData({
          unnormalizedValue2: this.data.unnormalizedValue2.concat([
            {
              id: 8,
              name: '8'
            },
            {
              id: 9,
              pid: 5,
              name: '9'
            },
            {
              id: 10,
              pid: 1,
              name: '10'
            },
          ])
        })
      }, 2000);
    });
  }
});
