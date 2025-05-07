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

function showInfo(code) {
  let text = '';
  switch (code) {
    case '1': text = 'Python là ngôn ngữ đơn giản, dễ học, rất mạnh!'; break;
    case '2': text = 'HTML là ngôn ngữ đánh dấu để tạo cấu trúc trang web.'; break;
    case '3': text = 'CSS dùng để làm đẹp trang web.'; break;
    case '4': text = 'JavaScript giúp web có tương tác và logic động.'; break;
    case '5': text = 'Pascal là ngôn ngữ học thuật, phù hợp luyện thuật toán.'; break;
  }
  document.getElementById('info-box').innerText = text;
}

