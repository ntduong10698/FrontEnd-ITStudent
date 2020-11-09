//Có thể tạo ra một công việc sau bao lâu thì làm
// setTimeOut(function(){}, time)
//Có thể tạo ra một công việc lặp đi lặp lai jsau bau lâu
// setInterval(function(){}, time)

//Bài tập đếm ngược thời gian
var time = 60;
document.getElementById("clock").innerHTML = time;


setTimeout(function() {
    time--;
    document.getElementById("clock").innerHTML = time;
}, 1000);