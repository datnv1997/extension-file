/**
 * author:NguyenDat
 * email:datnv1997@gmail.com
 * date:30/03/2019
 * nội dung: viết hàm chuyển đổi string viết hoa chữ cái đầu: Vd Cong Hoa Xa Hoi
 */
import { normalText } from './normalText.js'; // import hàm đã viết để xóa bỏ khoảng cách chữ;

function titleCase(text) {
    text = normalText(text); // hàm normalText trong file normalText.js
    text = text.split(' ')
        .map(value => value[0].toUpperCase() + value.slice(1).toLowerCase())
        .join(' ');
    return text;
}

/** TEST
 *  var text = "   cong   hoa   xa  KJOIJH ThanH  ";
    var test = titleCase(text);
    console.log(test);
 */







