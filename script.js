// تغییر تم و آیکون
function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark')) {
        icon.src = 'media/moon.svg';
        icon.alt = 'حالت تاریک فعال است';
    } else {
        icon.src = 'media/sun.svg';
        icon.alt = 'حالت روشن فعال است';
    }
}

// انیمیشن پر شدن کیلومترشمار هر گروه به‌صورت مستقل وقتی وارد صفحه شد
function animateGroupGauges(group) {
    const gauges = group.querySelectorAll(".gauge");
    gauges.forEach(gauge => {
        const circle = gauge.querySelector(".progress");
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
    // تنظیم آیکون اولیه تم
    const icon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark')) {
        icon.src = 'media/moon.svg';
        icon.alt = 'حالت تاریک فعال است';
    } else {
        icon.src = 'media/sun.svg';
        icon.alt = 'حالت روشن فعال است';
    }
});
