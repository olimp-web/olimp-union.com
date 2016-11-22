(function () {
    // hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }
    // Mobile nav function
    var mobileNav = document.querySelector('.nav-mobile');
    var toggle = document.querySelector('.nav-list');
    document.getElementById("button1").onclick =
    document.getElementById("button2").onclick =
    document.getElementById("button3").onclick =
    document.getElementById("button4").onclick =
    document.getElementById("button5").onclick =
    document.getElementById("button6").onclick =
    document.getElementById("button7").onclick =
    mobileNav.onclick = function () {
        toggleClass(this, 'nav-mobile-open');
        toggleClass(toggle, 'nav-active');
    };

})();
