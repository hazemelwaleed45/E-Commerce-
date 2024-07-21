document.addEventListener('DOMContentLoaded', () => {
    fetch('navBar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data;
        });

    fetch('Footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});
