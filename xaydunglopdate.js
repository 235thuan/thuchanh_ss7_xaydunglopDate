let MyDate = function (day, month, year) {
    //Bước 1: Xây dựng lớp MyDate với phương thức khởi tạo có 3 tham số truyền vào
    this.day = day;

    this.month = month;

    this.year = year;

//Bước 2: Xây dựng phương thức trả về ngày, tháng, năm
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
//Bước 3: Xây dựng phương thức thiết đặt lại giá trị các thuộc tính day, month, year

    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    }

};
//Sử dụng lớp vừa tạo. Tạo đối tượng date với ngày:2, tháng:2, năm: 2007:
let date = new MyDate(2, 2, 2007);
//truy cap phuong thuc cua lop date
let day = date.getDay(); // 2
let month = date.getMonth(); // 2

let year = date.getYear(); // 2007
//
// //hien thi ngay thang nam
alert(day + "/" + month + "/" + year);
// //buoc8 :goi phuong thuc thay doi ngay thang nao cua dtg vua tao thanh ngay 10/10/2019
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
day = date.getDay(); // 2
month = date.getMonth(); // 2

year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);
