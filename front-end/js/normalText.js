/**
 * author:nguyen Dat
 * gmail:datnv1997@gmail.com
 * Date: 30/03/2019;
 */
export function normalText(text) {
    //chuyển chuỗi string thành mảng để thao tác với các phần tử mảng
    var tArray = text.split(' '); // tạo ra các phẩn tử mảng có chứa space [''];

    for (let i = 0; i < tArray.length; i++) {
        if (tArray[i] == '') {
            tArray.splice(i, 1); // dùng hàm này để xóa mỗi khi gặp phần tử rỗng @param[1]= chỉ số muốn xóa,@param[2]= số phần tử muốn xóa từ chỉ số;
            i--;    // lùi về 1 phần tử nếu không sẽ bị sót
        }
    }
    return tArray.join(' ');
}

/**
 * test:
 * var test = "   Cong   hoa xa  hoi    ";
    console.log(normalText(test));
 */
