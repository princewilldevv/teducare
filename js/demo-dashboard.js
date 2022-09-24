document.getElementById('d-central-bg').style.display = "none";

linkactives()
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

    dashboard.classList.add("nav-sup-link-active");
}
