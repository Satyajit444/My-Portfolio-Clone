// console.log("js is applied");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav")
const listItem = document.querySelector(".listItem")
const footer = document.querySelector(".bottom-text")

menuToggle.onclick = () => {
    nav.classList.toggle("active");
    listItem.classList.toggle("listItems");
    footer.classList.toggle("footer");
}


// ----------------------[ Click outside of slider to close sidebar ]



const body = document.querySelector(".main-content")

body.onclick = () => {
    listItem.classList.remove("listItems");
    footer.classList.remove("footer");
    nav.classList.remove("active");

}

// -----------------------[  Movable-Cursor  ]

const cursor = document.querySelector(".cursor")
const cursor2 = document.querySelector(".cursor2")

document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY + "px;";
});

// -----------------------[ Typing-Text-Effect ]


// var typed = new typed(".autotype", {
//     strings: ["Developer", "Designer", "Freelancer"],
//     typeSpeed: 150,
//     backsSpeed: 150,
//     loop: true
// });