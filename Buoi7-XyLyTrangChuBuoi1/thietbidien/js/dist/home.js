//các bước để đổ dữ liệu
 /**
  * Khi xử lý giao diện 1 trang thì cần phải làm theo các bước sau
  * B1: Xác định các thành phần cần phải thao tác trên giao diện để
  *     phục vụ các các chức nằng, và khai báo các thành phần này
  *     là các biến toàn cục.
  * B2: liên kết các biến toàn cục với các thành phần trên html
  *     sử dụng jquery phải viết trong dom ready function.
  * B2-1: Đổ dữ liệu cho trang.
  * B3: Xác định chức năng của các thành phần theo yêu cầu cần xử lý
  *     => tạo ra các hàm để xử lý các chức năng này và gọi hàm đã tạo    
  */

//hướng dẫn với đổ cho phần our product
//Khi đổ giao diện thì ban đầu phần our product sẽ không bất cứ một 
//thành phần html nào cả mà do js đọc dữ liệu từ server và tạo ra 
//các cấu trúc html đó
//Phải có một phần tử html bao ngoài để chứa nhưng html do js sinh ra

/**
 * Có 2 cách để đổ dữ liệu
 *  + đổ nguyên khối html
 *  + Sử dụng jquery để chỉ đúng những chỗ cần thay đôi dữ liệu (
 * cần phải có những đoạn html mẫu)
 */
var sessionProductOurs, listProductCategoryTemp, productItemTemp;
$(function() {
    sessionProductOurs = $(".product-ours");
    listProductCategoryTemp = $("#list-product-category-temp");
    productItemTemp = $("#product-item-temp");

    viewListProductCategory();
})

//OUR_PRODUCT
//B1: Đổ khung product type: lấy ra các product type được hiện thị
//ở trang chủ
//B2: Đổ các sản phẩm tương ứng cho product type

//rút gọn url khi call
/**
 * https://thietbidienavhh.com/gioi-thieu
 * https://thietbidienavhh.com/trang-chu
 * https://thietbidienavhh.com: định danh cho server của mình
 * /gioi-thieu, /trang-chu: chỉ rõ cho mình muốn lấy thành phần nào trên server
 * */
function viewListProductCategory() {
    //Khi làm việc trong hàm view
    //B1: lấy dữ liêu từ api
    //B2: đổ dữ liệu
    let url = "product-service/api/v1/public/product-types/company/2?view=true";//url tương ứng để lấy ra các product type được hiện thị
    ajaxGet(url).then(rs => {
        console.log(rs);
    }).catch(err => {
        console.log(err);
        alertDanger("Tìm kiếm product type lỗi!");
    });
}
//END_OUR_PRODUCT