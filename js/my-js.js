// انیمیشن پر شدن کیلومترشمار هر گروه به‌صورت مستقل وقتی وارد صفحه شد
function animateGroupGauges(group) {
    const gauges = group.querySelectorAll(".gauge");
    gauges.forEach(gauge => {
        const circle = gauge.querySelector(".progresss");
        const percent = gauge.getAttribute("data-percent");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - percent / 100);
        circle.style.strokeDashoffset = offset;
    });
    group.setAttribute('data-animated', 'true');
}

function handleScroll() {
    const groups = document.querySelectorAll(".skills-group");
    groups.forEach(group => {
        const top = group.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        const isAnimated = group.getAttribute('data-animated') === 'true';
        if (isVisible && !isAnimated) {
            animateGroupGauges(group);
        }
    });
}

// اجرا در بارگذاری صفحه و اسکرول
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", () => {
    handleScroll();
});
