const clockTitle = document.querySelector(".js-clock");

function getclock() {
    const today = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = String(today.getDate()).padStart(2,"0");
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    clockTitle.innerText = `${today.getFullYear()},${month[today.getUTCMonth()]},${date},${days[today.getDay()]},
    ${hours}H ${minutes}M ${seconds}S`

}
getclock();
setInterval(getclock,1000);


const backgroundImage = [
    "https://thetip.co.kr/wp-content/uploads/2021/04/%EA%B3%A0%ED%99%94%EC%A7%88-%EB%85%B8%ED%8A%B8%EB%B6%81-%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/245/1017/298/water-mist-faded-waves-deep-sea-hd-wallpaper-preview.jpg",
    "https://s2.best-wallpaper.net/wallpaper/1366x768/1207/Space-of-the-sea_1366x768.jpg",
    "https://www.wallpapertip.com/wmimgs/13-132694_wallpapers20-wonderful-wallpaper-desktop.jpg",
    "https://www.wallpapertip.com/wmimgs/5-58857_maldives-sunset-wallpaper-sunset-wallpaper-maldives-beach.jpg"
]
const images = backgroundImage[Math.floor(Math.random() * backgroundImage.length)];

const bgimage = document.createElement("img");
bgimage.src =`${images}`;

document.body.appendChild(bgimage);

