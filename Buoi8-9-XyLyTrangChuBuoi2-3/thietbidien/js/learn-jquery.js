/**
 * Jquery là gì? Tại sao lại sinh ra nó?
 *  - Jquery là một thư viện của JavaScript
 *  - Mục tiêu sinh ra nó "write less, do more" sử dụng đề lập
 *  javascript nhanh và ngắn gọn hơn
 *  - Nó xử lý các tác tác vụ dài dòng của JavaScript bằng cách
 * gói gọn các câu lệnh java script thành một hàm đơn giản khi:
 *      + Thao tác HTML/DOM
 *      + Thao tác CSS (thao tác thông qua class, id)
 *      + Sự kiện HTML
 *      + Hiệu ứng
 *      + Ajax (để lấy dữ liệu từ server)
 *      + Nhiều thức khác ..
 * => Ngoài ra jquery có nhiều plugin cho hầu hết các nhiệm vụ trên web
 * Trong khóa này thì jquery tập trung chủ yếu và các chức để tạo ra
 * web động
 *      + Thao tác HTML/DOM
 *      + Sự kiện HTML
 *      + Ajax (call api)
 */

 /**
  * ++ Làm sao để sử dụng jquery
  * Jquery là một thư viện ngoài chưa được tích hợp sẵn trên trình
  * duyêt => Tương tự bootstrap để sử dụng được thì cần link thêm
  * thư viện cho nó (link thêm file js)
  *     - <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  *     - Nếu project đã sử bootstrap thì không cần link thêm jquery
  *     vì khi link thư viện bootstrap đã có sẵn.
  */

  /**
   * ++ Cú pháp của jquery:
   *    + $(selector).action()
   *    + $: chỉ định khi mình muốn sử dụng jquery
   *    + (selector): selector là cú pháp chỉ ra phần tử html
   *    + action : các hoạt động muốn thực hiện trên phần tử tìm được
   * 
   * - Chỉ ra rõ từng thành phần
   *     + Selector có định dạng như nào
   *     + action có định dạng như nào
   */

   /**
    * Document Ready Event (sự kiện tài liệu sẵn sàng)
    *   + Hiểu về cách load tài nguyên html css js ở trình duyệt
    *   + có thể sử dụng sự kiện document ready để kiểm soát
    *   sau khi load xong các cấu trúc html thì mới thực hiện 
    *   các tác js lên các phẩn tử html bằng
    *   + $(function() {});
    *   Rút các vấn đề sau:
    *       + File js phải luôn đặt ở phải đặt cuối cùng ngay sát đóng thẻ body
    *       + Các file mình viết ra phải đặt dưới cùng (dưới các thư viện mà mình muốn sử dụng ở web)
    *       + luôn luôn phải có document ready function ở các file js thao tác với dom
    */

    /**
     * Tìm hiểu về cấu trúc của selector: demo với action .css("backgorund","#ffc700");
     * https://www.w3schools.com/jquery/jquery_ref_selectors.asp
     *  + $("*"): tất cả các thành pahanf
     *  + $("p"): select thẻ p
     *  + $(".class"): select đến các phần tử class
     *  + $("#id"): select đến  phần tử có id
     *  + $("p.class"): thẻ p có class
     *  + $("p span"): thẻ span nằm trong thẻ p
     *  + $("p:first"): thẻ p đầu tiên (p có thể là các select khác (class, các cấu trúc thẻ khác))
     *  + $("p:last"): thẻ p cuối cùng
     *  + $("ul li:fist"): thẻ li đầu tiên của ul đầu tiên
     *  + $("ul li:fist-child"): thẻ li đầu tiên của tất cả ul
     *  + $("ul li:last"):
     *  + $("ul li:last-child"):
     *  + $("div[data-id='value']"): tìm thẻ div có thuốc tính data-id chứa giá trị là value 
     *  + $("#id p:nth-child(index)"): thẻ p thứ index nằm trong khối id
     *  + $("div > span"): span cấp 1 của thẻ div
     *  + $("div + p"): phần tử kế tiếp của div là p
     *  + $("div ~ p"): các phẩn tử p cùng cấp với div
     */
    $(function() {
        //sau khi load xong toàn bộ cấu trúc html thì thực các câu lệnh
        // trong
        // nói tương tự như các hàm main ở trong các ngôn ngữ lập tình khác
    
        $("#learn-jquery").html(`<h2>Learn Jquery - ITStudent</h2>`); 
        $("p.demo").css("background","#ffc700");
        //$("p span").css("background","#ffc700");
        //$("p:last").css("background","#ffc700");
        //$("ul li:last").css("background","#ffc700");
        //$("a[href='google.com']").css("background","#ffc700");
        //$("#demo-nth-child li:nth-child(3)").css("background","#ffc700");
        //$("div.demo1 > span").css("background","#ffc700");
        //$(".demo2 div ~ p").css("background","#ffc700");
        // console.log($(".demo3").html("<h2>demo-3</h2>"));
        $("#demo3-click").click(function() {
            alert("click");
        })
    })
    
    /**
     * action có thể là:
     *      + thao tác với html
     *      + thao tác với css
     *      + tìm kiếm các phần tiếp
     *      + events: sự kiện
     *      + effect: hiệu ứng
     */

     /**
      * Thao tác với html
      *     - Thao tác với giá trị
      *         + text(): get, set ký tự
      *         + html(): get. set đoạn mã html;
      *         => khi nào nên dùng html và khi nào nên dùng text
      *         + val(): get, set giá trị
      *             + với các thể input (text, password, number, date, checkbox, radio, select)
      *         + attr(): get, set thuộc tính
      *     - Thêm phần tử: https://www.w3schools.com/jquery/jquery_dom_add.asp
      *         + append()
      *         + prepend()
      *         + after()
      *         + before()
      *     - Xóa phần tử: https://www.w3schools.com/jquery/jquery_dom_remove.asp
      *         + remove()
      *         + empty()
      */

      /**
       * Thao tác với css thao tác qua class
       *     + addClass()
       *     + removeClass()
       *     + toogleClass()
       *     + css
       */

       /**
        * Tiếp tục tìm kiếm
        *    - parent():
        *    - parents():
        *    => khi nào dùng parent và khi nào dùng parents();
        *    - children()
        *    - find():
        *   => đều là tìm con nhưng khi nào dùng children khi nào dùng find
        *   - siblings(): tìm anh chị em
        *   - first():
        *   - last():
        *   - not():
        */
       
        /**
         * Các events: khi làm việc với event luôn phải truyền vào
         * một hàm để sau khi xảy ra sự kiện thì là những công việc gì
         * => call back function
         *      + click(function() {}): sự kiện click
         *      + change(function() {}): sự kiện thay đổi phần tử
         *      (select, checkbox, radio)
         *      + dblclick(function() {}): double click
         *      + keyup(function(event) {}): nhập vào bàn phím
         *      + off("event"): tắt sự kiện nào đấy
         *      + trigger("event"): giả lập sự kiện nào đấy
         */
//Làm chức năng hiện thị popup search khi click vào nút search1 trên
//thanh nav,
//làm thêm chức năng click vào nút search trên popup search2 thì alter
//search
//làm thêm chức năng nhận biệt khi gõ phím enter vào ô input thì giả lập
//chức năng click vào nút search2
