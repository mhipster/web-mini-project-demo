// หาองค์ประกอบ SVG ที่เราต้องการจะเปลี่ยนสี
const heartIcons = document.querySelectorAll(".bi-suit-heart-fill");

// เพิ่มการจัดการเหตุการณ์คลิกให้กับทุกไอคอนหัวใจ
heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        // เปลี่ยนสีของไอคอนหัวใจเป็นแดง
        icon.classList.toggle("clicked");
    });
});





