/**
 * Chữa bài tập về nhà:
 * + Khi click vào nút search1 thì sẽ hiện thị pop search
 * + Khi click vào nut search 2 thì sẽ hiện thị alter thông các
 * các trường thông cần search (select, text)
 * + Khi nhập enter vào input text thì sẽ thực hiện chức năng 
 * giống như chức năng khi click vào nút search 2
 * + Khi click ra ngoài pop search thì pop up search phải đóng
 */

 /**
  * Khi xử lý giao diện 1 trang thì cần phải làm theo các bước sau
  * B1: Xác định các thành phần cần phải thao tác trên giao diện để
  *     phục vụ các các chức nằng, và khai báo các thành phần này
  *     là các biến toàn cục.
  * B2: liên kết các biến toàn cục với các thành phần trên html
  *     sử dụng jquery phải viết trong dom ready function.
  * B3: Xác định chức năng của các thành phần theo yêu cầu cần xử lý
  *     => tạo ra các hàm để xử lý các chức năng này và gọi hàm đã tạo    
  */

  /**
   * Phân tích cho ví dụ btvn
   * B1: iconNavSearch, divSearchPage, 
   *      iconSearchPage, textSearchPage, selectSearchPage
   *       textSearchPage, iconSearchPage
   *        divSearchPage, tất cả các thành phần còn lại trừ divSearchPage
   */
var iconNavSearch, divSearchPage, iconSearchPage, textSearchPage, selectSearchPage;

$(function() {
    //để selector đúng phần tử thì cần sử dụng selector bằng id hoặc class
    iconNavSearch = $("#icon-nav-search");
    divSearchPage = $(".search-page");
    iconSearchPage = $("#icon-search-page");
    textSearchPage = $("#text-search-page");
    selectSearchPage = $("#select-search-page");

    //chỉ để gọi hàm
    clickIconNavSearch();
    clickIconSearchPage();
    keyupTextSearchPage();
    hiddenSearchPage();
})

//iconNavSearch có sự kiện click chuột thì hiển thị ra divSearchPage
function clickIconNavSearch() {
    iconNavSearch.click(function(event) {
        //lệnh dừng kiện của cha truyền xuống
        event.stopPropagation();
        //khi click vào iconNavSearch thì phải thực hiện các dòng lệnh trong function
        divSearchPage.removeClass("d-none");
    })
}

//iconSearchPage có sự kiện click thì sẽ alter các thông tin người dùng vừa nhập
function clickIconSearchPage() {
    iconSearchPage.click(function() {
        //lấy giá trị của ô select, và ô input => in ra kết quả bằng alter
        let valSelect = selectSearchPage.val(); // lấy ra giá trị ô select
        let valText = textSearchPage.val();

        alertSuccess(`Text Search: ${valText} - SelectSearch: ${valSelect}`);
    })
}

//khi nhập enter vào ô input text thì sẽ thực hiện chức năng như click v òa icon
//searchPage
function keyupTextSearchPage() {
    textSearchPage.keyup(function(e) {
        //e chứa ký tự mình vừa nhập vào
        if(e.keyCode == 13) {
            //thực hiện chức năng như click vào search
            //giả lập sự kiện click vào iconSearchPage
            iconSearchPage.trigger("click");
        }
    })
}

//Khi click vào các phần tử khác thì đóng search-page
function hiddenSearchPage() {
    //cho tất cả các phần tử có sự kiện click thì ẩn searchpage
    $("body").click(function() {
        divSearchPage.addClass("d-none");
    })
    //khi set cha có sự kiện click thì tất các thành phần  con trong đó đều
    //có sự kiện click của cha
    //Phải loại ra 2 thần khi mà click vào nó sẽ không được ẩn search page
    //   - iconNavSearch
    //   - divSearchPage
    //=> dừng sự kiện của cha truyền xuống cho các phần tử con
    divSearchPage.click(function(event){
        event.stopPropagation();
    })
}