
// 1. แสดงข้อความต้อนรับ
window.addEventListener("load", function () {
    console.log("Welcome to My Portfolio!");
});

// 2. ปุ่มกลับไปด้านบน
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.id = "backToTop";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "45px";
backToTop.style.height = "45px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#c76c35";
backToTop.style.color = "white";
backToTop.style.fontSize = "25px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 3. เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(function (card) {
    card.classList.add("hidden");
    observer.observe(card);
});

// 4. แสดงวันที่และเวลา
function showDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("th-TH", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("th-TH");

    const display = document.getElementById("datetime");

    if (display) {
        display.innerHTML = date + " เวลา " + time;
    }
}

setInterval(showDateTime, 1000);
showDateTime();

// 5. ข้อความทักทาย
function welcomeMessage() {
    alert("ยินดีต้อนรับเข้าสู่ Portfolio ของธัญวรัตน์ 💗");
}
