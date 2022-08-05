let bigPicture = document.querySelector(".big-picture");

let smallPicture = document.querySelectorAll(".small-picture");

smallPicture.forEach(picture => {
    picture.addEventListener("click", function (e) {
        let imgSrc = e.target;
        let srcNew = imgSrc.getAttribute("src");
        bigPicture.setAttribute("src", srcNew);
        let alt = imgSrc.getAttribute("alt");
        document.querySelector("figcaption").innerText = alt;
    });
});