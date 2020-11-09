function testAwait() {
    //trong js chia 2 loại câu lệnh
    //  + câu lệnh tuần tự: thứ chạy là trên xuống dưới qua các câu lệnh 1
    //  + câu lệnh bất đồng bộ: thứ tự chạy là không đoán được
    //      - đọc ghi file
    //      - call api
    //      - setTimeout
            
    let a = 1;
    //call api và gán trị trả về vào a
    setTimeout(function() {
        a = 2;
        console.log("13 " + a);
    }, 1000);
    //khi in ra a = 2;
    console.log("16 " + a);
}

// testPromise();
// function testPromise() {
//     let a = 1;
//     //call api và gán trị trả về vào a
//     let tPromise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject(2); // trả về kết quả thành công là 2
//         }, 2000);
//     })
//     console.log(tPromise);
//     tPromise.then((rs) => {
//         a = rs;
//         console.log(a);
//     }).catch((err) => {
//         console.log(err);
//     })
// }

testAsync();
async function testAsync() {
    let a = 1;
    //để sử dụng await ép một promise từ bất đồng bộ về đồng bộ
    // thêm từ khóa await trước đối tượng promise
    await new Promise(function(resolve, reject) {
        setTimeout(function() {
            a = 2;
            resolve();
        }, 1000);
    })
    console.log(a);
}

//callback function:
/**
 * call back function là một function được gọi một function khác
 *      - làm việc với sự kiện click, khi có sự kiện click xảy ra
 *          thì sẽ thực hiện hàm callback được truyền vào tường ứng
 *      - setTimeOut.
 */

 //Promise
 /**
  * Promise trong js được định nghĩa là một đối tượng biểu thị 
  * cho kết quả chưa có ở thời gian tại nhưng sẽ được xử lý 
  * và có kết quả ở trong tương lại.
  * - Để tạo ra một đối tượng promise sẽ sử dụng hàm new Promise(resolve, reject)
  * - 2 Tham số truyền vào đều là 2 hàm callback:
  *         - resolve: hàm trả về kết quả thành công
  *         - reject: hàm trả về kết quả thất bại
  * - Promise sẽ có 3 trạng thái:
  *         - Pending (đang xử lý)
  *         - Rejected (đã xử lý xong nhưng có lỗi)
  *         - Fulfilled (đã xử lý xong thành công)
  * - Promise là đối tượng js chuyên để làm việc với các câu lệnh bất đồng bộ
  * và nó cho phép mình làm việc với bật đồng bộ như dạng tuần tự
  */

  //async, await
  /**
   * + Async/await là một tính năng trong ES6 giúp làm việc với các hàm
   * bất đồng bộ một cách dễ hiểu hơn dựa trên Promise.
   * + Async khai báo một hàm bất đồng bộ
   *       - Tự biến một hàm bình thường thành một promise
   * + Await:
   *        - Khi await được đặt trước một promise thì đợi sau
   *        khi promise thực hiện xong thì sẽ làm các công việc tiếp theo
   *        - Await chỉ làm việc với Promise, không làm việc với
   *        callback function
   *        - Await chỉ được sử dụng trong các hàm async
   */

//tìm hiểu về callback function trong js, 
//promise trong js, async, await