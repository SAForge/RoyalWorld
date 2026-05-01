function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}



const cards = document.querySelectorAll('.card');
const container = document.querySelector('.team-container');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.add('blur'));
        card.classList.remove('blur');
    });

    card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.classList.remove('blur'));
    });
});




/*function buy(type){
  let nick = document.getElementById("nick").value;

  let tg_token = "8703567060:AAHT6jbBd7hyUoXt1a3oQ2DoOM6SKTlAD50";
  let tg_chat_id = "7362264578";
  let discord_webhook = "https://discordapp.com/api/webhooks/1496519769145213090/TD_-Wm2EpFo6GP5IKJgQO3imP_AdMWoSv7el311udwQ3grcUpaT1r0XspIuN-Z5R9WUA";
  let group_id = "-1003732066704"

  let text = `💜 Донат заявка
Ник: ${nick}
Привилегия: ${type}`;


  fetch(`https://api.telegram.org/bot${tg_token}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: tg_chat_id,
      text: text
    })
  });

 
  fetch(`https://api.telegram.org/bot${tg_token}/sendMessage?chat_id=${group_id}&text=${encodeURIComponent(text)}`);

 
  fetch(discord_webhook, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: text
    })
  });

  alert("Отправлено!");
}*/

function copyIP() {
  let ip = document.getElementById("join-ip").innerText;
  navigator.clipboard.writeText(ip);

  let msg = document.getElementById("join-msg");
  msg.style.display = "block";

  setTimeout(() => {
    msg.style.display = "none";
  }, 2000);
}

const canvas = document.getElementById("global-particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.getElementById("join").offsetHeight;

let particles = [];

// создаём частицы
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    // границы
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(162, 0, 255, 0.7)";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// адаптация при ресайзе
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = document.getElementById("join").offsetHeight;
});


function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  
}
function initParticles() {
  const canvas = document.getElementById("join-particles");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(162, 0, 255, 0.7)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}



function initParticles() {
  const canvas = document.getElementById("global-particles");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedY: -0.3 - Math.random() * 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speedY;

      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(162, 0, 255, 0.5)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

window.onload = initParticles;


window.onload = () => {
  initParticles();
};



let percent = 0;

let loaderInterval = setInterval(() => {
  percent++;

  document.querySelector(".loader-fill").style.width = percent + "%";
  document.getElementById("loaderPercent").innerText = percent + "%";

  if (percent >= 100) {
    clearInterval(loaderInterval);

    setTimeout(() => {
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 500);
    }, 300);
  }
}, 25);



/*const rate = 100; // 100 кристаллов = 1 USDT

const wallet = "TVOY_USDT_KOSHELEK"; // TRC20 адрес

function showPayment(){
  let amount = document.getElementById("amount").value;

  let usdt = amount / rate;

  document.getElementById("result").innerHTML = `
    💎 К оплате: <b>${usdt} USDT</b><br><br>
    📌 Отправь на адрес:<br>
    <b>${wallet}</b><br><br>
    ⚠️ После оплаты отправь TXID или скрин администратору
  `;
}*/

/*function showPayment(){
  let amount = document.getElementById("amount").value;

  fetch("/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      document.getElementById("result").innerText = data.error;
      return;
    }

    document.getElementById("result").innerHTML = `
      💎 К оплате: <b>${data.usdt} USDT</b><br><br>
      📌 Отправь на адрес:<br>
      <b>${data.wallet}</b>
    `;
  });
}*/

/*async function buy(item, price) {
    const nick = document.getElementById("nick").value;

    if (!nick) {
        alert("Введите ник");
        return;
    }

    const res = await fetch("http://localhost:3000/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            item,
            amount: price,
            nick
        })
    });

    const data = await res.json();

    if (data.url) {
        window.location.href = data.url; // редирект на оплату
    } else {
        alert("Ошибка оплаты");
    }
}*/

function buy(item, price) {
    const nick = document.getElementById("nick").value;

    if (!nick) {
        alert("Введите ник");
        return;
    }

    // твоя ссылка от DonatPay
    const url = `https://donatepay.ru/don/1492081?nick=${nick}&item=${item}`;

    window.location.href = url;
}