showMenu = () => {
    let id = document.getElementById('nav');
    if (id.className === 'nav-bar') {
        id.className += ' responsive';
    } else {
        id.className = 'nav-bar';
    }
    console.log(id.className);
}