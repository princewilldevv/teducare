backgroundsetup() 
function backgroundsetup() {
    document.getElementById('d-top-bg').style.display = "none";
    document.getElementById('d-bottom-bg').style.display = "none";
    document.getElementById('demo-body').style.background = "#0067A2";

    document.getElementById('d-central-bg').innerHTML =  `<div id="" style="position:relative; width:100%;">
    <div class="d-central-lg" style="width:100%;"><img src="img/d-whitebg.svg" style="width: 100%;"></div>
    </div>`;
    navcontainer();
    linkactives();
}


function navcontainer() {
    let navcontainer = document.getElementById('d-nav-container');
    let navback = document.getElementById('d-nav-background');
    
    navcontainer.classList.remove("bg-light");
    navback.classList.remove("bg-light");
    navcontainer.style.background = "#0067A2";
}

function linkactives() {
    let dashboard = document.getElementById('dashboard');
    let kids = document.getElementById('kids');
    let points = document.getElementById('points');
    let messages = document.getElementById('messages');
    let discover = document.getElementById('discover');

    dashboard.classList.remove("nav-sup-link-active");
    kids.classList.remove("nav-sup-link-active");
    points.classList.remove("nav-sup-link-active");
    messages.classList.remove("nav-sup-link-active");
    discover.classList.remove("nav-sup-link-active");

    discover.classList.add("nav-sup-link-active");
}