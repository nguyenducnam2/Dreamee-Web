let modal = document.querySelector(".modal");
let imgpopup = document.querySelector("#imgpopup");
let btnclose = document.querySelector("#btn-close");

btnclose.onclick = () => {
    modal.style.display = "none";
}

let show_modal = (card) => {
    let img = card.getElementsByTagName("img")[0];
    imgpopup.src = img.src;
    modal.style.display = "block";
}
