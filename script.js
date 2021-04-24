document.addEventListener('DOMContentLoaded',() => {
let     modalClose = document.getElementsByClassName('close'),
        modalOpen = document.getElementsByClassName('btn');

        Array.from(modalClose, closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.parentNode.style.visibility = 'hidden';
                });
            });

        Array.from(modalOpen, openBtn => {
            openBtn.addEventListener('click', (e) => {
                let modalId = e.target.getAttribute('data-id');
                document.getElementById(modalId).style.visibility = 'visible';
            });
        });

});