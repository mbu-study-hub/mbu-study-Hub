/* =============================================================
   MBU STUDY HUB — script.js
   Complete SPA with hash-based routing, search, dark mode.
   ============================================================= */
const SUPABASE_URL = "https://qfhrfvkdaxaxgcjackab.supabase.co";
const SUPABASE_BUCKET = "pdfs";
const SUPABASE_KEY = "sb_publishable_3elf4PXm5xWa3HaXYw6jtw_Hrv4Mrxs";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* ---------------------------------------------------------------
   ADMIN AUTHENTICATION
--------------------------------------------------------------- */

var currentUser = null;

async function checkAdminLogin() {
  var result = await supabaseClient.auth.getSession();

  currentUser = result.data.session
    ? result.data.session.user
    : null;

  updateAdminUI();
}

function updateAdminUI() {

  var uploadButton = document.getElementById("admin-upload-button");

  if (uploadButton) {
    uploadButton.style.display = currentUser ? "block" : "none";
  }

  document.querySelectorAll(".delete-pdf-btn").forEach(function(button) {
    button.style.display = currentUser ? "inline-block" : "none";
  });
}

"use strict";

/* ---------------------------------------------------------------
   SECTION 1 — ACADEMIC DATA
   ---------------------------------------------------------------
   SEMESTER NUMBERING:
     1st Year → Semester 1, Semester 2
     2nd Year → Semester 3, Semester 4
     3rd Year → Semester 5, Semester 6
     4th Year → Semester 7, Semester 8

   TO ADD A SUBJECT: find branch > year > semester > subjects[]
   and push:
   {
     name: "Subject Name",
     code: "SUBJ101",
     materials: { notes: null, lab: null, papers: null, syllabus: null }
   }
   Replace null with a PDF path string when the file is available.
--------------------------------------------------------------- */
const studyData = {

  /* ============================================================
     COMPUTER SCIENCE GROUP
  ============================================================ */
  "CSE": {
    fullName: "Computer Science & Engineering",
    icon: "💻", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "CSE (AI & ML)": {
    fullName: "CSE - Artificial Intelligence & Machine Learning",
    icon: "🤖", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "CSE (AI & DS)": {
    fullName: "CSE - Artificial Intelligence & Data Science",
    icon: "🧠", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "CSE (Data Science)": {
    fullName: "CSE - Data Science",
    icon: "📊", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "CSE (DevOps)": {
    fullName: "CSE - DevOps",
    icon: "🔧", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "IT": {
    fullName: "Information Technology",
    icon: "🌐", group: "cs",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  /* ============================================================
     ELECTRONICS GROUP
  ============================================================ */
  "ECE": {
    fullName: "Electronics & Communication Engineering",
    icon: "📡", group: "electronics",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [
          { name: "Engineering Chemistry",                       code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Engineering Physics",                         code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Fundamentals of Electrical Engineering",      code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Logic Building Using C",                      code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Multivariable Calculus and Differential Equations", code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } }
        ]},
        "Semester 2": { subjects: [
          { name: "Transformation Techniques and Linear Algebra", code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Sensors and Measuring Instruments",            code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Semiconductor Devices and Circuits",           code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Professional Ethics and Human Values",         code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "English for Professionals",                    code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "Design Thinking",                             code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } },
          { name: "English for Proficiency (STEP)",              code: "", materials: { notes: null, lab: null, papers: null, syllabus: null } }
        ]}
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "EIE": {
    fullName: "Electronics & Instrumentation Engineering",
    icon: "🔬", group: "electronics",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "ECM": {
    fullName: "Electronics & Computer Engineering",
    icon: "🖥️", group: "electronics",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  /* ============================================================
     OTHER ENGINEERING GROUP
  ============================================================ */
  "EEE": {
    fullName: "Electrical & Electronics Engineering",
    icon: "⚡", group: "other",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "Civil": {
    fullName: "Civil Engineering",
    icon: "🏗️", group: "other",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  },

  "Mechanical": {
    fullName: "Mechanical Engineering",
    icon: "⚙️", group: "other",
    years: {
      "1st Year": {
        "Semester 1": { subjects: [] },
        "Semester 2": { subjects: [] }
      },
      "2nd Year": {
        "Semester 3": { subjects: [] },
        "Semester 4": { subjects: [] }
      },
      "3rd Year": {
        "Semester 5": { subjects: [] },
        "Semester 6": { subjects: [] }
      },
      "4th Year": {
        "Semester 7": { subjects: [] },
        "Semester 8": { subjects: [] }
      }
    }
  }

}; /* end studyData */

/* ---------------------------------------------------------------
   SECTION 2 — MATERIAL TYPE DEFINITIONS
--------------------------------------------------------------- */
const materialTypes = [
  { key: "notes",    label: "Notes",           icon: "📚" },
  { key: "lab",      label: "Lab Manual",      icon: "🧪" },
  { key: "papers",   label: "Previous Papers", icon: "📝" },
  { key: "syllabus", label: "Syllabus",        icon: "📋" }
];

/* ---------------------------------------------------------------
   SECTION 3 — NAVIGATION STATE
--------------------------------------------------------------- */
const state = {
  currentBranch:   null,
  currentYear:     null,
  currentSemester: null
};

/* ---------------------------------------------------------------
   SECTION 4 — DOM REFERENCES
--------------------------------------------------------------- */
const DOM = {
  pages: {
    home:     document.getElementById("page-home"),
    branches: document.getElementById("page-branches"),
    branch:   document.getElementById("page-branch"),
    semester: document.getElementById("page-semester"),
    subjects: document.getElementById("page-subjects"),
    about:    document.getElementById("page-about")
  },
  navLinks:           document.querySelectorAll(".nav-link"),
  hamburgerBtn:       document.getElementById("hamburger-btn"),
  navLinksList:       document.getElementById("nav-links"),
  darkModeBtn:        document.getElementById("dark-mode-btn"),
  searchToggleBtn:    document.getElementById("search-toggle-btn"),
  searchBarWrapper:   document.getElementById("search-bar-wrapper"),
  globalSearchInput:  document.getElementById("global-search-input"),
  searchClearBtn:     document.getElementById("search-clear-btn"),
  searchResultsDrop:  document.getElementById("search-results-dropdown"),
  heroSearchInput:    document.getElementById("hero-search-input"),
  heroSearchResults:  document.getElementById("hero-search-results"),
  toast:              document.getElementById("toast"),
  branchGridCS:           document.getElementById("branch-grid-cs"),
  branchGridElectronics:  document.getElementById("branch-grid-electronics"),
  branchGridOther:        document.getElementById("branch-grid-other"),
  bPageCS:          document.getElementById("branches-page-grid-cs"),
  bPageElec:        document.getElementById("branches-page-grid-electronics"),
  bPageOther:       document.getElementById("branches-page-grid-other"),
  backFromBranch:       document.getElementById("back-from-branch"),
  branchPageIcon:       document.getElementById("branch-page-icon"),
  branchPageTitle:      document.getElementById("branch-page-title"),
  branchPageSubtitle:   document.getElementById("branch-page-subtitle"),
  yearGrid:             document.getElementById("year-grid"),
  backFromSemester:     document.getElementById("back-from-semester"),
  semPageTitle:         document.getElementById("sem-page-title"),
  semPageSubtitle:      document.getElementById("sem-page-subtitle"),
  semesterGrid:         document.getElementById("semester-grid"),
  backFromSubjects:     document.getElementById("back-from-subjects"),
  subjPageTitle:        document.getElementById("subj-page-title"),
  subjPageSubtitle:     document.getElementById("subj-page-subtitle"),
  subjectBreadcrumb:    document.getElementById("subject-breadcrumb"),
  subjectsContainer:    document.getElementById("subjects-container"),
  footerNavLinks:       document.querySelectorAll(".footer-nav a[data-nav]")
};

/* ---------------------------------------------------------------
   SECTION 5 — ROUTING
   Hash format: #home | #branches | #about
                #branch/BRANCHKEY/YEAR/SEMESTER
--------------------------------------------------------------- */
const hashPageMap = { "": "home", "home": "home", "branches": "branches", "about": "about" };

function showPage(pageKey) {
  Object.entries(DOM.pages).forEach(([key, el]) => {
    el.classList.toggle("hidden", key !== pageKey);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateNavActive(pageKey);
  closeNavMenu();
}

function updateNavActive(pageKey) {
  const branchPages = ["branch","semester","subjects"];
  DOM.navLinks.forEach(link => {
    const nav = link.dataset.nav;
    link.classList.toggle("active",
      nav === pageKey || (branchPages.includes(pageKey) && nav === "branches")
    );
  });
}

function navigate(hash) { window.location.hash = hash; }

function handleRoute() {
  const hash  = window.location.hash.replace("#","").toLowerCase();
  const parts = hash.split("/");
     if (parts[0] === "admin-upload") {
    openUploadPage();
    return;
  }

  if (parts[0] === "branch" && parts[1]) {
    /* Decode branch key — try encoded, dash-separated, and raw forms */
    const branchKey = Object.keys(studyData).find(k =>
      encodeURIComponent(k).toLowerCase() === parts[1] ||
      k.toLowerCase().replace(/[\s()&]+/g,"-").replace(/-+/g,"-") === parts[1] ||
      k.toLowerCase() === decodeURIComponent(parts[1]).toLowerCase()
    );
    if (!branchKey) { showPage("home"); return; }
    state.currentBranch = branchKey;

    if (parts[2]) {
      const yearRaw = decodeURIComponent(parts[2]).replace(/-/g," ");
      const yearKey = Object.keys(studyData[branchKey].years).find(
        y => y.toLowerCase() === yearRaw.toLowerCase()
      );
      if (!yearKey) { renderBranchPage(branchKey); return; }
      state.currentYear = yearKey;

      if (parts[3]) {
        const semRaw = decodeURIComponent(parts[3]).replace(/-/g," ");
        const semKey = Object.keys(studyData[branchKey].years[yearKey]).find(
          s => s.toLowerCase() === semRaw.toLowerCase()
        );
        if (!semKey) { renderSemesterPage(branchKey, yearKey); return; }
        state.currentSemester = semKey;
        renderSubjectsPage(branchKey, yearKey, semKey);
        return;
      }
      renderSemesterPage(branchKey, yearKey);
      return;
    }
    renderBranchPage(branchKey);
    return;
  }

  const pageKey = hashPageMap[parts[0]] || "home";
  showPage(pageKey);
}

window.addEventListener("hashchange", handleRoute);

/* ---------------------------------------------------------------
   SECTION 6 — BRANCH CARD RENDERING
--------------------------------------------------------------- */
function createBranchCard(branchKey) {
  const branch = studyData[branchKey];
  const card   = document.createElement("div");
  card.className = "branch-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Explore " + branch.fullName);
  card.innerHTML =
    '<div class="branch-card-icon">' + branch.icon + '</div>' +
    '<div class="branch-abbr">' + branchKey + '</div>' +
    '<div class="branch-full-name">' + branch.fullName + '</div>' +
    '<button class="branch-explore-btn" tabindex="-1">Explore &rarr;</button>';

  function go() { navigate("#branch/" + encodeURIComponent(branchKey)); }
  card.addEventListener("click", go);
  card.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") go(); });
  return card;
}

function populateBranchGrid(gridEl, group) {
  if (!gridEl) return;
  gridEl.innerHTML = "";
  Object.keys(studyData).forEach(function(key) {
    if (studyData[key].group === group) gridEl.appendChild(createBranchCard(key));
  });
}

function renderBranchGrids() {
  populateBranchGrid(DOM.branchGridCS,          "cs");
  populateBranchGrid(DOM.branchGridElectronics, "electronics");
  populateBranchGrid(DOM.branchGridOther,       "other");
  populateBranchGrid(DOM.bPageCS,               "cs");
  populateBranchGrid(DOM.bPageElec,             "electronics");
  populateBranchGrid(DOM.bPageOther,            "other");
}

/* ---------------------------------------------------------------
   SECTION 7 — BRANCH PAGE (Year selection)
--------------------------------------------------------------- */
const yearMeta = {
  "1st Year": { icon: "🌱", sub: "Foundation Year" },
  "2nd Year": { icon: "📖", sub: "Core Studies"    },
  "3rd Year": { icon: "🔭", sub: "Advanced Topics" },
  "4th Year": { icon: "🎓", sub: "Final Year"      }
};

function renderBranchPage(branchKey) {
  var branch = studyData[branchKey];
  if (!branch) return;
  state.currentBranch = branchKey;

  DOM.branchPageIcon.textContent     = branch.icon;
  DOM.branchPageTitle.textContent    = branchKey;
  DOM.branchPageSubtitle.textContent = branch.fullName;
  DOM.yearGrid.innerHTML = "";

  Object.keys(branch.years).forEach(function(yearKey) {
    var meta = yearMeta[yearKey] || { icon: "📅", sub: "" };
    var card = document.createElement("div");
    card.className = "year-card";
    card.setAttribute("tabindex","0");
    card.setAttribute("role","button");
    card.setAttribute("aria-label", yearKey);
    card.innerHTML =
      '<div class="year-card-icon">' + meta.icon + '</div>' +
      '<div class="year-card-label">' + yearKey + '</div>' +
      '<div class="year-card-sub">' + meta.sub + '</div>';

    var encB = encodeURIComponent(branchKey);
    var encY = yearKey.replace(/\s+/g,"-");
    function go() { navigate("#branch/" + encB + "/" + encY); }
    card.addEventListener("click", go);
    card.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" ")go(); });
    DOM.yearGrid.appendChild(card);
  });

  showPage("branch");
}

/* ---------------------------------------------------------------
   SECTION 8 — SEMESTER PAGE
--------------------------------------------------------------- */
function renderSemesterPage(branchKey, yearKey) {
  var branch = studyData[branchKey];
  if (!branch) return;
  state.currentBranch = branchKey;
  state.currentYear   = yearKey;

  DOM.semPageTitle.textContent    = yearKey;
  DOM.semPageSubtitle.textContent = branchKey + " \u00b7 " + branch.fullName;
  DOM.semesterGrid.innerHTML = "";

  /* Semester icons keyed by semester number */
  var semIcons = {
    "Semester 1": "🌅", "Semester 2": "🌇",
    "Semester 3": "🌅", "Semester 4": "🌇",
    "Semester 5": "🌅", "Semester 6": "🌇",
    "Semester 7": "🌅", "Semester 8": "🌇"
  };

  Object.keys(branch.years[yearKey]).forEach(function(semKey) {
    var subjectCount = branch.years[yearKey][semKey].subjects.length;
    var card = document.createElement("div");
    card.className = "semester-card";
    card.setAttribute("tabindex","0");
    card.setAttribute("role","button");
    card.setAttribute("aria-label", semKey);
    card.innerHTML =
      '<div class="semester-card-icon">' + (semIcons[semKey]||"📅") + '</div>' +
      '<div class="semester-card-label">' + semKey + '</div>' +
      '<div class="semester-card-sub">' +
        (subjectCount > 0 ? subjectCount + ' Subject' + (subjectCount!==1?"s":"") : "No subjects yet") +
      '</div>';

    var encB = encodeURIComponent(branchKey);
    var encY = yearKey.replace(/\s+/g,"-");
    var encS = semKey.replace(/\s+/g,"-");
    function go() { navigate("#branch/" + encB + "/" + encY + "/" + encS); }
    card.addEventListener("click", go);
    card.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" ")go(); });
    DOM.semesterGrid.appendChild(card);
  });

  showPage("semester");
}

/* ---------------------------------------------------------------
   SECTION 9 — SUBJECTS PAGE
--------------------------------------------------------------- */
async function renderSubjectsPage(branchKey, yearKey, semKey) {
  var branch = studyData[branchKey];
  if (!branch) return;

  state.currentBranch   = branchKey;
  state.currentYear     = yearKey;
  state.currentSemester = semKey;

  DOM.subjPageTitle.textContent    = semKey;
  DOM.subjPageSubtitle.textContent = branchKey + " \u00b7 " + yearKey;

  DOM.subjectBreadcrumb.innerHTML =
    "<span>" + branchKey + "</span>" +
    "<span class='sep'>\u203a</span>" +
    "<span>" + yearKey + "</span>" +
    "<span class='sep'>\u203a</span>" +
    "<span>" + semKey + "</span>";

  var subjects = branch.years[yearKey][semKey].subjects;
  DOM.subjectsContainer.innerHTML = "";

  if (!subjects || subjects.length === 0) {
    DOM.subjectsContainer.innerHTML =
      '<div class="empty-state">' +
        '<div class="empty-state-icon">📭</div>' +
        '<p>No subjects added yet for this semester. Check back soon!</p>' +
      '</div>';

    showPage("subjects");
    return;
  }

  for (var idx = 0; idx < subjects.length; idx++) {
    var subject = subjects[idx];

    var card = document.createElement("div");
    card.className = "subject-card";

    var materialsHTML = "";

for (var m = 0; m < materialTypes.length; m++) {
  var mat = materialTypes[m];

  var folderPath =
    branchKey + "/" +
    yearKey + "/" +
    semKey + "/" +
    subject.name + "/" +
    mat.label;

  var result = await supabaseClient
    .storage
    .from(SUPABASE_BUCKET)
    .list(folderPath, {
      limit: 100,
      sortBy: {
        column: "name",
        order: "asc"
      }
    });

  var pdfFiles = [];

  if (!result.error && result.data) {
    pdfFiles = result.data.filter(function(file) {
      return file.name.toLowerCase().endsWith(".pdf");
    });
  }

  if (pdfFiles.length > 0) {

    var pdfListHTML = "";

    for (var p = 0; p < pdfFiles.length; p++) {
      var pdfFile = pdfFiles[p];

      var pdfUrl = supabaseClient
        .storage
        .from(SUPABASE_BUCKET)
        .getPublicUrl(
          folderPath + "/" + pdfFile.name
        )
        .data.publicUrl;

pdfListHTML +=
  '<div class="pdf-item" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">' +
    '<a href="' + pdfUrl + '" class="pdf-name" target="_blank" rel="noopener noreferrer">' +
      pdfFile.name +
    '</a>' +
    '<button type="button" class="delete-pdf-btn" ' +
      'data-path="' + (folderPath + "/" + pdfFile.name) + '" ' +
      'style="border:none;background:#ef4444;color:white;padding:7px 10px;border-radius:7px;cursor:pointer;">' +
      '🗑️ Delete' +
    '</button>' +
  '</div>';
    }

    materialsHTML +=
      '<div class="material-card">' +
        '<div class="material-icon">' + mat.icon + '</div>' +
        '<div class="material-type">' + mat.label + '</div>' +
        '<div class="pdf-list">' +
          pdfListHTML +
        '</div>' +
      '</div>';

  } else {

    materialsHTML +=
      '<div class="material-card">' +
        '<div class="material-icon">' + mat.icon + '</div>' +
        '<div class="material-type">' + mat.label + '</div>' +
        '<span class="material-btn coming-soon">Coming Soon</span>' +
      '</div>';
  }
}
     
    card.innerHTML =
      '<div class="subject-header">' +
        '<div class="subject-num">' + (idx + 1) + '</div>' +
        '<div>' +
          '<div class="subject-name">' + subject.name + '</div>' +
          (subject.code ? '<div class="subject-code">Code: ' + subject.code + '</div>' : "") +
        '</div>' +
      '</div>' +
      '<div class="materials-grid">' +
        materialsHTML +
      '</div>';
DOM.subjectsContainer.appendChild(card);

    card.querySelectorAll(".delete-pdf-btn").forEach(function(button) {

      button.addEventListener("click", function() {

        deletePDF(
          button.dataset.path,
          button
        );

      });

    });
  }

  showPage("subjects");
}
/* ---------------------------------------------------------------
   DELETE PDF
--------------------------------------------------------------- */

async function deletePDF(filePath, button) {

  var confirmDelete = confirm(
    "Are you sure you want to delete this PDF?"
  );

  if (!confirmDelete) return;

  button.disabled = true;
  button.textContent = "⏳ Deleting...";

  try {

    var result = await supabaseClient
      .storage
      .from(SUPABASE_BUCKET)
      .remove([filePath]);

    if (result.error) {

      console.error(result.error);

      alert("❌ Delete failed: " + result.error.message);

      button.disabled = false;
      button.textContent = "🗑️ Delete";
      return;
    }

    alert("✅ PDF deleted successfully!");

    renderSubjectsPage(
      state.currentBranch,
      state.currentYear,
      state.currentSemester
    );

  } catch (error) {

    console.error(error);

    alert("❌ Something went wrong while deleting.");

    button.disabled = false;
    button.textContent = "🗑️ Delete";
  }
}


/* ---------------------------------------------------------------
   SECTION 10 — SEARCH ENGINE
--------------------------------------------------------------- */
function buildSearchIndex() {
  var index = [];
  Object.keys(studyData).forEach(function(branchKey) {
    var branch = studyData[branchKey];
    /* Index branch name and full name */
    index.push({
      type:  "Branch",
      title: branchKey,
      sub:   branch.fullName,
      icon:  branch.icon,
      action: function() { navigate("#branch/" + encodeURIComponent(branchKey)); }
    });
    /* Index subjects (supports subjects added later) */
    Object.keys(branch.years).forEach(function(yearKey) {
      Object.keys(branch.years[yearKey]).forEach(function(semKey) {
        branch.years[yearKey][semKey].subjects.forEach(function(subject) {
          var encB = encodeURIComponent(branchKey);
          var encY = yearKey.replace(/\s+/g,"-");
          var encS = semKey.replace(/\s+/g,"-");
          index.push({
            type:  "Subject",
            title: subject.name,
            sub:   branchKey + " \u00b7 " + yearKey + " \u00b7 " + semKey,
            icon:  "📚",
            action: function() { navigate("#branch/" + encB + "/" + encY + "/" + encS); }
          });
        });
      });
    });
  });
  return index;
}
var searchIndex = buildSearchIndex();

function performSearch(query) {
  var q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];
  return searchIndex.filter(function(item) {
    return item.title.toLowerCase().indexOf(q) !== -1 ||
           item.sub.toLowerCase().indexOf(q) !== -1;
  }).slice(0, 8);
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function highlightMatch(text, query) {
  var esc = escapeHtml(text);
  var q   = escapeHtml(query.trim());
  if (!q) return esc;
  var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "gi");
  return esc.replace(re, '<mark style="background:rgba(37,99,235,.15);color:var(--primary);border-radius:2px;">$1</mark>');
}

function renderSearchResults(results, container, query) {
  container.innerHTML = "";
  if (!query || query.trim().length < 2) return;
  if (results.length === 0) {
    container.innerHTML = '<div class="search-no-results">No results for "<strong>' + escapeHtml(query) + '</strong>"</div>';
    return;
  }
  results.forEach(function(item) {
    var div = document.createElement("div");
    div.className = "search-result-item";
    div.setAttribute("tabindex","0");
    div.innerHTML =
      '<div class="result-icon">' + item.icon + '</div>' +
      '<div class="result-text">' +
        '<span class="result-title">' + highlightMatch(item.title, query) + '</span>' +
        '<span class="result-sub">' + escapeHtml(item.sub) + '</span>' +
      '</div>' +
      '<span class="result-tag">' + item.type + '</span>';

    function go() {
      item.action();
      container.innerHTML = "";
      if (DOM.globalSearchInput) DOM.globalSearchInput.value = "";
      if (DOM.heroSearchInput)   DOM.heroSearchInput.value   = "";
      if (DOM.searchBarWrapper)  DOM.searchBarWrapper.classList.remove("open");
    }
    div.addEventListener("click", go);
    div.addEventListener("keydown", function(e){ if(e.key==="Enter") go(); });
    container.appendChild(div);
  });
}

/* ---------------------------------------------------------------
   SECTION 11 — DARK MODE
--------------------------------------------------------------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("mbu-theme", theme);
}

function initDarkMode() {
  var saved      = localStorage.getItem("mbu-theme");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (systemDark ? "dark" : "light"));

  DOM.darkModeBtn.addEventListener("click", function() {
    var current = document.documentElement.getAttribute("data-theme");
    var next    = (current === "dark") ? "light" : "dark";
    applyTheme(next);
    showToast(next === "dark" ? "Dark mode on 🌙" : "Light mode on ☀️");
  });
}

/* ---------------------------------------------------------------
   SECTION 12 — TOAST NOTIFICATION
--------------------------------------------------------------- */
var toastTimer = null;
function showToast(msg, duration) {
  duration = duration || 2500;
  DOM.toast.textContent = msg;
  DOM.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { DOM.toast.classList.remove("show"); }, duration);
}

/* ---------------------------------------------------------------
   SECTION 13 — NAV / MENU EVENT LISTENERS
--------------------------------------------------------------- */
function closeNavMenu() {
  DOM.navLinksList.classList.remove("open");
  DOM.hamburgerBtn.classList.remove("open");
  DOM.hamburgerBtn.setAttribute("aria-expanded","false");
}

DOM.hamburgerBtn.addEventListener("click", function() {
  var isOpen = DOM.navLinksList.classList.toggle("open");
  DOM.hamburgerBtn.classList.toggle("open", isOpen);
  DOM.hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", function(e) {
  if (!DOM.hamburgerBtn.contains(e.target) && !DOM.navLinksList.contains(e.target)) {
    closeNavMenu();
  }
  if (!DOM.searchBarWrapper.contains(e.target) && !DOM.searchToggleBtn.contains(e.target)) {
    DOM.searchResultsDrop.innerHTML = "";
  }
});

DOM.navLinks.forEach(function(link) {
  link.addEventListener("click", closeNavMenu);
});

DOM.footerNavLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    var nav = link.dataset.nav;
    if (nav) { e.preventDefault(); navigate("#" + nav); }
  });
});

/* ---------------------------------------------------------------
   SECTION 14 — SEARCH EVENT LISTENERS
--------------------------------------------------------------- */
DOM.searchToggleBtn.addEventListener("click", function() {
  var isOpen = DOM.searchBarWrapper.classList.toggle("open");
  if (isOpen) { setTimeout(function(){ DOM.globalSearchInput.focus(); }, 100); }
  else { DOM.searchResultsDrop.innerHTML = ""; DOM.globalSearchInput.value = ""; }
});

DOM.globalSearchInput.addEventListener("input", function() {
  var results = performSearch(DOM.globalSearchInput.value);
  renderSearchResults(results, DOM.searchResultsDrop, DOM.globalSearchInput.value);
});

DOM.searchClearBtn.addEventListener("click", function() {
  DOM.globalSearchInput.value = "";
  DOM.searchResultsDrop.innerHTML = "";
  DOM.globalSearchInput.focus();
});

DOM.heroSearchInput.addEventListener("input", function() {
  var results = performSearch(DOM.heroSearchInput.value);
  renderSearchResults(results, DOM.heroSearchResults, DOM.heroSearchInput.value);
});

/* ---------------------------------------------------------------
   SECTION 15 — BACK BUTTONS
--------------------------------------------------------------- */
DOM.backFromBranch.addEventListener("click", function() {
  navigate("#branches");
});

DOM.backFromSemester.addEventListener("click", function() {
  if (state.currentBranch) {
    navigate("#branch/" + encodeURIComponent(state.currentBranch));
  } else {
    navigate("#branches");
  }
});

DOM.backFromSubjects.addEventListener("click", function() {
  if (state.currentBranch && state.currentYear) {
    navigate("#branch/" + encodeURIComponent(state.currentBranch) + "/" + state.currentYear.replace(/\s+/g,"-"));
  } else {
    navigate("#branches");
  }
});

/* ---------------------------------------------------------------
   SECTION 16 — KEYBOARD SHORTCUTS
--------------------------------------------------------------- */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    DOM.searchBarWrapper.classList.remove("open");
    DOM.searchResultsDrop.innerHTML = "";
    DOM.heroSearchResults.innerHTML = "";
    closeNavMenu();
  }
});

/* ---------------------------------------------------------------
   SECTION 17 — INITIALISE
--------------------------------------------------------------- */
async function init() {
  initDarkMode();
  renderBranchGrids();

  setupUploadPage();
  createUploadButton();

  await checkAdminLogin();

  handleRoute();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.addEventListener("hashchange", handleRoute);
/* =============================================================
   MBU STUDY HUB — DIRECT PDF UPLOAD
   ============================================================= */

function setupUploadPage() {

  var uploadPage = document.createElement("section");
  uploadPage.id = "page-upload";
  uploadPage.className = "page";

  uploadPage.innerHTML = `
    <div style="
      max-width:700px;
      margin:40px auto;
      padding:30px;
      background:var(--card-bg,#fff);
      border-radius:20px;
      box-shadow:0 8px 30px rgba(0,0,0,.08);
    ">

      <div style="text-align:center;margin-bottom:30px;">
        <div style="font-size:45px;">📤</div>
        <h1>Upload Study Material</h1>
        <p>Upload PDF directly to MBU Study Hub</p>
      </div>

      <label>Branch</label>
      <select id="upload-branch"
        style="width:100%;padding:12px;margin:8px 0 18px;">
      </select>

      <label>Year</label>
      <select id="upload-year"
        style="width:100%;padding:12px;margin:8px 0 18px;">
      </select>

      <label>Semester</label>
      <select id="upload-semester"
        style="width:100%;padding:12px;margin:8px 0 18px;">
      </select>

      <label>Subject</label>
      <select id="upload-subject"
        style="width:100%;padding:12px;margin:8px 0 18px;">
      </select>

      <label>Material Type</label>
      <select id="upload-material"
        style="width:100%;padding:12px;margin:8px 0 18px;">
      </select>

      <label>PDF File</label>
      <input
        type="file"
        id="upload-file"
        accept=".pdf,application/pdf"
        style="
          width:100%;
          padding:12px;
          margin:8px 0 20px;
          box-sizing:border-box;
        "
      >

      <button id="upload-pdf-btn"
        style="
          width:100%;
          padding:14px;
          border:none;
          border-radius:10px;
          background:#2563eb;
          color:white;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
        ">
        📤 Upload PDF
      </button>

      <div id="upload-status"
        style="
          margin-top:18px;
          text-align:center;
          font-weight:600;
        ">
      </div>

      <button id="upload-back-btn"
        style="
          width:100%;
          padding:12px;
          margin-top:12px;
          border:1px solid #ddd;
          border-radius:10px;
          background:transparent;
          cursor:pointer;
        ">
        ← Back
      </button>

    </div>
  `;

  document.querySelector("main").appendChild(uploadPage);

  DOM.pages.upload = uploadPage;

  populateUploadBranches();

  document.getElementById("upload-back-btn").onclick = function() {
    window.location.hash = "#home";
  };

  document.getElementById("upload-pdf-btn").onclick = uploadPDF;
}


/* ---------- Branch ---------- */

function populateUploadBranches() {

  var select = document.getElementById("upload-branch");

  select.innerHTML = "";

  Object.keys(studyData).forEach(function(branchKey) {

    var option = document.createElement("option");

    option.value = branchKey;
    option.textContent = branchKey;

    select.appendChild(option);
  });

  select.onchange = populateUploadYears;

  populateUploadYears();
}


/* ---------- Year ---------- */

function populateUploadYears() {

  var branchKey =
    document.getElementById("upload-branch").value;

  var select =
    document.getElementById("upload-year");

  select.innerHTML = "";

  Object.keys(studyData[branchKey].years).forEach(function(yearKey) {

    var option = document.createElement("option");

    option.value = yearKey;
    option.textContent = yearKey;

    select.appendChild(option);
  });

  select.onchange = populateUploadSemesters;

  populateUploadSemesters();
}


/* ---------- Semester ---------- */

function populateUploadSemesters() {

  var branchKey =
    document.getElementById("upload-branch").value;

  var yearKey =
    document.getElementById("upload-year").value;

  var select =
    document.getElementById("upload-semester");

  select.innerHTML = "";

  Object.keys(
    studyData[branchKey].years[yearKey]
  ).forEach(function(semKey) {

    var option = document.createElement("option");

    option.value = semKey;
    option.textContent = semKey;

    select.appendChild(option);
  });

  select.onchange = populateUploadSubjects;

  populateUploadSubjects();
}


/* ---------- Subject ---------- */

function populateUploadSubjects() {

  var branchKey =
    document.getElementById("upload-branch").value;

  var yearKey =
    document.getElementById("upload-year").value;

  var semester =
    document.getElementById("upload-semester").value;

  var select =
    document.getElementById("upload-subject");

  select.innerHTML = "";

  var subjects =
    studyData[branchKey]
      .years[yearKey]
      [semester]
      .subjects || [];

  subjects.forEach(function(subject) {

    var option = document.createElement("option");

    option.value = subject.name;
    option.textContent = subject.name;

    select.appendChild(option);
  });

  if (subjects.length === 0) {

    var option = document.createElement("option");

    option.value = "";
    option.textContent = "No subjects available";

    select.appendChild(option);
  }

  populateUploadMaterials();
}


/* ---------- Material ---------- */

function populateUploadMaterials() {

  var select =
    document.getElementById("upload-material");

  select.innerHTML = "";

  materialTypes.forEach(function(material) {

    var option = document.createElement("option");

    option.value = material.label;
    option.textContent =
      material.icon + " " + material.label;

    select.appendChild(option);
  });
}


/* ---------- Upload ---------- */

async function uploadPDF() {

  var branch =
    document.getElementById("upload-branch").value;

  var year =
    document.getElementById("upload-year").value;

  var semester =
    document.getElementById("upload-semester").value;

  var subject =
    document.getElementById("upload-subject").value;

  var material =
    document.getElementById("upload-material").value;

  var fileInput =
    document.getElementById("upload-file");

  var status =
    document.getElementById("upload-status");

  var button =
    document.getElementById("upload-pdf-btn");

  var file = fileInput.files[0];

  if (!file) {
    status.textContent = "❌ Please choose a PDF file.";
    return;
  }

  if (
    file.type !== "application/pdf" &&
    !file.name.toLowerCase().endsWith(".pdf")
  ) {
    status.textContent = "❌ Only PDF files are allowed.";
    return;
  }

  if (!subject) {
    status.textContent = "❌ Please select a subject.";
    return;
  }

  var safeFileName =
    file.name
      .replace(/[\\/:*?"<>|#%{}]/g, "_")
      .trim();

  var filePath =
    branch + "/" +
    year + "/" +
    semester + "/" +
    subject + "/" +
    material + "/" +
    safeFileName;

  button.disabled = true;
  button.textContent = "⏳ Uploading...";
  status.textContent = "";

  try {

    var result =
      await supabaseClient
        .storage
        .from(SUPABASE_BUCKET)
        .upload(
          filePath,
          file,
          {
            cacheControl: "3600",
            upsert: false,
            contentType: "application/pdf"
          }
        );

    if (result.error) {

      console.error(result.error);

      status.textContent =
        "❌ Upload failed: " +
        result.error.message;

      return;
    }

    status.textContent =
      "✅ PDF uploaded successfully!";

    fileInput.value = "";

  } catch (error) {

    console.error(error);

    status.textContent =
      "❌ Something went wrong.";

  } finally {

    button.disabled = false;
    button.textContent = "📤 Upload PDF";
  }
}


/* =============================================================
   OPEN UPLOAD PAGE
   ============================================================= */

function openUploadPage() {

  if (!DOM.pages.upload) {
    setupUploadPage();
  }

  showPage("upload");
}


/* =============================================================
   UPLOAD BUTTON
   ============================================================= */

function createUploadButton() {

  var button = document.createElement("button");

  button.id = "admin-upload-button";
  button.textContent = "📤 Upload PDF";

  button.style.cssText = `
    position:fixed;
    right:20px;
    bottom:20px;
    z-index:9999;
    padding:13px 18px;
    border:none;
    border-radius:30px;
    background:#2563eb;
    color:white;
    font-weight:600;
    cursor:pointer;
    box-shadow:0 6px 20px rgba(0,0,0,.2);
  `;

  button.onclick = function() {
    window.location.hash = "#admin-upload";
  };

  document.body.appendChild(button);
}
