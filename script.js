/**
 * ذكرى عيد زواجنا الرابع السعيد | 1 أكتوبر 2026
 * يوسف ❤️ ذكريات
 * الإصدار الملكي V2: محرك الجزيئات ثلاثي الأبعاد، بتلات الورد، بلورة همسات العشق، والصوتيات
 */

// دالة عامة لفتح عارض الصور بملء الشاشة
window.openLightbox = function(src, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (modal && img) {
    img.src = src;
    if (cap) cap.textContent = caption || '';
    document.body.classList.add('modal-open');
    modal.classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. منع التكبير المزدوج والزوم العرضي على الموبايل (Anti-Zoom on Touch)
     ========================================================================== */
  let lastTapTimestamp = 0;
  document.addEventListener('touchend', (e) => {
    const currentTime = Date.now();
    const tapLength = currentTime - lastTapTimestamp;
    if (tapLength < 320 && tapLength > 0) {
      if (e.target && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        e.preventDefault();
        e.target.click();
      }
    }
    lastTapTimestamp = currentTime;
  }, { passive: false });

  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('gesturechange', (e) => e.preventDefault());
  document.addEventListener('gestureend', (e) => e.preventDefault());

  /* ==========================================================================
     1. تحسين الأداء الفائق وتجاوز الكاش (Zero-Lag Performance Engine)
     ========================================================================== */
  function setupAmbientBlurBackdrops() {
    // تم إلغاء معالجة البلور الثقيلة لتسريع الصفحة 10 أضعاف وتوفير بطارية وسرعة الموبايل
  }

  /* ==========================================================================
     2. نظام الصوتيات والموسيقى الرومانسية المتطورة (Web Audio API)
     ========================================================================== */
  class RomanticAudioEngine {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.melodyInterval = null;
      
      // نغمات السلم الرومانسي الحالم (Harmonic Romance Chords)
      this.chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 392.00], // G7
        [246.94, 311.13, 370.00, 440.00]  // B7
      ];
      this.currentChordIndex = 0;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    playChime(freq = 523.25, type = 'sine', duration = 1.4) {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    }

    playUnlockSound() {
      this.init();
      const notes = [440, 554.37, 659.25, 880, 1108.73];
      notes.forEach((note, index) => {
        setTimeout(() => {
          this.playChime(note, 'triangle', 0.9);
        }, index * 110);
      });
    }

    startAmbientMusic() {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (this.isPlaying) return;
      this.isPlaying = true;

      const musicBtn = document.getElementById('music-toggle');
      if (musicBtn) musicBtn.classList.add('playing');

      let step = 0;
      this.melodyInterval = setInterval(() => {
        if (!this.isPlaying) return;

        const chord = this.chords[this.currentChordIndex];
        const noteFreq = chord[step % chord.length];

        this.playSoftPianoNote(noteFreq);

        step++;
        if (step % 4 === 0) {
          this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
        }
      }, 650);
    }

    playSoftPianoNote(freq) {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // نغمة أساسية دافئة (Warm Fundamental)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      gain1.gain.setValueAtTime(0.20, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 2.2);

      // وميض نغمي علوي خفيف (Harmonic Shimmer)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      gain2.gain.setValueAtTime(0.07, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now);
      osc2.stop(now + 1.5);
    }

    playHeartbeatDouble() {
      try {
        this.init();
        const now = this.ctx.currentTime;
        // النبضة الأولى (Lub)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(65, now);
        osc1.frequency.exponentialRampToValueAtTime(35, now + 0.12);
        gain1.gain.setValueAtTime(0.35, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.12);

        // النبضة الثانية (Dub)
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(85, now + 0.14);
        osc2.frequency.exponentialRampToValueAtTime(40, now + 0.28);
        gain2.gain.setValueAtTime(0.42, now + 0.14);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(now + 0.14);
        osc2.stop(now + 0.28);
      } catch (e) {
        console.log('Heartbeat audio note:', e);
      }
    }

    startHeartbeatLoop() {
      this.init();
      if (this.heartbeatInterval) return;
      this.playHeartbeatDouble();
      this.heartbeatInterval = setInterval(() => {
        this.playHeartbeatDouble();
      }, 780);
    }

    stopHeartbeatLoop() {
      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = null;
      }
    }

    stopAmbientMusic() {
      this.isPlaying = false;
      if (this.melodyInterval) {
        clearInterval(this.melodyInterval);
        this.melodyInterval = null;
      }
      const musicBtn = document.getElementById('music-toggle');
      if (musicBtn) musicBtn.classList.remove('playing');
    }

    toggle() {
      if (this.isPlaying) {
        this.stopAmbientMusic();
      } else {
        this.startAmbientMusic();
      }
    }
  }

  const audio = new RomanticAudioEngine();

  const musicToggleBtn = document.getElementById('music-toggle');
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      audio.toggle();
    });
  }

  // تشغيل الموسيقى الرومانسية فوراً عند دخول الموقع دون انتظار فتح الرسالة
  function startMusicImmediately() {
    audio.init();
    if (audio.ctx && audio.ctx.state === 'suspended') {
      audio.ctx.resume().catch(() => {});
    }
    if (!audio.isPlaying) {
      audio.startAmbientMusic();
    }
  }

  // 1. محاولة التشغيل الفوري مع تحميل الصفحة
  startMusicImmediately();
  window.addEventListener('load', startMusicImmediately, { once: true });

  // 2. تفعيل فوري مع أول لمسة أو حركة طبيعية على شاشة الموبايل دون الحاجة للبحث عن زر
  const autoPlayGestures = ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'scroll'];
  const triggerAutoPlay = () => {
    startMusicImmediately();
    autoPlayGestures.forEach(evt => window.removeEventListener(evt, triggerAutoPlay, { capture: true }));
  };
  autoPlayGestures.forEach(evt => {
    window.addEventListener(evt, triggerAutoPlay, { capture: true, passive: true });
  });

  /* ==========================================================================
     تحميل مسبق لكافة صور الذكريات الـ 18 فور دخول الموقع في الخلفية
     ========================================================================== */
  const memoryPhotosList = [
    "images/أول لقاء وصدفة القدر السعيدة.JPG",
    "images/اليوم الأجمل في التاريخ.jpeg",
    "images/ضحكات نابعة من الوجدان.jpeg",
    "images/ضحكات نابعة من الوجدان (2).jpeg",
    "images/ضحكات نابعة من الوجدان.png",
    "images/أعظم عهد قطعه قلبي لذكريات.jpeg",
    "images/أعظم عهد قطعه قلبي لذكريات (2).jpeg",
    "images/أعظم عهد قطعه قلبي لذكريات (3).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات.jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (1).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (2).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (3).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (4).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (5).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (6).jpeg",
    "images/العالم كله أجمل معكِ يا ذكريات (7).jpeg",
    "images/ضحكاتنا ودفء بيتنا الصغير.jpeg",
    "images/عهد للمستقبل وما بعده.jpeg"
  ];

  function preloadAllAssetsInBackground() {
    memoryPhotosList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  preloadAllAssetsInBackground();

  /* ==========================================================================
     تشغيل الموسيقى فور الدخول تلقائياً مع معالج التفاعل الشفاف
     ========================================================================== */
  function attemptAutoplayMusic() {
    try {
      audio.startAmbientMusic();
    } catch (e) {
      console.log('Autoplay waiting for touch:', e);
    }
  }
  attemptAutoplayMusic();

  const enableAudioOnFirstGesture = () => {
    if (audio.ctx && audio.ctx.state === 'suspended') {
      audio.ctx.resume().catch(() => {});
    }
    audio.startAmbientMusic();
    ['click', 'touchstart', 'pointerdown', 'keydown', 'scroll'].forEach((evt) => {
      window.removeEventListener(evt, enableAudioOnFirstGesture);
      document.removeEventListener(evt, enableAudioOnFirstGesture);
    });
  };

  ['click', 'touchstart', 'pointerdown', 'keydown', 'scroll'].forEach((evt) => {
    window.addEventListener(evt, enableAudioOnFirstGesture, { passive: true, once: true });
    document.addEventListener(evt, enableAudioOnFirstGesture, { passive: true, once: true });
  });

  /* ==========================================================================
     3. بلورة همسات الحب لـ ذكريات (The Love Whispers Oracle)
     ========================================================================== */
  const whispers = [
    "أنتِ النعمة التي لا تنتهي، والقدر الذي أحمد ربي عليه في كل سجدة يا ذكريات عمري.",
    "أربع سنوات معكِ مرت كطرفة عين.. وكل ثانية فيها كُتبت بمداد العشق الخالد.",
    "في عينيكِ أمان العالم كله، وابتسامتكِ هي شروق الشمس في قلبي.",
    "البيت ليس جدراناً ولا أثاثاً.. بيتي ووطني وسكينتي هو أنتِ يا أميرة قلبي.",
    "لو عاد بي الزمن ألف مرة، لاخترتكِ في كل مرة وبكل نبضة في فؤادي.",
    "اسمكِ 'ذكريات'.. لكنكِ حاضري الجميل ومستقبلي الأعظم وكل ما أتمناه من الدنيا.",
    "مع كل يوم يمضي، أكتشف تفصيلة جديدة تجعلني أعشقكِ أضعافاً مضاعفة.",
    "أنتِ لستِ فقط زوجتي وحبيبتي، أنتِ الصديق الأوفى والسند الذي لا يميل.",
    "كل عام وأنتِ الخير لكل عام، وكل ثانية وأنتِ معي في رضا وسعادة وحب لا ينتهي."
  ];

  const whisperTextEl = document.getElementById('whisper-text');
  const whisperBtn = document.getElementById('whisper-btn');
  let currentWhisperIdx = 0;

  if (whisperBtn && whisperTextEl) {
    whisperBtn.addEventListener('click', () => {
      audio.playChime(784, 'triangle', 0.8);
      whisperTextEl.style.opacity = '0';

      setTimeout(() => {
        currentWhisperIdx = (currentWhisperIdx + 1) % whispers.length;
        whisperTextEl.textContent = `"${whispers[currentWhisperIdx]}"`;
        whisperTextEl.style.opacity = '1';

        // إطلاق قلوب رقيقة حول زر البلورة
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 25,
            spread: 60,
            origin: { y: 0.65 },
            colors: ['#ff4d6d', '#ffd166', '#ff758c']
          });
        }
      }, 300);
    });
  }

  /* ==========================================================================
     4. سلايدر الصور التلقائي كل ثانيتين (Auto Slideshow per Card)
     ========================================================================== */
  const slideshows = document.querySelectorAll('.slideshow-container');
  slideshows.forEach((container) => {
    const slides = container.querySelectorAll('.slide-item');
    if (slides.length <= 1) return;

    const indicators = container.querySelector('.slideshow-indicators');
    if (indicators) {
      indicators.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        indicators.appendChild(dot);
      });
    }

    let currentIndex = 0;
    const interval = parseInt(container.getAttribute('data-interval') || '2000', 10);

    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      const dots = indicators ? indicators.querySelectorAll('.dot') : [];
      if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.add('active');
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }, interval);
  });

  /* ==========================================================================
     5. عارض الصور بملء الشاشة (Lightbox Controls)
     ========================================================================== */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function closeLightboxModal() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightboxModal);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightboxModal();
      }
    });
  }

  /* ==========================================================================
     6. كانفاس الجزيئات الملكي: بتلات الورد المتطايرة والنجوم والقلوب ثلاثية الأبعاد
     ========================================================================== */
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const petalColors = [
    'rgba(255, 77, 109, ',
    'rgba(255, 117, 140, ',
    'rgba(230, 57, 70, ',
    'rgba(247, 37, 133, ',
    'rgba(255, 209, 102, '
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 12 + 6;
      this.speedY = Math.random() * 0.9 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.65 + 0.25;
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.03;
      this.flutter = Math.random() * Math.PI;
      
      const rand = Math.random();
      if (rand < 0.4) this.type = 'petal';
      else if (rand < 0.75) this.type = 'heart';
      else this.type = 'star';
    }

    update() {
      this.y += this.speedY * 0.6; // هبوط ناعم يشبه تساقط الورد
      this.flutter += 0.025;
      this.x += Math.sin(this.flutter) * 0.9 + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.y = -30;
        this.x = Math.random() * width;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.shadowColor = this.color + '0.7)';
      ctx.shadowBlur = 10;

      if (this.type === 'petal') {
        this.drawPetal(0, 0, this.size);
      } else if (this.type === 'heart') {
        this.drawHeart(0, 0, this.size * 0.85);
      } else {
        this.drawStar(0, 0, 4, this.size * 0.5, this.size * 0.2);
      }

      ctx.restore();
    }

    drawPetal(x, y, size) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + size / 2, y - size / 2, x + size, y, x, y + size * 1.3);
      ctx.bezierCurveTo(x - size, y, x - size / 2, y - size / 2, x, y);
      ctx.closePath();
      ctx.fill();
    }

    drawHeart(x, y, size) {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }
  }

  const particleCount = window.innerWidth < 768 ? 18 : 35;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    if (!document.hidden) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  let lastSpawn = 0;
  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn > 80) {
      lastSpawn = now;
      if (particles.length < 80) {
        const p = new Particle();
        p.x = e.clientX;
        p.y = e.clientY;
        p.size = Math.random() * 8 + 5;
        p.speedY = - (Math.random() * 1.5 + 0.5);
        particles.push(p);
        setTimeout(() => {
          const idx = particles.indexOf(p);
          if (idx > -1) particles.splice(idx, 1);
        }, 3200);
      }
    }
  });

  /* ==========================================================================
     7. بوابة قفل الهدية الملكية بالعداد الخارجي حتى (1 أكتوبر 2026)
     ========================================================================== */
  const introScreen = document.getElementById('intro-screen');
  const envelope = document.getElementById('envelope');
  const openEnvelopeBtn = document.getElementById('open-envelope-btn');
  const btnLockIcon = document.getElementById('btn-lock-icon');
  const btnLockText = document.getElementById('btn-lock-text');
  const gateLockIcon = document.getElementById('gate-lock-icon');
  const introHintText = document.getElementById('intro-hint-text');
  const lockNoticeToast = document.getElementById('lock-notice-toast');
  const waxSeal = document.getElementById('wax-seal');

  // وضع اختبار الـ 2 دقيقة بطلب يوسف
  const urlParams = new URLSearchParams(window.location.search);
  const nowMs = Date.now();
  let testEndTime = localStorage.getItem('youssef_2min_target');

  // إذا كانت القيمة غير موجودة، أو انتهت مدتها، أو تم طلب إعادة التعيين عبر الرابط:
  // نبدأ دورة اختبار جديدة مدتها دقيقتان كاملتان (120 ثانية)
  if (!testEndTime || urlParams.get('reset') || nowMs >= parseInt(testEndTime)) {
    testEndTime = nowMs + 120000; // 120 ثانية = دقيقتان بالضبط
    localStorage.setItem('youssef_2min_target', testEndTime);
  }

  const targetDate = new Date(parseInt(testEndTime));
  let isGateUnlocked = false; // مقفولة في البداية لتجربة الفتح التلقائي بعد دقيقتين
  let toastTimer = null;

  if (urlParams.get('unlock')) {
    isGateUnlocked = true;
  }

  function updateGateLockStatus() {
    const now = new Date();
    if (now >= targetDate || isGateUnlocked) {
      isGateUnlocked = true;
      if (openEnvelopeBtn) {
        openEnvelopeBtn.classList.remove('locked');
        if (btnLockIcon) btnLockIcon.className = 'fa-solid fa-heart fa-beat';
        if (btnLockText) btnLockText.textContent = 'انقر لفك ختم الحب واستلام هديتكِ يا ذكريات عمري ✨';
      }
      if (gateLockIcon) gateLockIcon.className = 'fa-solid fa-lock-open';
      if (introHintText) introHintText.textContent = 'انتهت الدقيقتان وانفتح الختم تلقائياً! انقر على الظرف الآن 🎉💕';
    } else {
      isGateUnlocked = false;
      if (openEnvelopeBtn) {
        openEnvelopeBtn.classList.add('locked');
        if (btnLockIcon) btnLockIcon.className = 'fa-solid fa-lock';
        const secLeft = Math.max(0, Math.ceil((targetDate.getTime() - now.getTime()) / 1000));
        const m = Math.floor(secLeft / 60);
        const s = secLeft % 60;
        if (btnLockText) btnLockText.textContent = `الهدية مقفلة للاختبار (متبقي: ${m} دقيقة و ${s < 10 ? '0' : ''}${s} ثانية)`;
      }
      if (gateLockIcon) gateLockIcon.className = 'fa-solid fa-lock';
      if (introHintText) introHintText.textContent = 'الهدية مقفلة للاختبار.. سوف تنفتح تلقائياً فور انتهاء الدقيقتين ✨';
    }
  }

  function showLockNoticeToast(customTitle, customDesc) {
    if (!lockNoticeToast) return;
    const titleEl = lockNoticeToast.querySelector('h4');
    const descEl = lockNoticeToast.querySelector('p');
    if (customTitle && titleEl) titleEl.textContent = customTitle;
    if (customDesc && descEl) descEl.textContent = customDesc;

    lockNoticeToast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      lockNoticeToast.classList.remove('show');
    }, 4500);
  }

  function triggerEnvelopeOpening() {
    if (envelope.classList.contains('open')) return;

    audio.playUnlockSound();
    envelope.classList.add('open');

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        zIndex: 100005,
        colors: ['#ff4d6d', '#ffd166', '#ff758c', '#ffffff', '#d4af37', '#f72585']
      });
    }

    setTimeout(() => {
      audio.startAmbientMusic();
    }, 400);

    setTimeout(() => {
      // إزالة عزل شاشة القفل وتفعيل السكرول الطبيعي لصفحة الاحتفال
      document.body.classList.remove('intro-active');
      introScreen.classList.add('opened');
      window.scrollTo(0, 0);
      fireworksBlast();
    }, 1800);
  }

  function handleEnvelopeInteraction() {
    const now = new Date();
    if (now < targetDate && !isGateUnlocked) {
      // الهدية ما زالت مغلقة
      if (envelope) {
        envelope.classList.add('shake');
        setTimeout(() => envelope.classList.remove('shake'), 500);
      }
      audio.playChime(392.00, 'sine', 0.5);
      showLockNoticeToast('صبراً يا حبيبة قلبي ذكريات 💕', 'هديتكِ ومفاجأتكِ الكبرى محفوظة ومقفلة بالحب، وستُفتح تلقائياً في أول ثانية من يوم 1 أكتوبر 2026 لتتويج عيد زواجنا الرابع!');
    } else {
      // حان الموعد أو تم فتح المعاينة
      triggerEnvelopeOpening();
    }
  }

  if (openEnvelopeBtn) openEnvelopeBtn.addEventListener('click', handleEnvelopeInteraction);
  if (envelope) envelope.addEventListener('click', handleEnvelopeInteraction);

  // إزالة زر المعاينة تماماً من الواجهة مع الحفاظ على النقر السري الثلاثي على الختم للمعاينة
  // الضغط 3 مرات سريعة على الشمع لفتح المعاينة
  let sealClickCount = 0;
  let lastSealClickTime = 0;
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      const currentTime = Date.now();
      if (currentTime - lastSealClickTime < 700) {
        sealClickCount++;
        if (sealClickCount >= 3) {
          e.stopPropagation();
          isGateUnlocked = true;
          updateGateLockStatus();
          showLockNoticeToast('معاينة يوسف الملكية 👑', 'تم فك القفل لمعاينة يوسف! يمكنك الآن النقر على زر فتح الهدية للاطلاع على كافة التفاصيل.');
          audio.playUnlockSound();
          sealClickCount = 0;
        }
      } else {
        sealClickCount = 1;
      }
      lastSealClickTime = currentTime;
    });
  }

  /* ==========================================================================
     8. منظومة الترفيه والرومانسية في بوابة القفل (حمام أبيض، رقصة، مطاردة، ألعاب)
     ========================================================================== */
  // أ) نظام أسراب الحمام الأبيض الطائر في السماء
  const dovesSkyLayer = document.getElementById('doves-sky-layer');

  function createDoveElement(startYVh, scale = 1, duration = 3.2, carriesHeart = true) {
    let layer = document.getElementById('doves-sky-layer');
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'doves-sky-layer';
      layer.className = 'doves-sky-layer';
      document.body.appendChild(layer);
    }

    const dove = document.createElement('div');
    dove.className = 'sky-dove';
    const endYVh = Math.max(12, startYVh - (Math.random() * 22 + 8));
    dove.style.setProperty('--fly-start-y', `${startYVh}vh`);
    dove.style.setProperty('--fly-end-y', `${endYVh}vh`);
    dove.style.setProperty('--fly-scale', `${scale}`);
    dove.style.animationDuration = `${duration}s`;
    dove.style.width = `${50 * scale}px`;
    dove.style.height = `${42 * scale}px`;

    dove.innerHTML = `
      <svg viewBox="0 0 60 50" fill="none">
        <path class="dove-wing" d="M22 24 C14 8, 4 2, 0 8 C6 18, 16 24, 22 26 Z" fill="#ffffff" />
        <path class="dove-body" d="M18 24 C16 30, 20 38, 26 38 C32 38, 38 32, 44 28 C36 24, 28 22, 18 24 Z" fill="#ffffff" />
        <path class="dove-tail" d="M18 26 L8 34 L14 36 Z" fill="#f0f0f0" />
        <circle cx="44" cy="24" r="5" fill="#ffffff" />
        <polygon points="48,22 56,25 48,27" fill="#f4a261" />
        <circle cx="45" cy="23" r="1.2" fill="#222" />
        ${carriesHeart ? '<path d="M48 30 Q45 26 42 28 Q39 30 42 34 L48 40 L54 34 Q57 30 54 28 Q51 26 48 30 Z" fill="#ff4d6d" />' : ''}
      </svg>
    `;

    layer.appendChild(dove);
    setTimeout(() => dove.remove(), (duration + 0.5) * 1000);
  }

  // إطلاق حمامتين ناعمتين عند أول تحميل
  setTimeout(() => {
    createDoveElement(35, 1.1, 3.2, true);
    setTimeout(() => createDoveElement(48, 0.95, 3.0, true), 700);
  }, 1000);

  function releaseFlockOfDoves() {
    audio.playChime(880, 'triangle', 0.8);
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        const startY = Math.random() * 35 + 25; // 25vh إلى 60vh (في منتصف الشاشة دائماً)
        const scale = Math.random() * 0.35 + 1.05;
        const duration = Math.random() * 0.8 + 2.8;
        createDoveElement(startY, scale, duration, true);
      }, i * 280);
    }
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.55 },
        zIndex: 1000005,
        colors: ['#ffffff', '#ffe082', '#ff758c', '#ffd166']
      });
    }
    showLockNoticeToast('أسراب الحمام الأبيض تحلق 🕊️✨', 'أطلقنا أسراب الحمام تعانق سماء الحب وتهديكِ أسمى معاني الوفاء يا ذكريات!');
  }

  // ب) شريط الألعاب والفعاليات الرومانسية التفاعلية لـ ذكريات
  const toyDovesBtn = document.getElementById('toy-doves-btn');
  const toyRosesBtn = document.getElementById('toy-roses-btn');
  const toyHeartbeatBtn = document.getElementById('toy-heartbeat-btn');
  const toyWhisperBtn = document.getElementById('toy-whisper-btn');
  const toyCandlesBtn = document.getElementById('toy-candles-btn');

  if (toyDovesBtn) toyDovesBtn.addEventListener('click', releaseFlockOfDoves);

  if (toyRosesBtn) {
    toyRosesBtn.addEventListener('click', () => {
      audio.playChime(784, 'sine', 0.8);
      heartExplosion();
      showLockNoticeToast('باقة ورد لعيون ذكريات 🌹', 'نثرنا لكِ أجمل بتلات الورد الأحمر والمخملي لتعطر أيام انتظار موعدنا المبارك!');
    });
  }

  // هـ) نافذة تجربة نبضات قلب يوسف الحية
  const heartbeatModal = document.getElementById('heartbeat-modal');
  const heartbeatCloseBtn = document.getElementById('heartbeat-close-btn');
  const heartbeatBackdrop = document.getElementById('heartbeat-backdrop');
  const heartbeatSoundToggle = document.getElementById('heartbeat-sound-toggle');
  let isHeartbeatAudioActive = true;

  function openHeartbeatModal() {
    if (!heartbeatModal) return;
    document.body.classList.add('modal-open');
    heartbeatModal.classList.add('active');
    isHeartbeatAudioActive = true;
    audio.startHeartbeatLoop();
    if (heartbeatSoundToggle) {
      heartbeatSoundToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i> الصوت الرومانسي للنبض شغال الآن';
    }
  }

  function closeHeartbeatModal() {
    if (!heartbeatModal) return;
    document.body.classList.remove('modal-open');
    heartbeatModal.classList.remove('active');
    audio.stopHeartbeatLoop();
  }

  if (toyHeartbeatBtn) toyHeartbeatBtn.addEventListener('click', openHeartbeatModal);
  if (heartbeatCloseBtn) heartbeatCloseBtn.addEventListener('click', closeHeartbeatModal);
  if (heartbeatBackdrop) heartbeatBackdrop.addEventListener('click', closeHeartbeatModal);

  if (heartbeatSoundToggle) {
    heartbeatSoundToggle.addEventListener('click', () => {
      if (isHeartbeatAudioActive) {
        audio.stopHeartbeatLoop();
        isHeartbeatAudioActive = false;
        heartbeatSoundToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> الصوت متوقف (انقري للتشغيل)';
      } else {
        audio.startHeartbeatLoop();
        isHeartbeatAudioActive = true;
        heartbeatSoundToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i> الصوت الرومانسي للنبض شغال الآن';
      }
    });
  }

  // و) همسات الغزل اليومية الخاصة لـ ذكريات
  const specialWhispers = [
    "كل نبضة في قلبي تقول: أنتِ النعمة التي لا تنتهي يا ذكريات عمري 💕",
    "لو فتّشوا قلبي لوجدوا في كل شريان خيطاً من نور عينيكِ يا رفيقة دربي 🌹",
    "أربع سنوات معكِ كانت بمثابة جنة الله على الأرض.. وما هو آتٍ أجمل وأعظم ✨",
    "أنتِ وطني حين أضيع، وأنتِ أماني حين يخاف العالم.. دمتِ لي نبضاً لا يتوقف ❤️",
    "اسمكِ محفور في وجداني، وملامحكِ تسكن روحي.. كل عام وأنتِ عشقي الأبدي 👑",
    "ضحكتكِ هي لحن أعيشه كل يوم، وبسمتكِ تمسح عن قلبي تعب الحياة كلها 💖"
  ];
  let specialWhisperIdx = 0;

  if (toyWhisperBtn) {
    toyWhisperBtn.addEventListener('click', () => {
      audio.playChime(880, 'triangle', 0.9);
      specialWhisperIdx = (specialWhisperIdx + 1) % specialWhispers.length;
      showLockNoticeToast('همسة حب من قلب يوسف 💌', specialWhispers[specialWhisperIdx]);

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 35,
          spread: 75,
          origin: { y: 0.7 },
          colors: ['#ff4d6d', '#ffd166', '#ff758c']
        });
      }
    });
  }

  // ز) إشعال شموع العشق في الشاشة الحالية
  let candleCount = 0;
  if (toyCandlesBtn) {
    toyCandlesBtn.addEventListener('click', () => {
      audio.playChime(659.25, 'sine', 0.6);

      if (candleCount >= 16) {
        showLockNoticeToast('شموع العشق تضيء سمائنا 🕯️', 'أضأتِ أركان قلبي كلها بنور حبكِ الصادق يا ذكريات!');
        return;
      }

      // بريق ذهبي فوري في وسط الشاشة ليلفت الانتباه للشموع
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 45,
          spread: 80,
          origin: { y: 0.5 },
          zIndex: 1000005,
          colors: ['#ffd166', '#ffb703', '#fb8500', '#fff3b0']
        });
      }

      for (let i = 0; i < 4; i++) {
        candleCount++;
        const candle = document.createElement('div');
        candle.className = 'floating-candle';
        // موضع ذكي داخل الشاشة المرئية مباشرة أمام المستخدم
        const posX = Math.random() * 70 + 15; // 15% إلى 85% من عرض الشاشة
        const posY = Math.random() * 45 + 25; // 25% إلى 70% من ارتفاع الشاشة
        candle.style.left = `${posX}%`;
        candle.style.top = `${posY}%`;
        candle.innerHTML = `
          <div class="candle-flame"></div>
          <div class="candle-wax"></div>
        `;
        document.body.appendChild(candle);

        // إبقاء الشموع تطفو بنعومة أمامها ثم تتلاشى بعد 12 ثانية بهدوء
        setTimeout(() => {
          candle.style.opacity = '0';
          setTimeout(() => {
            candle.remove();
            candleCount = Math.max(0, candleCount - 1);
          }, 1400);
        }, 12000);
      }

      showLockNoticeToast('تم إشعال شموع العشق 🕯️✨', 'أشعلنا لكِ شموع الأمل والحب لتضيء شاشتكِ وقلبكِ يا ذكريات!');
    });
  }

  /* ==========================================================================
     9. العداد التفاعلي الدقيق لذكرى عيد الزواج (1 أكتوبر 2026)
     ========================================================================== */
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownTitle = document.getElementById('countdown-title');

  function updateCountdown() {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();

    if (diff > 0 && !isGateUnlocked) {
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

      if (countdownTitle) {
        countdownTitle.textContent = `متبقي على فتح الهدية الملكية تلقائياً: ${minutes} دقيقة و ${seconds} ثانية ⏳`;
      }

      updateGateLockStatus();
    } else {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';

      if (countdownTitle) {
        countdownTitle.textContent = 'انتهت الدقيقتان وانفتح القفل تلقائياً! انقر لفتح الهدية الآن 🎉💕';
      }

      isGateUnlocked = true;
      updateGateLockStatus();
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ==========================================================================
     9. بطاقات أسباب العشق (Flip Cards On Click & Tap)
     ========================================================================== */
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      audio.playChime(659.25, 'sine', 0.45);
    });
  });

  /* ==========================================================================
     10. نافذة الرسالة الملكية السرية من يوسف لذكريات (Secret Letter Modal)
     ========================================================================== */
  const lockTrigger = document.getElementById('lock-trigger');
  const unlockLetterBtn = document.getElementById('unlock-letter-btn');
  const letterModal = document.getElementById('letter-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSparkleBtn = document.getElementById('modal-sparkle-btn');

  function openSecretLetter() {
    audio.playUnlockSound();
    document.body.classList.add('modal-open');
    letterModal.classList.add('active');
    fireworksBlast();
  }

  function closeSecretLetter() {
    document.body.classList.remove('modal-open');
    letterModal.classList.remove('active');
  }

  if (lockTrigger) lockTrigger.addEventListener('click', openSecretLetter);
  if (unlockLetterBtn) unlockLetterBtn.addEventListener('click', openSecretLetter);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSecretLetter);

  if (letterModal) {
    letterModal.addEventListener('click', (e) => {
      if (e.target === letterModal) {
        closeSecretLetter();
      }
    });
  }

  function spawnLetterPetalsAndHearts() {
    const layer = document.getElementById('letter-petals-layer');
    if (!layer) return;
    const symbols = ['🌹', '🌸', '💖', '✨', '💕', '❤️', '🌺', '🌷', '💓'];
    for (let i = 0; i < 28; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'letter-falling-item';
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = `${Math.random() * 88 + 6}%`;
        el.style.top = `-25px`;
        el.style.fontSize = `${Math.random() * 1.3 + 1.2}rem`;
        el.style.animationDuration = `${Math.random() * 2 + 2.4}s`;
        layer.appendChild(el);
        setTimeout(() => el.remove(), 4500);
      }, i * 90);
    }
  }

  if (modalSparkleBtn) {
    modalSparkleBtn.addEventListener('click', () => {
      audio.playChime(987.77, 'triangle', 0.9);
      // 1. تساقط بتلات الورد والقلوب داخل ورقة الرسالة نفسها أمام النص
      spawnLetterPetalsAndHearts();
      // 2. كنفيتي علوي لا يختفي وراء نافذة الرسالة
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.55 },
          zIndex: 100005,
          colors: ['#ff0844', '#ffb199', '#ff4d6d', '#ffd166', '#ffffff']
        });
      }
    });
  }

  /* ==========================================================================
     11. انفجار الألعاب النارية والقلوب (Fireworks & Heart Fountain)
     ========================================================================== */
  function fireworksBlast() {
    if (typeof confetti !== 'function') return;

    const end = Date.now() + 1400;
    const colors = ['#ff4d6d', '#ffd166', '#d4af37', '#ff758c', '#ffffff', '#e056fd'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        zIndex: 100005,
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        zIndex: 100005,
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  function heartExplosion() {
    if (typeof confetti !== 'function') return;

    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.5 },
      zIndex: 100005,
      colors: ['#ff0844', '#ffb199', '#ff4d6d', '#ffd166', '#ffffff']
    });

    for (let i = 0; i < 30; i++) {
      const p = new Particle();
      p.x = width / 2 + (Math.random() - 0.5) * 220;
      p.y = height / 2 + (Math.random() - 0.5) * 220;
      p.size = Math.random() * 18 + 10;
      p.speedY = - (Math.random() * 2.5 + 1.2);
      particles.push(p);
    }
  }

  /* ==========================================================================
     12. تأثير إمالة البطاقات ثلاثي الأبعاد (3D Tilt Effect)
     ========================================================================== */
  const tiltItems = document.querySelectorAll('.tilt-item');
  tiltItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });

  /* ==========================================================================
     13. معالج زر Escape لإغلاق النوافذ المنبثقة بأمان
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeHeartbeatModal === 'function') closeHeartbeatModal();
      if (typeof closeSecretLetter === 'function') closeSecretLetter();
      if (typeof closeLightboxModal === 'function') closeLightboxModal();
    }
  });

});
