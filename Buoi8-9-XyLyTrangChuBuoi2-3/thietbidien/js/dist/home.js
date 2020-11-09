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
        //sau khi lấy được dữ liệu cần hiện thị
        // làm sao đưa các thông tin này vào các thành html (temp)
        // tương ứng để hiện thị

        //trong kết quả trả về là một mảng có n phần tử
        //thì việc của mình phải đưa n cấu trúc html tương ứng
        //n phần tử

        //=> duyệt mảng và kết quả trả về phải là một mảng có 
        //số lượng phần tử tương ứng đã được biến đổi từ mảng củ
        //=> sử dụng map để duyêt mảng.
        let view = rs.map((data, index)  => {
            //duyệt qua các phần tử trong mảng và sẽ có kết quả
            //trả về cho các phần tử tương ứng.

            //tạo ra một khung html nó tương phân html temp mà mình đã
            //tạo ra ở html
            //.clone để tạo ra một khung html tương tự
            let listProductCategoryClone = listProductCategoryTemp.clone();
            //ở html 5 cho phép các bạn lưu dữ liệu và trong các thẻ:
            // lưu bằng thuộc tính data-id
            listProductCategoryClone.attr("data-id", data.id);
            
            //do listProductCategory temp  chưa  thuộc tính id
            //mà id  trong html chỉ là duy nhất
            //=> xóa thuộc tính id bằng hàm removeAttr("");
            listProductCategoryClone.removeAttr("id");
            //sử dụng find để chỉ định các thành phần con của đối tượng
            //clone để truyền các thông tin tương ứng.
            listProductCategoryClone.find(".name-category").html(viewField(data.name));
            //.attr("key","value") set thuộc tính key cho phần tử html tương ứng
            listProductCategoryClone.find(".href-category").attr("href", viewField(data.alias));
            listProductCategoryClone.find("#product-item-temp").remove();
            //khi clone một cấu trúc html luôn phải để ý id không được tồn tại lặp lại
            
            //phải load ra được những product thuộc product type
            viewProductInProductType(data.id);
            return listProductCategoryClone;
        })
        //nếu sử .html thì sẽ xóa hết cacs phần tử cũ và chèn thêm các phần tử mới
        //do vẫn muốn giữ nguyên các thành phần cũ và thêm vào thành mới ở dưới .append()
        //nếu muốn thêm các thành mới trên cùng .prepend
        console.log(view);
        sessionProductOurs.append(view); 
    }).catch(err => {
        console.log(err);
        alertDanger("Tìm kiếm product type lỗi!");
    });
}

//ở mỗi list product type thì sẽ hiện các product tương ứng của nó
function viewProductInProductType(productTypeId) {
    //làm sao để lấy ra được các thông tin của product cùng productType có id tương ứng với tham số truyền
    //thì cần api làm saod dể có truyền truyền vào tham số productTypeId và trả về 8 sản phẩm product cùng productType
    let url = `product-service/api/v1/public/products/filter?company-id=2&product-type-id=${productTypeId}&brand-id=0&status=0&sort-type=date&asc=true&page=1&size=8`;
    ajaxGet(url).then(rs => {
        rs = rs.content;
        //tất xử lý in ra thông tin đều phải nằm trong hàm này
        //select đến các phẩn html tương ứng bằng cách sử dụng selector attr tương ứng với id của productType (data-id)
        let view = rs.map((data, index) => {
            console.log(data);
            let productItemClone = productItemTemp.clone().removeAttr("id");
            let imgProduct = productItemClone.find(".img-product")
            imgProduct.attr("src", viewSrcFile(data.image)); 
            imgProduct.attr("alt", viewField(data.name)); 
            productItemClone.find(".name-product").html(viewField(data.name));
            productItemClone.find(".cost-product").html(viewField(data.cost) + " VNĐ");
            productItemClone.find(".btn-add-cart").attr("onClick", `clickAddCart(${data.id})`);
            //sử dụng attr onclick trong thẻ html
            //gán sự kiện click trong file js (chỉ gán được sự kiện khi phần tử đã tồn tại)
            return productItemClone;
        });
        //chỉ có thể thao với phần tử khi mà phần tử đã được tạo ra
        $(`.list-product-category[data-id='${productTypeId}'] .list-product .row`).html(view);
        //BTVN: set onclick hoặc thao tác với productItemClone do mình tạo ra chỉ có tác dụng sau hàm .html (phần đó mới tồn tại)
    }).catch(err => {
        console.log(err);
        alertDanger("Tìm kiếm sản phẩm lỗi!");
    })
}
//END_OUR_PRODUCT