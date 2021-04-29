console.log("This is a browser feature intended for developers. Please do not paste any type of code here,because this will help hacker to hack your private files!");
let feedBtn = document.getElementById("feedBtn");
let cancel = document.getElementById("cancel");
let simileBox = document.getElementById("simileBox");

feedBtn.addEventListener("click", FeedBackFunction);

function FeedBackFunction() {
    let FBVisible = document.getElementById("FBVisible");
    FBVisible.style.visibility = "visible";
}

cancel.addEventListener("click", function() {
    let FBVisible = document.getElementById("FBVisible");
    console.log("you click on cancel button")
    FBVisible.setAttribute("class", "Fhide");
    FBVisible.style.visibility = "hidden";

})

simileBox.addEventListener("click", function(e) {
    let selecting = e.target;
    if (selecting.id.includes("smily")) {
        let selected = document.querySelector('.Selected');

        if (selected) selected.classList.remove('Selected');
        selecting.classList.add('Selected');
    }
    let tutu = document.querySelector('.Selected').id;
    window.SelectedSmileId = tutu;
})


// for hamberger menu 
let hambergermenu = document.querySelector(".hambergermenu");
hambergermenu.addEventListener("click", function() {
    console.log("you clicked on hamberger menu")
    let navUl = document.getElementById("navUl");
    let hamberger = document.querySelector(".hamberger")

    if (navUl.style.display == "flex") {
        navUl.style.display = "none";
        hamberger.removeAttribute("id", "hambergernew")

    } else {
        navUl.style.display = "flex";
        hamberger.setAttribute("id", "hambergernew")
            // hamberger.setAttribute("class", "hambergernew")
    }
})