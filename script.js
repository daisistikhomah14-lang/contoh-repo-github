// --- Bikin hati-hati beterbangan ---
const heartsContainer = document.getElementById('hearts');
for(let i=0; i<10; i++){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '♥';
  h.style.left = (Math.random()*100) + '%';
  h.style.fontSize = (12 + Math.random()*14) + 'px';
  h.style.animationDuration = (10 + Math.random()*10) + 's';
  h.style.animationDelay = (Math.random()*10) + 's';
  heartsContainer.appendChild(h);
}

// --- Tanggal mulai (ubah di sini kalau tanggalnya beda) ---
// format: new Date(tahun, bulan, tanggal, jam, menit, detik)
// PERHATIAN: bulan dimulai dari 0 -> Januari=0, September=8
const startDate = new Date(2025, 8, 14, 0, 0, 0);

// --- Ambil elemen-elemen angka dari HTML ---
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function pad(n){ return n.toString().padStart(2, '0'); }

function updateCounter(){
  const now = new Date();
  let diff = now - startDate;
  if(diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}


updateCounter();
setInterval(updateCounter, 1000);

'script'
<body>
'html'
