/* ==========================================================================
   ICONS — small inline SVG set (no external icon dependency)
   ========================================================================== */
const ICONS = {
  code: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 5L3 12l5 7M16 5l5 7-5 7"/></svg>',
  server: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><circle cx="7" cy="7" r="0.6" fill="currentColor"/><circle cx="7" cy="17" r="0.6" fill="currentColor"/></svg>',
  chart: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V9M12 19V4M20 19v-7"/></svg>',
  atom: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/></svg>',
  tool: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>',
  brain: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 18.9 3 3 0 0 0 12 21a3 3 0 0 0 5-2.1 3 3 0 0 0 2.5-4.3A3 3 0 0 0 18 8V7a3 3 0 0 0-3-3 3 3 0 0 0-3 1 3 3 0 0 0-3-1z"/><path d="M12 5v16"/></svg>',
  circuit: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><path d="M7 6h5M12 10v-4M14 12h3M12 14v4h5"/></svg>',
  data: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="12" height="12" rx="1.5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  spark: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>',
};

/* ==========================================================================
   RENDER: stats, skills, projects, interests, timeline, fellowships, certs
   ========================================================================== */
function renderStats() {
  const grid = document.getElementById("statsGrid");
  grid.innerHTML = STATS.map(
    (s) => `
    <div class="stat-card glass reveal">
      <div class="stat-card__value" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-card__label">${s.label}</div>
    </div>`
  ).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (cat) => `
    <div class="skill-card glass reveal">
      <div class="skill-card__head">
        <div class="skill-card__icon">${ICONS[cat.icon] || ""}</div>
        <div class="skill-card__title">${cat.category}</div>
      </div>
      ${cat.items
        .map(
          (it) => `
        <div class="skill-bar">
          <div class="skill-bar__top"><span>${it.name}</span><span>${it.level}%</span></div>
          <div class="skill-bar__track"><div class="skill-bar__fill" data-level="${it.level}"></div></div>
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <div class="project-card glass reveal ${p.featured ? "project-card--featured" : ""}">
      <span class="project-card__index">${String(i + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}</span>
      <h3>${p.title}</h3>
      <p class="project-card__subtitle">${p.subtitle}</p>
      <p class="project-card__desc">${p.description}</p>
      <div class="project-card__tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`
  ).join("");
}

function renderInterests() {
  const grid = document.getElementById("interestsGrid");
  grid.innerHTML = RESEARCH_INTERESTS.map(
    (r) => `
    <div class="interest-card glass reveal">
      <div class="interest-card__icon">${ICONS[r.icon] || ""}</div>
      <div class="interest-card__name">${r.name}</div>
    </div>`
  ).join("");
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  wrap.innerHTML = TIMELINE.map(
    (t) => `
    <div class="timeline-item reveal">
      <span class="timeline-item__date">${t.date}</span>
      <h3>${t.title}</h3>
      <p class="timeline-item__org">${t.org}</p>
      <p class="timeline-item__desc">${t.description}</p>
    </div>`
  ).join("");
}

function renderFellowships() {
  const wrap = document.getElementById("fellowshipsGrid");
  wrap.innerHTML = FELLOWSHIPS.map(
    (f, i) => `
    <div class="fellowship-card glass reveal">
      <div class="fellowship-card__logos">
        ${f.logos.map((l) => `<img src="${l}" alt="Partner logo" loading="lazy">`).join('<span class="fellowship-card__x">×</span>')}
      </div>
      <div class="fellowship-card__body">
        <span class="tag tag--accent">${f.date}</span>
        <h3>${f.title}</h3>
        <p class="fellowship-card__org">${f.org}</p>
        <p>${f.description}</p>
      </div>
      <div class="fellowship-card__cert" data-img="${f.certImage}" data-file="${f.certFile || f.certImage}" data-cert-open>
        <img src="${f.certImage}" alt="${f.title} certificate thumbnail" loading="lazy">
        <button class="btn btn--outline btn--sm" type="button">View Certificate</button>
      </div>
    </div>`
  ).join("");
}

function renderCerts() {
  const wrap = document.getElementById("certsGrid");
  wrap.innerHTML = CERTIFICATIONS.map(
    (c) => `
    <div class="cert-card glass reveal">
      <img class="cert-card__logo" src="${c.logo}" alt="${c.title} logo" loading="lazy">
      <div class="cert-card__body">
        <span class="tag tag--accent">${c.date}</span>
        <h3>${c.title}</h3>
        <p class="cert-card__org">${c.org}</p>
        <p>${c.description}</p>
      </div>
      <div class="cert-card__actions">
        <button class="btn btn--outline btn--sm" type="button" data-cert-open data-img="${c.certImage}" data-file="${c.certImage}">View Certificate</button>
      </div>
    </div>`
  ).join("");
}

/* ==========================================================================
   REVEAL ON SCROLL
   ========================================================================== */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ==========================================================================
   ANIMATED STAT COUNTERS
   ========================================================================== */
function initCounters() {
  const cards = document.querySelectorAll(".stat-card__value");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  cards.forEach((el) => io.observe(el));
}

/* ==========================================================================
   ANIMATED SKILL BARS
   ========================================================================== */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar__fill");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((el) => io.observe(el));
}

/* ==========================================================================
   TYPEWRITER (hero role line)
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById("typedRole");
  const roles = [
    "Computer Science Graduate",
    "Data Scientist",
    "Backend Developer",
    "Quantum Computing Researcher",
  ];
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  function step() {
    const current = roles[roleIndex];
    if (!deleting) {
      if (charIndex >= current.length) {
        deleting = true;
        setTimeout(step, 1900);
        return;
      }
      charIndex++;
    } else {
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        el.textContent = "";
        setTimeout(step, 400);
        return;
      }
      charIndex--;
    }
    el.textContent = current.slice(0, charIndex);
    setTimeout(step, deleting ? 28 : 55);
  }
  setTimeout(step, 2200);
}

/* ==========================================================================
   NAV: scroll state + mobile burger
   ========================================================================== */
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    links.style.display = open ? "flex" : "";
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      if (window.innerWidth <= 960) links.style.display = "";
    })
  );
}

/* ==========================================================================
   ABSTRACT EXPAND (research section)
   ========================================================================== */
function initAbstractToggle() {
  const btn = document.getElementById("abstractToggle");
  const panel = document.getElementById("abstractPanel");
  btn.addEventListener("click", () => {
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.firstChild.textContent = isOpen
      ? "Read research questions & methodology "
      : "Hide research questions & methodology ";
  });
}

/* ==========================================================================
   LIGHTBOX MODAL (poster + certificates)
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const dl = document.getElementById("lightboxDownload");
  const closeBtn = document.getElementById("lightboxClose");
  const backdrop = document.getElementById("lightboxBackdrop");

  function open(src, file, alt) {
    img.src = src;
    img.alt = alt || "";
    dl.href = file || src;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Poster
  const posterOpen = document.getElementById("posterOpen");
  const posterAction = () => open("assets/poster-preview.jpg", "assets/poster-preview.jpg", "Research poster");
  posterOpen.addEventListener("click", posterAction);
  posterOpen.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); posterAction(); }
  });

  // Delegated: certificate triggers (rendered dynamically)
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-open]");
    if (!trigger) return;
    open(trigger.dataset.img, trigger.dataset.file, "Certificate");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const trigger = e.target.closest("[data-cert-open]");
    if (!trigger) return;
    e.preventDefault();
    open(trigger.dataset.img, trigger.dataset.file, "Certificate");
  });
}

/* ==========================================================================
   QUANTUM-TRACE CANVAS BACKGROUND (signature element)
   Nodes ("qubits") drift slowly and connect with lines when close;
   periodic pulses travel along active connections, echoing a SWAP-test /
   entanglement readout — tying the visual back to the subject matter.
   ========================================================================== */
function initCanvas() {
  const canvas = document.getElementById("qc-canvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, dpr;
  let nodes = [];
  const LINK_DIST = 170;
  let pulses = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = Math.max(window.innerHeight, document.documentElement.scrollHeight > window.innerHeight ? window.innerHeight : window.innerHeight);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(24, Math.min(60, Math.floor((w * h) / 26000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h * 0.9,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 1,
    }));
  }

  function colorFor(alpha) {
    return `rgba(120, 170, 255, ${alpha})`;
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    // update
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h * 0.9 + 20; else if (n.y > h * 0.9 + 20) n.y = -20;
    });

    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.16;
          ctx.strokeStyle = colorFor(alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          if (!reduceMotion && Math.random() < 0.0009) {
            pulses.push({ a, b, t: 0 });
          }
        }
      }
    }

    // pulses (measurement readouts travelling along a link)
    pulses = pulses.filter((p) => p.t <= 1);
    pulses.forEach((p) => {
      p.t += 0.014;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(122, 231, 239, 0.9)";
      ctx.shadowColor = "rgba(122, 231, 239, 0.9)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // nodes
    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 195, 255, 0.55)";
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(step);
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderStats();
  renderSkills();
  renderProjects();
  renderInterests();
  renderTimeline();
  renderFellowships();
  renderCerts();

  initReveal();
  initCounters();
  initSkillBars();
  initTypewriter();
  initNav();
  initAbstractToggle();
  initLightbox();
  initCanvas();
});