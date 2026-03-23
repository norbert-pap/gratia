(() => {
  const deck = document.querySelector('.deck');
  const slides = document.querySelectorAll('.slide');
  const counter = document.querySelector('.counter');
  const total = slides.length;
  const mainSlides = 19;
  let current = 0;
  let narrationVisible = false;

  /* ---- narration data (keyed by data-slide number) ---- */
  const narration = {
    1: `Gratia is the new way companies get skilled analytical work done.\n\nWe're an AI-powered talent marketplace. We vet, coach, and match analysts to enterprise work. Consulting-quality results in forty-eight hours, not the seven weeks it takes to hire.\n\nSix million in revenue last year. One-point-two million total invested. Five-x capital efficiency. A multi-year strategic partnership with Apollo. Their COO wrote us a reference letter. And we're on track to three-x this year.\n\nLet me show you why this problem is worth solving, what we built, and why this is the moment to scale it.`,

    2: `Let me start with the demand side.\n\nThe work is spiky and accelerating. Board decks, reforecasts, pricing models, due diligence. Demand comes in waves you can't staff permanently for. And every way companies try to handle it is broken.\n\nHiring full-time? Ninety-one thousand dollars per turnover cycle. Seven weeks to hire, months to ramp, eighteen-month average tenure. Then the knowledge walks out and you start over.\n\nConsulting? Fifty to a hundred fifty thousand per engagement. A junior does the work, a senior sells confidence. Forty percent scope creep. Six to twelve weeks.\n\nFreelance platforms? Forty-two hundred dollars average rework cost. Twelve million unvetted profiles on Upwork alone. No scoping, no coaching, no accountability.\n\nAnd going full AI? AI makes drafts free. But quality ceilings aren't set by tools. They're set by what you can articulate and evaluate. That's why you still need people. Every option is broken. Companies need skilled people, fast.`,

    3: `Now flip to the supply side, and this is where it gets interesting.\n\nMillions of people could do this work. They fall into two groups.\n\nFirst: people who already have the skills but no access. Strong quantitative training. Financial modeling, data analysis, research. They graduate every year worldwide. What they lack isn't ability. It's reps on real enterprise work, and a credible system that gives them a path in.\n\nSecond, and this is the unlock, millions more are one coaching cycle away. For the first time, AI can sit alongside an analyst during a live project, coaching methodology, flagging errors, building skills on the actual work. People who are eighty percent there can punch above their level from day one. We've already proven this. Analysts with zero SaaS experience delivered board-ready models in their first engagement on our platform.\n\nBut today's platforms don't solve either problem. On Upwork, great talent competes alongside twelve million unvetted profiles. No credentialing, no coaching, no quality signal. Consulting firms still train internally, that's why they charge two hundred an hour. Freelance platforms never had a training pipeline. The corporate pipeline collapsed. Nothing replaced it.\n\nThe talent exists, and AI can make even more of it ready. The system to find them, vet them, and develop them doesn't exist yet. That's what we built.`,

    4: `Why is this the moment?\n\nThree forces converged in the last two years.\n\nFirst, work is going fractional. Cross-border knowledge work tripled since 2020. Companies want on-demand talent, not headcount. The shift is structural, not cyclical.\n\nSecond, AI unlocks talent but erodes the pathways. Draft-grade work is free. The value shifted to judgment and ownership. AI can coach people to that level in real time, but consulting firms hoard training and freelance platforms skip it entirely. The pipeline that used to develop analysts collapsed.\n\nThird, we flip this. We use AI to build the supply, not replace it. Vet, coach, match, and credential analysts through real projects. The window to own this infrastructure closes in two to three years.\n\nNobody else is building this. Consulting firms hoard training. Freelance platforms skip it. AI companies build tools, not people. We're alone in this lane, for now.`,

    5: `Before I show you the solution, let me share our AI thesis. Because this is the lens through which we built everything.\n\nAI doesn't raise quality ceilings. People do. AI raises throughput floors.\n\nHere's what that means. First, AI commoditizes execution. First drafts, data pulls, formatting. The tool handles all of it. Throughput is no longer the bottleneck. Draft-grade work is essentially free.\n\nBut judgment sets the ceiling. The quality of any deliverable is determined by what you can articulate and evaluate, not what the tool can produce. The deliverable isn't a spreadsheet. It's a decision someone has to own and defend.\n\nThis isn't unique to analytics. Look at design. Adobe's twenty-twenty-five data: fifty-nine percent of designers now use AI tools. But only one in three teams are actually proud of what AI produces. Everything a junior designer spent their first year doing, AI does in sixty seconds. But AI can't read a room, translate user research into political capital, or make a CFO care about accessibility. Nielsen Norman Group puts it bluntly: if you're just assembling components from a design system, you're already replaceable by AI. Same dynamic in analytical work. AI can draft a model. It can't defend it to a board.\n\nSo we build the judgment. Gratia uses AI to coach people from assembling spreadsheets to owning decisions, live, on real projects. We don't replace the human. We make them board-ready.\n\nThis is why we invest in people, not just models. It's why our approach compounds in a way that pure AI tools can't. And it's why this thesis generalizes to new verticals. The ceiling-versus-floor dynamic applies everywhere knowledge work happens.`,

    6: `So what did we build?\n\nWe find the talent companies can't. We make them ready. We match them in forty-eight hours.\n\nOn the demand side, a client describes what they need and we match them with a vetted analyst in forty-eight hours. Not a resume. Not a proposal. Someone who can own the project, drive it, and deliver a decision-grade result.\n\nOn the supply side, our AI coaching system, GraceAI, works alongside analysts during execution. It flags methodology gaps, suggests improvements, and coaches in real time. It's not a course. It's coaching on the actual project, adjusted to their level. People who are eighty percent there can punch above their level from day one.\n\nWhat you're buying isn't a person or a tool. It's both. Rigorous vetting, AI-assisted coaching, automated scoping, and full transparency. Consulting quality at marketplace speed, at a price that makes sense.\n\nAnalysts build real careers on real projects. Clients get consistency and transparency. And the platform gets smarter with every engagement.`,

    7: `Here's the pattern at scale.\n\nSix million in revenue last year. On track to three-x this year. We've invested one-point-two million total. That's over five dollars in revenue for every dollar raised.\n\nTwo hundred seventy projects delivered. A hundred and fifty analysts vetted and active. Eighty-five percent client repeat rate. And an NPS of eighty-eight-point-two, which for a marketplace is exceptional.\n\nLook at the quarterly trajectory: consistent acceleration. No plateau.`,

    8: `Let me make this concrete with a real engagement.\n\nA Series A SaaS startup needed a board-ready unit economics model before their next funding round. No time to hire.\n\nWe matched them with an economics grad from São Paulo. Timezone-aligned, English-fluent, strong quantitative skills, but zero SaaS experience. No portfolio. No warm intro. No way this person gets this job through traditional channels.\n\nGraceAI flagged three methodology gaps during execution, fixed before the client ever saw them. Hours were tracked in real time. Full transparency, structured updates, no missed check-ins. And the analyst was coached on SaaS unit economics during the actual work.\n\nTwo weeks later, board-ready model delivered. On time, on budget. The client secured their funding and extended to an ongoing engagement. The analyst? First SaaS project ever. She went on to do three more and now specializes in fintech.\n\nThe client paid sixty to sixty-five percent less than consulting. The analyst earned three to five times her local rate. And Gratia kept thirty to forty percent. Everyone won.`,

    9: `And then there's Apollo.\n\nApollo chose us as their analytical staffing partner. Multi-year contract. Multi-million-dollar value. This is not a pilot. This is a strategic partnership with one of the largest PE firms in the world.\n\nThey chose us on quality. They retained us on reliability. Their COO wrote us a reference letter, and they're referenceable.\n\nA referenceable enterprise deal at this stage is rare. It validates supply quality at enterprise scale. And the switching costs compound with every project. Analyst preferences, workflow integration, institutional knowledge. All of that deepens over time.`,

    10: `A client describes the work in plain English. The AI turns it into a structured project spec: scope, skill requirements, timeline, deliverables. What used to be a black box of back-and-forth now takes minutes.\n\nThen the client chooses: fixed price or hourly. Both options, fully transparent, with the scoping already done. Nobody else even offers this, because nobody else automated scoping.`,

    11: `Then we match. Our task-skill ontology ranks analysts by fit for this specific project. Clients see talent profiles: capabilities, track record, availability. Not resumes. The right match, in minutes.`,

    12: `During the project, GraceAI is live. Quality checks, skill-building prompts, issue flagging, all happening in real time. The analyst is coached while they work, not reviewed after they're done.`,

    13: `And when the project ends, client feedback and delivery data feed back into everything: matching, coaching, credentialing. This is how the flywheel compounds. Every project teaches the system.`,

    14: `This is the slide I care about most.\n\nAny single layer is buildable. A well-funded team could build scoping, matching, or a delivery copilot. But the moat isn't any one layer. It's operating all five as one loop, with two thousand projects of outcome data flowing through it.\n\nFive layers in a cycle: scoping, credentialing, matching, delivery plus coaching, and the learning loop that feeds data back into all four.\n\nIf a well-funded consultancy partners with an AI company tomorrow, they can build individual pieces. But they start with zero outcome data, zero credentialed analysts, and zero enterprise trust. They'd have to operate the whole system simultaneously, and they start at zero on every dimension.\n\nThe moat isn't the code. It's the compounding data advantage from running the full loop.`,

    15: `Here's how the money works.\n\nYou describe the work. We scope it automatically, in minutes, not weeks. No black box. Then you choose: fixed price or hourly. Both fully transparent, both with the scope already defined.\n\nOur most popular tier is fifty-five to seventy dollars an hour. Compare that to a consulting firm billing two hundred plus, where scoping alone takes weeks and you still don't know who's doing the work.\n\nWhat you're actually buying is people plus AI, as a package. A skilled person who can own the work, backed by AI that ensures consistency, quality, and speed. That's why we can deliver consulting quality at marketplace pricing.\n\nWe take thirty to forty percent. The analyst earns a competitive professional wage with access to projects they'd never reach on their own. Everyone's incentives are aligned.\n\nWe're at sixty percent gross margin today. As AI automates more of the scoping and quality layer, we project seventy percent plus at scale.`,

    16: `We proved the marketplace works. Here's why it becomes infrastructure.\n\nRight now we do six things: financial modeling, data analytics, market research, due diligence, strategy, and more. A hundred fifty analysts. Enterprise playbook proven.\n\nThe marketplace traction proves the model. The AI coaching layer, GraceAI, is what makes it defensible and scalable. Every category we enter follows the same playbook: AI develops the supply, the platform matches it, the data compounds.\n\nWe could spin up a new vertical in weeks, not years. The coaching infrastructure transfers. If the data proves the system generalizes, this becomes multi-category workforce infrastructure.\n\nWe earn that right by proving it in analytics first. We're not pitching the endgame. We're pitching the proof.`,

    17: `We've done zero to one to scale before.\n\nJackie built and scaled this marketplace from nothing. Demand, supply, and delivery. She's the operational engine.\n\nI was the first product hire at Kasa Living, which scaled past a billion. I shipped v1, scaled the org, ran a subsidiary.\n\nSoma built our AI coaching engine. Production RAG, eval, observability. And Robert designed the system at Kasa that scaled to five hundred employees.`,

    18: `We're raising six-point-five million to own this category.\n\nSix million in revenue last year. Five-x capital efficiency. One-point-two million total invested. The model works. Now we scale while the window is open.\n\nThirty-five percent goes to platform and AI. Full automation of matching, scoping, QA, and GraceAI version two. Thirty-five percent to supply scaling, from a hundred fifty analysts to three thousand, plus launching the first adjacent vertical. Thirty percent to enterprise sales, the Apollo playbook times twenty.\n\nIn eighteen months: ten to twelve million in revenue run rate. Ops touch under fifteen percent. Eight to ten enterprise partners. First adjacent vertical scoped.\n\nIn eighteen months, Gratia is the platform companies call when they need the work done right, by Friday.\n\nAre you in?`
  };

  /* ---- narration overlay elements ---- */
  const overlay = document.getElementById('narration-overlay');
  const overlayText = document.getElementById('narration-text');
  const overlayToggle = document.getElementById('narration-toggle');

  /* ---- helpers ---- */
  function goTo(index) {
    if (index < 0 || index >= total) return;
    current = index;
    slides[current].scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }

  function updateUI() {
    // Counter logic: Main slides 1–18, then Appendix
    if (current < mainSlides) {
      counter.textContent = `${current + 1} / ${mainSlides}`;
    } else {
      counter.textContent = `A${current - mainSlides + 1}`;
    }

    // Toggle dark-aware nav styling
    const isDark = slides[current].classList.contains('slide--dark');
    document.body.classList.toggle('dark-active', isDark);

    // Entrance animation
    slides.forEach((s, i) => s.classList.toggle('active', i === current));

    // Update narration
    updateNarration();
  }

  function updateNarration() {
    const slideNum = slides[current].getAttribute('data-slide');
    const text = narration[slideNum];
    if (text && narrationVisible) {
      overlayText.textContent = text;
      overlay.classList.add('narration--visible');
    } else {
      overlay.classList.remove('narration--visible');
    }
  }

  function toggleNarration() {
    narrationVisible = !narrationVisible;
    overlayToggle.classList.toggle('narration-toggle--active', narrationVisible);
    updateNarration();
  }

  /* ---- IntersectionObserver for scroll-based updates ---- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          current = [...slides].indexOf(entry.target);
          updateUI();
        }
      });
    },
    { root: deck, threshold: 0.6 }
  );

  slides.forEach((s) => observer.observe(s));

  /* ---- keyboard ---- */
  document.addEventListener('keydown', (e) => {
    /* Ignore keyboard shortcuts when user is typing in an input field */
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goTo(current + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      e.preventDefault();
      goTo(current - 1);
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      toggleNarration();
    }
  });

  /* ---- toggle button click ---- */
  if (overlayToggle) {
    overlayToggle.addEventListener('click', toggleNarration);
  }

  /* ---- Export to PDF ---- */
  const exportBtn = document.getElementById('export-btn');
  const exportOverlay = document.getElementById('export-overlay');
  const exportStatus = document.getElementById('export-status');
  const exportFill = document.getElementById('export-progress-fill');

  if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
      if (exportBtn.classList.contains('exporting')) return;
      exportBtn.classList.add('exporting');
      exportOverlay.classList.add('export-overlay--visible');

      try {
        const { jsPDF } = window.jspdf;
        /* Landscape A4-ish: 16:9 ratio */
        const slideW = 1280;
        const slideH = 720;
        const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [slideW, slideH], compress: true });

        /* Hide UI chrome during capture */
        const chrome = document.querySelectorAll('.counter, .narration-toggle, .export-btn, .narration-overlay, .export-overlay');
        chrome.forEach(el => el.style.visibility = 'hidden');
        exportOverlay.style.visibility = 'visible';

        const allSlides = document.querySelectorAll('.slide');

        for (let i = 0; i < allSlides.length; i++) {
          const pct = Math.round(((i + 1) / allSlides.length) * 100);
          exportStatus.textContent = `Rendering slide ${i + 1} of ${allSlides.length}...`;
          exportFill.style.width = pct + '%';

          /* Scroll slide into view for rendering */
          allSlides[i].scrollIntoView({ behavior: 'auto', inline: 'start' });
          /* Small delay to let paint settle */
          await new Promise(r => setTimeout(r, 150));

          const canvas = await html2canvas(allSlides[i], {
            scale: 2,
            useCORS: true,
            backgroundColor: null,
            width: allSlides[i].offsetWidth,
            height: allSlides[i].offsetHeight,
            windowWidth: allSlides[i].offsetWidth,
            windowHeight: allSlides[i].offsetHeight,
            logging: false,
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.92);
          const imgW = slideW;
          const imgH = (canvas.height / canvas.width) * slideW;

          if (i > 0) pdf.addPage([slideW, slideH], 'landscape');
          pdf.addImage(imgData, 'JPEG', 0, 0, imgW, Math.min(imgH, slideH));
        }

        /* Restore UI */
        chrome.forEach(el => el.style.visibility = '');

        exportStatus.textContent = 'Saving PDF...';
        pdf.save('Gratia-Investor-Deck-2026.pdf');

        exportStatus.textContent = 'Done!';
        await new Promise(r => setTimeout(r, 800));
      } catch (err) {
        console.error('PDF export error:', err);
        exportStatus.textContent = 'Export failed. Try again.';
        await new Promise(r => setTimeout(r, 2000));
      }

      exportOverlay.classList.remove('export-overlay--visible');
      exportBtn.classList.remove('exporting');
      /* Return to current slide */
      slides[current].scrollIntoView({ behavior: 'auto', inline: 'start' });
    });
  }

  /* ---- init ---- */
  updateUI();
})();
