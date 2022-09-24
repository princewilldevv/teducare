document.getElementById('or-signup').addEventListener("click", function(){
    document.getElementById('d-signup').style.display = "block";
    document.getElementById('d-signin').style.display = "none";
});
document.getElementById('or-signin').addEventListener("click", function(){
    document.getElementById('d-signup').style.display = "none";
    document.getElementById('d-signin').style.display = "block";
});
var mtone = document.querySelectorAll('.mt-1');
buttonroll(mtone)
function buttonroll(params){
    params.forEach((item, index) => {
        document.getElementById(item.id).addEventListener("click", function(){
            buttonrollrem(item.id)
        });
    });
}
function buttonrollrem(params){
    let mtonestye = ["dhparent", "dhteacher", "dhowner"];
    for (let i = 0; i < mtonestye.length; i++) {
        let element = mtonestye[i];
        document.getElementById(element).classList.remove("btn-secondary", "d-lg-btn-active")
        document.getElementById(element).classList.add("d-btn-white-bg")
    }
    buttonrolladd(params);
}
function buttonrolladd(params) {
    document.getElementById(params).classList.remove("d-btn-white-bg")
    document.getElementById(params).classList.add("btn-secondary", "d-lg-btn-active")
}
document.getElementById('demologin').addEventListener("submit", function(){
    console.log('hey')
    location.href = `demo#dashboard`;
    location.reload(); 
});
