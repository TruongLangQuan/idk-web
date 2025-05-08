function createStars() {
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 2 + 1;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        document.body.appendChild(star);
    }
}  
createStars();

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.querySelector(".sidebar");

openBtn.onclick = () => sidebar.classList.add("show");
closeBtn.onclick = () => sidebar.classList.remove("show");

function toggleView() {
  const langBox = document.getElementById('lang');
  langBox.classList.toggle('show'); // Bật/tắt class để hiện/ẩn
}

