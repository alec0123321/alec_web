var percent = 0
var sec = 10

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if (percent>=100){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
  }
},20)
