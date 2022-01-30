let galleryImg = document.querySelectorAll(".gallery-img");
let windowWidth = window.innerWidth;
let lastIndex = 0;
var img = new Array(galleryImg.length);

if (galleryImg) {
    for (let j = 0; j < galleryImg.length; j++)
        img[j] = 'client' + (j+1) + ".png";

    galleryImg.forEach(function(image, index) {
        image.onclick = function() {
            lastIndex = index;
            
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window-logo");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "./includes/images/" + img[index]);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let imgToEdge = windowWidth - imgWidth;
                let clientWindow = document.documentElement.clientWidth;
                let marge = Math.round(clientWindow / 110);
                imgToEdge = (100 / imgToEdge) + marge;

                let newPrevBtn = document.createElement("a");
                let btnPrev = document.createElement("i");
                newPrevBtn.appendChild(btnPrev);
                container.appendChild(newPrevBtn);
                btnPrev.setAttribute("class", "fas fa-chevron-circle-left");
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                btnPrev.style.cssText = "left:" + imgToEdge + "vw;";
    
                let newNextBtn = document.createElement("a");
                let btnNext = document.createElement("i");
                newNextBtn.appendChild(btnNext);
                container.appendChild(newNextBtn);
                btnNext.setAttribute("class", "fas fa-chevron-circle-right");
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                btnNext.style.cssText = "right:" + imgToEdge + "vw;";
            }
        }
    });

    closeImg = () => {
        document.querySelector(".img-window-logo").remove();
        document.querySelector(".img-btn-prev").remove();
        document.querySelector(".img-btn-next").remove();
    }

    changeImg = changeDir => {
        document.querySelector("#current-img").remove();

        let getImgWindow = document.querySelector(".img-window-logo");
        let newImg = document.createElement("img");
        getImgWindow.appendChild(newImg);

        let newIndex;
        if (changeDir === 0)
            newIndex = (lastIndex <= 0 ? galleryImg.length-1 : lastIndex-1);
        else if (changeDir === 1)
            newIndex = (lastIndex >= galleryImg.length-1 ? 0 : lastIndex+1);
        
        console.log(img[newIndex]);
        newImg.setAttribute("src", "./includes/images/" + img[newIndex]);
        newImg.setAttribute("id", "current-img");

        lastIndex = newIndex;

        newImg.onload = function () {
            let imgWidth = this.width;
            let imgToEdge = windowWidth - imgWidth;
            let clientWindow = document.documentElement.clientWidth;
            let marge = Math.round(clientWindow / 110);
            imgToEdge = (100 / imgToEdge) + marge;

            let prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "left: " + imgToEdge + "vw;";
            
            let nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + imgToEdge + "vw;";
        }
    }
}
