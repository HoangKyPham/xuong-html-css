document.addEventListener("DOMContentLoaded", function() {
    const userLoginBtn = document.querySelector('.user-login');
    const dialog = document.querySelector('.dialog');

    function handleUserLoginClick(event) {
        event.preventDefault();
        dialog.style.display = 'flex'; 
    }

    userLoginBtn.addEventListener('click', handleUserLoginClick);

});

document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.querySelector('.dialog');
    const closeBtn = dialog.querySelector('.dialog-close__btn');

    function handleCloseButtonClick(event) {
        event.preventDefault();
        dialog.style.display = 'none'; 
    }

    closeBtn.addEventListener('click', handleCloseButtonClick);
});
