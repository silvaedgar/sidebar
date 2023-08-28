var changeSize = false;

function getClassSidebar() {
    let modes = document.querySelector(".sidebar");
    return modes.classList.contains('sidebar-hide')
}

function getClassMenuSession() {
    let menus = document.querySelector(".menu-session");
    return menus.classList.contains('menu-session-hide')
}


function checkSize() {
    if (window.innerWidth <= 800 && !changeSize) {
        mostrarSideBar()
        changeSize = true
    } else {
        if (window.innerWidth > 800) {
            if (getClassSidebar()) mostrarSideBar()
        }
        changeSize = false;
    }
}

window.addEventListener('resize', (e) => {
    checkSize()
})

window.addEventListener('click', (e) => {
    console.log(e.target.parentElement)
    if (e.target.parentElement.id == "session") {
        var menu = document.querySelector(".menu-session");
        menu.classList.toggle("menu-session-hide")
    } else {
        if (window.innerWidth <= 800 && (e.target.parentElement.className == "bars" || e.target.className ==
            "bars" || e.clientX >= 235)) {
            if (e.clientX >= 235) {
                if (!getClassSidebar()) mostrarSideBar()
                if (!getClassMenuSession()) mostrarMenuSession()

            } else mostrarSideBar()
        } else {
            if (!getClassMenuSession()) mostrarMenuSession()

        }
    }
})

function mostrarSideBar() {
    var modes = document.querySelector(".sidebar");
    modes.classList.toggle("sidebar-hide")
    let bars = document.querySelector(".bars");
    if (modes.classList.contains("sidebar-hide")) {
        bars.style.margin = "0px 0px 0px 5px"
    } else bars.style.margin = "0px 0px 0px 150px"
}

function mostrarMenuSession() {
    var modes = document.querySelector(".menu-session");
    modes.classList.toggle("menu-session-hide")
}
