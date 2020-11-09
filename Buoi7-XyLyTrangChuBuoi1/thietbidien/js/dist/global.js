//thư mục dist chứa các file xử lý giao diện
/**
 * Khi xử lý đầy đủ các thao tác cũng như tạo giao điện động
 * cho một trang, nếu tất cả các xử lý trên đều viết cùng 1 file
 * dẫn đến số lượng code trong file rất lớn, khó biệt rõ ràng giữa các
 * phần và các phần chung mình không thể tái sử dụng code được
 *  => Chia code xử lý theo các phần mỗi phần là một file js
 *      Ví dụ trang home:
 *          header: (phần có thể tái sử dụng được)
 *          footer: (phần có thể tái sử dụng được)
 *          home:
 */

/**
 * Sử dụng các thư viện ngoài để tạo ra các thông báo cho người dùng
 *      - Toast.js
 *      - sweetalter2
 *      - bootstrap notify
 * Ở đây sẽ sử dụng với thằng bootstrap notify
 *  * Link thư viện của bootstrp notify
 *      + link đên cdn .min.js của thư viện trên
 *      + Ngoài ra để thêm hiệu ứng cần link thêm thư viện Animate.css
 *  * Xây dựng các hàm chung hiện thị thông báo
 *      + Khi thông báo đến người dùng thì có 4 loại như sau:
 *          - success: thành công
 *          - info: thông báo thông tin
 *          - warning: cảnh báo
 *          - danger: lỗi
 */

 //file global chứa các hàm chung cho toàn hệ thống
 function alertSuccess(text, time = TIME_ALERT) {
     $.notify({
         icon: 'far fa-check-circle',
         message: text 
     }, {
         delay: time,
         offset: {x: 15, y:15},
         type: 'success',
     })
 }

 function alertInfo(text, time = TIME_ALERT) {
    $.notify({
        icon: 'far fa-check-circle',
        message: text 
    }, {
        delay: time,
        offset: {x: 15, y:15},
        type: 'info',
    })
}

function alertWarning(text, time = TIME_ALERT) {
    $.notify({
        icon: 'fas fa-exclamation',
        message: text 
    }, {
        delay: time,
        offset: {x: 15, y:15},
        type: 'warning',
    })
}

function alertDanger(text, time = TIME_ALERT) {
    $.notify({
        icon: 'fas fa-exclamation-triangle',
        message: text 
    }, {
        delay: time,
        offset: {x: 15, y:15},
        type: 'danger',
    })
}

//AJAX_CALL_API
/**
 * Client giao tiếp với server thông qua request và kèm theo giao
 * thức http
 * Http có 4 phương thức: (khi giao tiếp bằng giao thức http thì kềm sử dụng phương thức nào)
 *      + GET (khi sử dụng trình duyệt thì luôn luôn là phương thức get)
 *      + PUT
 *      + POST
 *      + DELETE
 * => mỗi phương thức sẽ tạo ra một hàm riêng để phụ vụ gọi cho phương tức đấy
 * => mỗi phướng thức sẽ có 1 nhiệm vụ riếng
 */

//phục vụ để yêu cầu lấy dữ liệu 
async function ajaxGet(url) {
    let rs = null; //dữ liệu được trả về từ server
    //sử dụng ajax để gọi đến server
    //sử dụng $.ajax() hàm này cần tham số truyền vào là 1 đối tượng
    //chứa các cấu hình khi mình gọi server
    //do ajax là đối tượng promise sử dụng để tạo request

    //json => Java Scirpt Object
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + url,
        //thời gian phản hồi chấp nhận
        timeout: 30000,
        cache: false,
        success: function(result) {
            if(result.success === true) {
                rs = result.data;
            }
        }
    })
    return rs;
}

//hàm put sẽ phục vụ cho các request sửa thông tin
//Khi làm việc với method của http 
/**
 * Dữ liệu người dùng muốn truyền cho server:
 *  + truyền bằng param (GET, PUT, POST, DELETE)
 *  + truyền bằng body (PUT, POST, DELETE)
 * 
 * - Truyền bằng param
 *      + Thì các dữ liệu client gửi lên server sẽ nằm 
 *      trực tiếp trên url 
 *      + cụ thể là ở sau dấu ? 
 *      + các thông tin được định nghĩa theo kiểu key=value&key1=value1
 */
//https://dev.bksoftwarevn.com/product-service/api/v1/public/products/filter?company-id=2&product-type-id=0&brand-id=0&status=0&sort-type=date&asc=true&page=1&size=15
async function ajaxPut(url, data) {
    //data là dữ liệu muốn truyền server
    //data đang là dạng đối tượng java sciprt
    //json một chuỗi theo dạng đối tượng của js
    //để truyền được thông tin thì cần chuyển đối tượng của js
    //về chuỗi json
    let rs = null;
    await $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        dataType: "json",
        url: URL_API + url,
        //thời gian phản hồi chấp nhận
        timeout: 30000,
        cache: false,
        success: function(result) {
            if(result.success === true) {
                rs = result.data;
            }
        }
    })
    return rs;
}

async function ajaxPost(url, data) {
    let rs = null;
    await $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        dataType: "json",
        url: URL_API + url,
        //thời gian phản hồi chấp nhận
        timeout: 30000,
        cache: false,
        success: function(result) {
            if(result.success === true) {
                rs = result.data;
            }
        }
    })
    return rs;
}

async function ajaxDelete(url, data) {
    let rs = null;
    await $.ajax({
        type: 'DELETE',
        data: JSON.stringify(data),
        dataType: "json",
        url: URL_API + url,
        //thời gian phản hồi chấp nhận
        timeout: 30000,
        cache: false,
        success: function(result) {
            if(result.success === true) {
                rs = result.data;
            }
        }
    })
    return rs;
}
//hoàn thành việc tọa ra các hàm để có thể lấy dữ liệu từ server
//=> từ các dữ liệu này đưa lên html
//END_AJAX_CALL_API