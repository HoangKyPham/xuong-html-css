document.addEventListener("DOMContentLoaded", function() {
    const userLoginBtn = document.querySelector('.user-login');
    const dialog = document.querySelector('.dialog');

    // Hàm xử lý khi click vào nút user login
    function handleUserLoginClick(event) {
        event.preventDefault();
        dialog.style.display = 'flex'; // Hiển thị dialog
    }

    // Thêm sự kiện click vào nút user login
    userLoginBtn.addEventListener('click', handleUserLoginClick);

});

document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.querySelector('.dialog');
    const closeBtn = dialog.querySelector('.dialog-close__btn');

    // Hàm xử lý khi click vào nút close
    function handleCloseButtonClick(event) {
        event.preventDefault();
        dialog.style.display = 'none'; // Ẩn đi dialog
    }

    // Thêm sự kiện click vào nút close
    closeBtn.addEventListener('click', handleCloseButtonClick);
});
