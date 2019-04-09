 Page({
  data: {
    showTopTips: false,
    isAgree: false,
    showImage:true,
    images: ["../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png"],
    pjItem:[
      "哇哈哈1",
      "哇哈哈2",
      "哇哈哈3",
      "哇哈哈4",
      "哇哈哈5",
      "哇哈哈6",
    ],
    selected:[
      "",
      "",
      "",
      "",
      "",
      "",] ,
      
  },
  onLoad:function(){

  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  chickImage:function(e){
    var num= e.currentTarget.dataset.index ;
    var arr = ["../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png",
      "../../images/star-invert.png"];
     for(var i=0;i<num+1;i++){
      arr[i] ="../../images/star.png";
    };
    this.setData({
      images:arr
    })    
  },
  chickItem:function(e){
     var num = parseInt(e.currentTarget.dataset.index);
    console.log(e);
     var selected = this.data.selected;
      
    if (selected[num]=="selected"){
      selected[num]=""
    }else{
      selected[num] = "selected"
    }
    this.setData({
      selected: selected
    }) 
 
   }
  
});