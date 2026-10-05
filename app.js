/* SINGULARITY — Agent Command Deck
   Pure front-end simulation. No API keys. No backend. */

(() => {
  "use strict";

  const prefersReduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Data ----------
  const AGENTS = [
    { id: "project", name: "Project_bot", role: "Ops lead · dispatch", initials: "PB", fg: "#22d3ee", bg: "rgba(34,211,238,0.16)", status: "ready" },
    { id: "tech", name: "Tech helper", role: "Diagnose · SSL · deploy", initials: "TH", fg: "#34d399", bg: "rgba(52,211,153,0.16)", status: "ready" },
    { id: "creation", name: "Creation enhancer", role: "Copy · design · polish", initials: "CE", fg: "#ff6b3d", bg: "rgba(255,107,61,0.16)", status: "idle" },
    { id: "echo", name: "Echo", role: "Site intelligence", initials: "EC", fg: "#8b5cf6", bg: "rgba(139,92,246,0.16)", status: "standby" },
    { id: "beacon", name: "Beacon", role: "Showcase microsite", initials: "BE", fg: "#22d3ee", bg: "rgba(34,211,238,0.12)", status: "ready" },
    { id: "cascade", name: "Cascade", role: "Campaign kit", initials: "CA", fg: "#fbbf24", bg: "rgba(251,191,36,0.14)", status: "ready" },
    { id: "singularity", name: "Singularity", role: "This command deck", initials: "SI", fg: "#f472b6", bg: "rgba(244,114,182,0.14)", status: "ready" },
  ];

  const SEED_ARTIFACTS = [
    {
      kind: "Deploy",
      title: "Beacon — live showcase",
      url: "https://adamrobotgood-tech.github.io/abco-showcase-beacon/",
      note: "Project 02 · Grok Bot microsite on GitHub Pages",
      badge: "Live",
    },
    {
      kind: "Deploy",
      title: "Cascade — campaign kit",
      url: "https://adamrobotgood-tech.github.io/abco-showcase-cascade/",
      note: "Project 03 · multi-channel kit hub",
      badge: "Live",
    },
    {
      kind: "Repo",
      title: "abco-showcase-beacon",
      url: "https://github.com/adamrobotgood-tech/abco-showcase-beacon",
      note: "Source for Beacon · static HTML/CSS/JS",
      badge: "GitHub",
    },
    {
      kind: "Repo",
      title: "abco-showcase-cascade",
      url: "https://github.com/adamrobotgood-tech/abco-showcase-cascade",
      note: "Source for Cascade campaign assets",
      badge: "GitHub",
    },
    {
      kind: "Link",
      title: "xAI",
      url: "https://x.ai",
      note: "Powering Grok Bot · the model behind the fleet",
      badge: "Partner",
    },
    {
      kind: "Finding",
      title: "abcomedia.net",
      url: "https://abcomedia.net",
      note: "HTTPS certificate / redirect issue observed — needs remediation",
      badge: "HTTPS broken",
      warn: true,
    },
  ];

  const MISSIONS = [
    {
      id: "diagnose",
      num: "01",
      title: "Diagnose site",
      desc: "Probe abcomedia.net · TLS · headers · brand read",
      accent: "#fbbf24",
      agents: ["tech", "echo"],
      keywords: ["diagnose", "ssl", "tls", "abcomedia", "site", "probe"],
      script: [
        { type: "mission", text: "Mission armed: Diagnose site — abcomedia.net" },
        { type: "sys", text: "Handing off to Tech helper + Echo" },
        { type: "agent", agent: "Tech helper", text: "Opening probe sequence for abcomedia.net…" },
        { type: "tool", agent: "Tech helper", name: "WebFetch", args: "url: https://abcomedia.net\nmode: headers + cert chain", delay: 400 },
        { type: "agent", agent: "Tech helper", text: "TLS handshake incomplete — certificate mismatch / redirect loop suspected." },
        { type: "tool", agent: "Echo", name: "BrandRead", args: "target: abcomedia.net\nlens: voice · CTA · opportunity map", delay: 350 },
        { type: "agent", agent: "Echo", text: "Brand lock: “ABCO // Edit. Anything.” — cinematic, product-first. Opportunity: ship a secure static mirror + SSL fix brief." },
        { type: "warn", text: "Finding logged: HTTPS broken on abcomedia.net" },
        { type: "ok", text: "Artifact pinned — SSL finding + brand notes ready for Adam." },
        { type: "artifact", artifact: {
          kind: "Finding",
          title: "SSL brief — abcomedia.net",
          url: "https://abcomedia.net",
          note: "Cert / redirect failure · recommend Let’s Encrypt or Cloudflare Full Strict",
          badge: "HTTPS broken",
          warn: true,
        }},
      ],
    },
    {
      id: "beacon",
      num: "02",
      title: "Ship Beacon",
      desc: "Build + publish the Grok Bot showcase microsite",
      accent: "#22d3ee",
      agents: ["beacon", "creation", "project"],
      keywords: ["beacon", "ship", "showcase", "microsite", "deploy"],
      script: [
        { type: "mission", text: "Mission armed: Ship Beacon — Project 02/04" },
        { type: "agent", agent: "Project_bot", text: "Scaffolding Beacon under ABCO SYS aesthetic…" },
        { type: "tool", agent: "Creation enhancer", name: "WriteFiles", args: "index.html · styles.css · app.js\ntheme: deep space / cyan / ember", delay: 450 },
        { type: "agent", agent: "Beacon", text: "Hero locked. Capability constellation online. Ladder section linked." },
        { type: "tool", agent: "Beacon", name: "StaticDeploy", args: "target: GitHub Pages\nrepo: adamrobotgood-tech/abco-showcase-beacon", delay: 500 },
        { type: "ok", text: "Beacon is live." },
        { type: "agent", agent: "Beacon", text: "Handing Adam the URL — no backend, pure static, Vercel-ready." },
        { type: "artifact", artifact: {
          kind: "Deploy",
          title: "Beacon — just shipped",
          url: "https://adamrobotgood-tech.github.io/abco-showcase-beacon/",
          note: "Live on GitHub Pages · Project 02 of the ladder",
          badge: "Live",
        }},
        { type: "artifact", artifact: {
          kind: "Repo",
          title: "Beacon source",
          url: "https://github.com/adamrobotgood-tech/abco-showcase-beacon",
          note: "Clone · fork · remix",
          badge: "GitHub",
        }},
      ],
    },
    {
      id: "cascade",
      num: "03",
      title: "Cascade kit",
      desc: "Multi-channel campaign: Drive · slides · social · email",
      accent: "#fbbf24",
      agents: ["cascade", "creation"],
      keywords: ["cascade", "campaign", "kit", "email", "slides", "social"],
      script: [
        { type: "mission", text: "Mission armed: Cascade kit — Project 03/04" },
        { type: "agent", agent: "Cascade", text: "Spinning multi-channel pack for ABCO × Grok Bot…" },
        { type: "tool", agent: "Creation enhancer", name: "ComposeKit", args: "surfaces: Drive brief · pitch deck · social posts · Gmail copy", delay: 400 },
        { type: "agent", agent: "Cascade", text: "One story, every surface Adam already uses." },
        { type: "tool", agent: "Cascade", name: "StaticDeploy", args: "target: GitHub Pages\nrepo: adamrobotgood-tech/abco-showcase-cascade", delay: 450 },
        { type: "ok", text: "Cascade kit published." },
        { type: "artifact", artifact: {
          kind: "Deploy",
          title: "Cascade — campaign hub",
          url: "https://adamrobotgood-tech.github.io/abco-showcase-cascade/",
          note: "Brief · deck · social · email in one ship",
          badge: "Live",
        }},
        { type: "artifact", artifact: {
          kind: "Repo",
          title: "Cascade source",
          url: "https://github.com/adamrobotgood-tech/abco-showcase-cascade",
          note: "Campaign assets + static hub",
          badge: "GitHub",
        }},
      ],
    },
    {
      id: "deck",
      num: "04",
      title: "Deploy Deck",
      desc: "Bring Singularity online — this command deck",
      accent: "#f472b6",
      agents: ["singularity", "project", "tech"],
      keywords: ["deck", "singularity", "deploy", "command", "ops"],
      script: [
        { type: "mission", text: "Mission armed: Deploy Deck — SINGULARITY online" },
        { type: "agent", agent: "Singularity", text: "Booting Agent Command Deck · roster sync…" },
        { type: "tool", agent: "Project_bot", name: "FleetStatus", args: "agents: 7\nchannels: roster · log · artifacts", delay: 350 },
        { type: "agent", agent: "Tech helper", text: "Static bundle verified. GitHub Pages + Vercel configs present." },
        { type: "tool", agent: "Singularity", name: "SimulateStream", args: "mode: SSE-like timers\nsound: optional (default off)", delay: 400 },
        { type: "ok", text: "Singularity is the limit-pusher. Fleet choreography demo ready." },
        { type: "agent", agent: "Singularity", text: "Tell Adam: open ⌘K, dispatch anything. Watch the deck ship." },
        { type: "artifact", artifact: {
          kind: "System",
          title: "Singularity — this deck",
          url: "#",
          note: "You’re looking at it. Pure front-end. Pages-ready.",
          badge: "Online",
          local: true,
        }},
        { type: "artifact", artifact: {
          kind: "Link",
          title: "xAI · Grok Bot",
          url: "https://x.ai",
          note: "The stack behind every ABCO agent in this roster",
          badge: "Partner",
        }},
      ],
    },
  ];

  // ---------- State ----------
  const state = {
    missionStatus: Object.fromEntries(MISSIONS.map((m) => [m.id, "queued"])),
    agentStatus: Object.fromEntries(AGENTS.map((a) => [a.id, a.status])),
    running: false,
    cancel: false,
    sound: false,
    paletteIndex: 0,
    filteredMissions: MISSIONS.slice(),
    artifactUrls: new Set(SEED_ARTIFACTS.map((a) => a.url)),
  };

  // ---------- DOM ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const el = {
    roster: $("#roster"),
    transcript: $("#transcript"),
    artifacts: $("#artifacts"),
    missionGrid: $("#mission-grid"),
    clock: $("#clock"),
    artifactCount: $("#artifact-count"),
    paletteOverlay: $("#palette-overlay"),
    paletteInput: $("#palette-input"),
    paletteList: $("#palette-list"),
    helpOverlay: $("#help-overlay"),
    btnPalette: $("#btn-palette"),
    btnHelp: $("#btn-help"),
    btnHelpClose: $("#btn-help-close"),
    btnSound: $("#btn-sound"),
    btnClear: $("#btn-clear-log"),
    bootBanner: $("#boot-banner"),
  };

  // ---------- Audio (optional, off by default) ----------
  let audioCtx = null;
  function beep(freq = 880, dur = 0.04, type = "sine", gain = 0.03) {
    if (!state.sound || prefersReduced) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.value = gain;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      o.stop(audioCtx.currentTime + dur + 0.01);
    } catch (_) { /* silent fail */ }
  }

  // ---------- Clock ----------
  function tickClock() {
    const now = new Date();
    el.clock.textContent = now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  function stamp() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  // ---------- Render: Roster ----------
  function renderRoster() {
    el.roster.innerHTML = AGENTS.map((a) => {
      const st = state.agentStatus[a.id] || a.status;
      return `
        <li class="agent${st === "running" ? " is-busy is-active" : ""}" data-agent="${a.id}">
          <div class="agent-avatar" style="--agent-fg:${a.fg};--agent-bg:${a.bg};background:${a.bg};color:${a.fg}">${a.initials}</div>
          <div class="agent-body">
            <div class="agent-name">${esc(a.name)}</div>
            <div class="agent-role">${esc(a.role)}</div>
            <span class="agent-chip" data-status="${st}">${st}</span>
          </div>
        </li>`;
    }).join("");
  }

  function setAgentStatus(ids, status) {
    const set = new Set(Array.isArray(ids) ? ids : [ids]);
    AGENTS.forEach((a) => {
      if (set.has(a.id)) state.agentStatus[a.id] = status;
    });
    renderRoster();
  }

  function resetAgentsIdle() {
    AGENTS.forEach((a) => {
      state.agentStatus[a.id] = a.status;
    });
    renderRoster();
  }

  // ---------- Render: Missions ----------
  function renderMissions() {
    el.missionGrid.innerHTML = MISSIONS.map((m) => {
      const st = state.missionStatus[m.id];
      return `
        <button type="button" class="mission-card${st === "running" ? " is-running" : ""}${st === "done" ? " is-done" : ""}"
          data-mission="${m.id}" style="--accent:${m.accent}" role="listitem">
          <div class="mission-num">MISSION ${m.num}</div>
          <div class="mission-title">${esc(m.title)}</div>
          <div class="mission-desc">${esc(m.desc)}</div>
          <span class="mission-status" data-status="${st}">
            <span class="status-dot" aria-hidden="true"></span>${st}
          </span>
        </button>`;
    }).join("");
  }

  // ---------- Render: Artifacts ----------
  function renderSeedArtifacts() {
    el.artifacts.innerHTML = "";
    SEED_ARTIFACTS.forEach((a) => appendArtifact(a, false));
    updateArtifactCount();
  }

  function appendArtifact(a, animate = true) {
    if (a.url && a.url !== "#" && state.artifactUrls.has(a.url) && animate) {
      // allow duplicate mission artifacts with same URL only once from seed;
      // still show mission-spawned duplicates if title differs — skip exact url re-add from stream if already present as seed
    }
    if (a.url && a.url !== "#" && animate) {
      // avoid flooding identical URLs from re-runs
      const existing = el.artifacts.querySelector(`[data-url="${CSS.escape(a.url)}"][data-title="${CSS.escape(a.title)}"]`);
      if (existing) {
        existing.classList.add("is-flash");
        return;
      }
    }

    const tag = a.local ? "div" : "a";
    const node = document.createElement(tag);
    node.className = `artifact${a.warn ? " is-warn" : ""}`;
    if (!a.local) {
      node.href = a.url;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    node.dataset.url = a.url || "";
    node.dataset.title = a.title || "";
    node.innerHTML = `
      <div class="artifact-kind">${esc(a.kind)}</div>
      <div class="artifact-title">${esc(a.title)}</div>
      <div class="artifact-url">${esc(a.url === "#" ? "localhost · this deck" : a.url)}</div>
      ${a.note ? `<div class="artifact-note">${esc(a.note)}</div>` : ""}
      ${a.badge ? `<span class="artifact-badge${a.warn ? " warn" : ""}">${esc(a.badge)}</span>` : ""}
    `;
    if (animate) {
      el.artifacts.prepend(node);
      beep(1200, 0.05, "triangle", 0.025);
    } else {
      el.artifacts.appendChild(node);
    }
    if (a.url) state.artifactUrls.add(a.url);
    updateArtifactCount();
    // scroll artifacts into view lightly
    if (animate) node.scrollIntoView({ block: "nearest", behavior: prefersReduced ? "auto" : "smooth" });
  }

  function updateArtifactCount() {
    const n = el.artifacts.children.length;
    el.artifactCount.textContent = `${n} link${n === 1 ? "" : "s"}`;
  }

  // ---------- Transcript ----------
  function clearLog() {
    el.transcript.innerHTML = "";
    if (el.bootBanner) {
      // re-add a slim boot line
      const ban = document.createElement("div");
      ban.className = "boot-banner";
      ban.innerHTML = `<p class="mono"><span class="cyan">SYS</span> Log cleared · deck still online</p>`;
      el.transcript.appendChild(ban);
    }
  }

  function addEntry({ tag, tagClass, html, tool }) {
    const row = document.createElement("div");
    row.className = "log-entry";
    row.innerHTML = `
      <div class="log-time">${stamp()}</div>
      <div class="log-body">
        <span class="log-tag ${tagClass}">${esc(tag)}</span>
        <span class="log-text">${html}</span>
        ${tool ? `<div class="tool-block"><div class="tool-name">⚙ ${esc(tool.name)}</div>${esc(tool.args)}</div>` : ""}
      </div>`;
    el.transcript.appendChild(row);
    el.transcript.scrollTop = el.transcript.scrollHeight;
    return row;
  }

  async function typeText(targetEl, text, cps = 42) {
    if (prefersReduced) {
      targetEl.textContent = text;
      return;
    }
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.setAttribute("aria-hidden", "true");
    targetEl.textContent = "";
    targetEl.appendChild(cursor);
    const delay = Math.max(8, 1000 / cps);
    for (let i = 0; i < text.length; i++) {
      if (state.cancel) break;
      cursor.insertAdjacentText("beforebegin", text[i]);
      if (i % 3 === 0) beep(660 + (i % 5) * 20, 0.012, "square", 0.012);
      await sleep(delay);
      el.transcript.scrollTop = el.transcript.scrollHeight;
    }
    cursor.remove();
  }

  function sleep(ms) {
    return new Promise((resolve) => {
      if (prefersReduced) return resolve();
      const t = setTimeout(resolve, ms);
      // allow cancel to short-circuit via polling is heavy; keep simple
      void t;
    });
  }

  // ---------- Mission runner ----------
  async function runMission(missionId) {
    const mission = MISSIONS.find((m) => m.id === missionId);
    if (!mission) return;
    if (state.running) {
      state.cancel = true;
      await sleep(80);
    }
    state.cancel = false;
    state.running = true;

    // reset other running agents, mark this mission
    Object.keys(state.missionStatus).forEach((id) => {
      if (state.missionStatus[id] === "running") state.missionStatus[id] = "queued";
    });
    state.missionStatus[missionId] = "running";
    renderMissions();
    setAgentStatus(mission.agents, "running");
    closePalette();
    beep(520, 0.08, "sine", 0.04);

    // remove boot banner on first real mission
    const boot = el.transcript.querySelector(".boot-banner");
    if (boot) boot.remove();

    addEntry({
      tag: "MISSION",
      tagClass: "mission",
      html: `<strong>${esc(mission.title)}</strong> · sequence ${mission.num}/04`,
    });

    for (const step of mission.script) {
      if (state.cancel) break;
      await sleep(prefersReduced ? 0 : (step.delay || 280 + Math.random() * 220));
      if (state.cancel) break;

      if (step.type === "mission") {
        addEntry({ tag: "MISSION", tagClass: "mission", html: esc(step.text) });
      } else if (step.type === "sys") {
        addEntry({ tag: "SYS", tagClass: "sys", html: esc(step.text) });
      } else if (step.type === "ok") {
        addEntry({ tag: "OK", tagClass: "ok", html: esc(step.text) });
        beep(980, 0.06, "sine", 0.035);
      } else if (step.type === "warn") {
        addEntry({ tag: "WARN", tagClass: "warn", html: esc(step.text) });
        beep(280, 0.1, "sawtooth", 0.03);
      } else if (step.type === "agent") {
        const row = addEntry({
          tag: step.agent,
          tagClass: "agent",
          html: `<span class="typing-target"></span>`,
        });
        const target = row.querySelector(".typing-target");
        await typeText(target, step.text, 48);
      } else if (step.type === "tool") {
        addEntry({
          tag: "TOOL",
          tagClass: "tool",
          html: `<strong>${esc(step.agent)}</strong> invoked`,
          tool: { name: step.name, args: step.args },
        });
        beep(440, 0.04, "triangle", 0.02);
      } else if (step.type === "artifact") {
        appendArtifact(step.artifact, true);
        addEntry({
          tag: "ART",
          tagClass: "ok",
          html: `Pinned <strong>${esc(step.artifact.title)}</strong>${
            step.artifact.url && step.artifact.url !== "#"
              ? ` → <a href="${escAttr(step.artifact.url)}" target="_blank" rel="noopener noreferrer">${esc(step.artifact.url)}</a>`
              : ""
          }`,
        });
      }
    }

    if (!state.cancel) {
      state.missionStatus[missionId] = "done";
      addEntry({
        tag: "SYS",
        tagClass: "sys",
        html: `Mission <strong>${esc(mission.title)}</strong> complete · status → done`,
      });
      beep(660, 0.05, "sine", 0.03);
      await sleep(40);
      beep(880, 0.07, "sine", 0.035);
    } else {
      if (state.missionStatus[missionId] === "running") {
        state.missionStatus[missionId] = "queued";
      }
      addEntry({ tag: "SYS", tagClass: "sys", html: "Stream cancelled." });
    }

    resetAgentsIdle();
    // keep done missions marked done
    renderMissions();
    state.running = false;
    state.cancel = false;
  }

  // ---------- Palette ----------
  function openPalette() {
    el.paletteOverlay.hidden = false;
    el.paletteInput.value = "";
    state.filteredMissions = MISSIONS.slice();
    state.paletteIndex = 0;
    renderPaletteList();
    requestAnimationFrame(() => el.paletteInput.focus());
  }

  function closePalette() {
    el.paletteOverlay.hidden = true;
  }

  function openHelp() {
    el.helpOverlay.hidden = false;
  }

  function closeHelp() {
    el.helpOverlay.hidden = true;
  }

  function renderPaletteList() {
    const items = state.filteredMissions;
    if (!items.length) {
      el.paletteList.innerHTML = `<li style="padding:12px;color:var(--dim);font-size:0.85rem">No missions match.</li>`;
      return;
    }
    el.paletteList.innerHTML = items
      .map(
        (m, i) => `
      <li>
        <button type="button" class="palette-item${i === state.paletteIndex ? " is-active" : ""}" data-mission="${m.id}" role="option" aria-selected="${i === state.paletteIndex}">
          <span class="pi-num">${m.num}</span>
          <span class="pi-body">
            <div class="pi-title">${esc(m.title)}</div>
            <div class="pi-desc">${esc(m.desc)}</div>
          </span>
          <span class="pi-key">${m.num.replace(/^0/, "")}</span>
        </button>
      </li>`
      )
      .join("");
  }

  function filterPalette(q) {
    const query = q.trim().toLowerCase();
    if (!query) {
      state.filteredMissions = MISSIONS.slice();
    } else {
      state.filteredMissions = MISSIONS.filter(
        (m) =>
          m.title.toLowerCase().includes(query) ||
          m.desc.toLowerCase().includes(query) ||
          m.keywords.some((k) => k.includes(query)) ||
          m.num.includes(query)
      );
    }
    state.paletteIndex = 0;
    renderPaletteList();
  }

  function runActivePaletteItem() {
    const m = state.filteredMissions[state.paletteIndex];
    if (m) runMission(m.id);
  }

  // ---------- Utils ----------
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escAttr(s) {
    return esc(s).replace(/'/g, "&#39;");
  }

  // ---------- Events ----------
  function bind() {
    el.btnPalette.addEventListener("click", openPalette);
    el.btnHelp.addEventListener("click", () => {
      if (el.helpOverlay.hidden) openHelp();
      else closeHelp();
    });
    el.btnHelpClose.addEventListener("click", closeHelp);
    el.btnClear.addEventListener("click", clearLog);

    el.btnSound.addEventListener("click", () => {
      state.sound = !state.sound;
      el.btnSound.setAttribute("aria-pressed", String(state.sound));
      if (state.sound) beep(720, 0.06, "sine", 0.04);
    });

    el.missionGrid.addEventListener("click", (e) => {
      const card = e.target.closest("[data-mission]");
      if (card) runMission(card.dataset.mission);
    });

    el.paletteList.addEventListener("click", (e) => {
      const item = e.target.closest("[data-mission]");
      if (item) runMission(item.dataset.mission);
    });

    el.paletteInput.addEventListener("input", (e) => filterPalette(e.target.value));

    el.paletteInput.addEventListener("keydown", (e) => {
      const max = state.filteredMissions.length - 1;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        state.paletteIndex = Math.min(max, state.paletteIndex + 1);
        renderPaletteList();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        state.paletteIndex = Math.max(0, state.paletteIndex - 1);
        renderPaletteList();
      } else if (e.key === "Enter") {
        e.preventDefault();
        runActivePaletteItem();
      }
    });

    el.paletteOverlay.addEventListener("click", (e) => {
      if (e.target === el.paletteOverlay) closePalette();
    });
    el.helpOverlay.addEventListener("click", (e) => {
      if (e.target === el.helpOverlay) closeHelp();
    });

    document.addEventListener("keydown", (e) => {
      const meta = e.metaKey || e.ctrlKey;
      const tag = (e.target && e.target.tagName) || "";
      const typing =
        tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable;

      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (el.paletteOverlay.hidden) openPalette();
        else closePalette();
        return;
      }

      if (e.key === "Escape") {
        if (!el.paletteOverlay.hidden) {
          closePalette();
          return;
        }
        if (!el.helpOverlay.hidden) {
          closeHelp();
          return;
        }
        if (state.running) {
          state.cancel = true;
        }
        return;
      }

      if (typing) return;

      if (e.key === "?") {
        e.preventDefault();
        if (el.helpOverlay.hidden) openHelp();
        else closeHelp();
        return;
      }

      if (e.key.toLowerCase() === "s" && !meta) {
        e.preventDefault();
        el.btnSound.click();
        return;
      }

      if (e.key.toLowerCase() === "c" && !meta) {
        e.preventDefault();
        clearLog();
        return;
      }

      if (["1", "2", "3", "4"].includes(e.key) && !meta) {
        const m = MISSIONS[Number(e.key) - 1];
        if (m) runMission(m.id);
      }
    });
  }

  // ---------- Boot ----------
  function init() {
    renderRoster();
    renderMissions();
    renderSeedArtifacts();
    bind();
    tickClock();
    setInterval(tickClock, 1000);

    // subtle idle pulse: mark Singularity ready flash once
    setTimeout(() => {
      if (state.running) return;
      addEntry({
        tag: "SYS",
        tagClass: "sys",
        html: "Fleet heartbeat · 7 agents · 4 missions armed · press <kbd>?</kbd>",
      });
    }, prefersReduced ? 100 : 900);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
