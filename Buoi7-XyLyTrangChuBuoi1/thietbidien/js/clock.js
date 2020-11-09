//Có thể tạo ra một công việc sau bao lâu thì làm
// setTimeOut(function(){}, time)
//Có thể tạo ra một công việc lặp đi lặp lai jsau bau lâu
// setInterval(function(){}, time)

//Bài tập đếm ngược thời gian
var time = 5;
// document.getElementById("clock").innerHTML = "<h1>"+time+"</h1>";

//Sử dụng cú pháp mới của es6 để điền giá trị của biến vào một chuỗi
//template string: sẽ định nghĩa một chuỗi trong cắp dấu 
//`string${}string`
//trong chuỗi tempalte string có chứ cú pháp ${} để thực hiện các biểu thức
document.getElementById("clock").innerHTML = `<h1>${time}</h1>`;

// setTimeout(function() {
//     time--;
//     document.getElementById("clock").innerHTML = time;
// }, 1000);

var timeOut = setInterval(function() {
    //sau khoảng thời gian là 1s thì phải truyền lại giá trị
    //cho thẻ clock
    // document.getElementById("clock").innerHTML = `<h1>${--time}</h1>`;
    $("#clock").html(`<h1>${--time}</h1>`);
    console.log("run");
}, 1000);
setTimeout(function() {
    clearInterval(timeOut);
}, time * 1000);
