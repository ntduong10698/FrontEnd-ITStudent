/**
 * +Chỗ đặt của đoạn mã js
 *  - Trực tiếp trong file html
 *  - Liên kết đến một file js bên ngoài
 */

/**
 * JavaScript có liên quan đến Java hay không
 */

 /**
  * - Mục tiêu của js làm gì được cho mình
  *  + Xỷ lý các sư kiện khi thao tác lên các phần tử 
  *     - Sự kiện click lên phần tử search
  *  + Đọc dữ liệu từ api và đổ liệu lên các phần tử tương ứng
  *     - Đỗ dữ liệu lên product type
  *     - Đổ dữ liệu lên our product
  */

  //Khai báo biến trong js;
  /**
   * Khi khai báo biến với js sẽ có 3 keyword: var, let, const
   *    + var: thướng dùng khai báo các biến toàn cục
   *    + let: thường dùng để khai các biến nội bộ
   *    + const: dùng khai báo các biến hằng
   * 
   * => Tìm hiểu thêm về 3 keyword trên
   *    + https://www.w3schools.com/js/js_let.asp 
   *    + https://www.w3schools.com/js/js_const.asp
   *    + https://www.w3schools.com/js/js_hoisting.asp
   */

   //Khai báo trên nhiều dòng
   var x1 = 10;
   var x2 = 10.5;
   //sử dụng //console.log() để in ra trên mình console
   //sử dụng alert() để in ra màn hình thông báo
   //console.log(x1);
   //console.log(x2);

   //khai báo trên một dòng
   //Một chuỗi có thể được bao bọc bởi "" hoặc '' (2 
   //kiểu đều có thể sử dụng như nhau);
   var x3 = true,x4 = "String", x5 = 'String',x6,x7;
   x6 = "String'x6'";
   x7 = 'String"x7"';
   //console.log(x6);
   //console.log(x7);

   //có 2 giá trị đặc biệt;
   var x8 = null;
   var x9;
   //console.log(x8);
   //console.log(x9);
   //kiểu tra kiểu dũ liệu bằng typeof
   //console.log(typeof x1);
   x3 = x1;
   //console.log(typeof x3);
   //console.log(typeof x4);
   //console.log(typeof x8);
   //console.log(typeof x9);

   //=>> QUY TẮC ĐẶT TÊN BIẾN Y ĐÚC JAVA (tên biến, tên hàm, tên biến mang giá trị hằng)

   /**
    * Toán tử trong JS
    */

    //Toán tử vể số
    /**
     * +
     * -
     * x
     * /: do không nghiêm ngặt về kiểu nên phép chia sẽ là kết quả số thức
     * %: chia lấy dư
     * **: mũ (phiên bản ES6 mới có - cũ hơn thì sẽ dùng Math.pow(x,y))
     * ++ => a++ => a = a + 1;
     * --
     * =
     * +=, a += b => a = a + b
     * -=
     * *=
     * /=
     * %=
     * **=, a **= b => a = a ** b
     */

     //Toán tử về String + (để nối chuỗi)

     //Toán tử so sánh
     /**
      * == (so sánh giá trị không quan tâm kiểu dữ liệu)
      * === (so sánh quan tâm kiểu dữ liệu)
      * !=
      * !==
      * >
      * <
      * >=
      * <=
      * ?: toán tử 3 ngôi
      */

      //Toán tử logic
      /**
       * &&
       * ||
       * !
       */

/**
 * Function (Hàm):
 *  + Định nghĩa hàm: function {tên function}({danh sách tham số}) {//to do}
 *  + return trả về một kết quả
 *  + Nếu các tham số không được truyền giá trị khi gọi hàm
 *  thì sẽ mang giá trị undefined hoặc sẽ mang giá trị mặc đinh 
 *  theo định nghĩa của hàm (a = 1, b = 2, c) (mặc định của hàm
 *  chỉ có trên  ES6 đổ lên)
 *  + tên hàm hiểu chứa định nghĩa hàm
 *  + Để gọi hàm hay chạy hàm thì tên hàm();
 *  + Phiển bản ES6 trở lên cung cấp thêm 1 kiểu định nghĩa hàm
 *       là arrow function sử dụng nhiều trong cú pháp rút gọn
 */

 var myFunction = (a = 1, b = 2, c) => {
     //to do
     console.log(a);
     console.log(b);
     console.log(c);
 }

 /**
  * Cấu trúc rẽ nhánh (cú pháp như các ngôn ngữ khác)
  *     + if else, else if
  *     + switch case
  * => switch case ở đây có thể sử dụng được cho cả string
  * => switch case ở đây sẽ so sánh bằng toán tử ===
  */
    switch("3") {
        case 3:
            console.log("number");
            break;
        case "3":
            console.log("string");
            break;
    }

    /**
     * Cấu trúc lặp
     *  + for
     *  + while
     *  + do while
     * https://www.w3schools.com/js/js_loop_for.asp
     */

    //  for (let i = 0; i < 10; i++) {
    //      console.log(i);
    //  }

    /**
     * Đối tượng:
     *  + được định nghĩa trong {} mang các thuộc tính dưới dạng key: value
     *  var myObject = {name: "ITStudent", age: 2}
     *  + cách truy cập thuộc tính có thể là toán tử . hoặc và ["key"]
     *  + số lượng thuộc tính trong đối tượng có thể biến động
     *  + Còn lại tìm hiểu thêm ở https://www.w3schools.com/js/js_objects.asp 
     */

    /**
     * Mảng Array
     *  + định nghĩa các phần tử nằm trong [] cách nhau bằng dấu
     *  phẩy
     *  + Kiểu dữ liệu trong mảng có thể không đồng nhất
     *  + Số lượng phẩn tử có thể biến động
     *  + Truy cập bằng cách [index]
     *  + typeof array là object
     */
    var myArray = [1, "2", 3, true];

    /**
     * Các hàm đã được xây dựng sẵn
     * -Các hàm của String
     *  + https://www.w3schools.com/js/js_string_methods.asp
     * - Các hàm của Number:
     *  + https://www.w3schools.com/js/js_number_methods.asp
     * - Các hàm của Array:
     *  + https://www.w3schools.com/js/js_array_methods.asp
     *  + toString, join, pop, push, shift, unshift, sort, reverse, map, filter, find, findIndex;
     */

     var list = [3, 2, 1, 4, 8, 10];
     var listSort = list.sort((a, b) => {return a - b});
     console.log(listSort);
    var listFilter = list.filter((a) => {return a > 4});
    console.log(listFilter);
//JS có thể thao tác với các phần tử html đọc thêm trong mục
//JS HTML DOM (vì tất cả thao tác với DOM sẽ dùng jquery)