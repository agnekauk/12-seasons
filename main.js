// let season = document.getElementById("seasons");
// let body = document.querySelector("body");

// season.addEventListener("change", function () {
//     let value = season.value;
//     if (value === "spring") {
//         body.style.backgroundImage = 'url("./img/_106100880_spring.jpg")';
//     }
//     else if (value === "summer") {
//         body.style.backgroundImage = 'url("./img/summer-2391348-1920.jpg")';
//     }
//     else if (value === "autumn") {
//         body.style.backgroundImage = 'url("./img/autumn-poems-header-min.jpg")';
//     }
//     else if (value === "winter") {
//         body.style.backgroundImage = 'url("./img/winter_sunrise-2-1024x683.jpeg")';
//     }
// })

// season.addEventListener("change", function () {
//     let value = season.value;
//     body.style.backgroundImage = 'url("./img/' + value + '.jpg")';
// })

let bigPicture = document.querySelector(".big-picture");

document.querySelector(".row-small").addEventListener("click", function (e) {
    let imgSrc = e.target;
    let srcNew = imgSrc.getAttribute("src");
    bigPicture.setAttribute("src", srcNew);
    let alt = imgSrc.getAttribute("alt");
    document.querySelector("figcaption").innerText = alt;
})