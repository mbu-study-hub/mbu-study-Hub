# MBU Study Hub

A complete, responsive single-page academic resource website for **Mohan Babu University** students.

## Project Structure

```
MBU-Study-Hub/
├── index.html          Main HTML (all pages/sections)
├── style.css           All CSS styles + responsive + dark mode
├── script.js           All JavaScript (data + routing + search)
├── assets/             Icons, images, favicon
└── materials/          PDF folder structure
    ├── cse/
    ├── cse-aiml/
    ├── ece/
    ├── eee/
    ├── mech/
    └── civil/
```

## How to Use

1. Open `index.html` in any modern web browser.
2. No server required — works as a local file.
3. For best results, serve via a local HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   ```

## How to Add a PDF Link

Open `script.js` and find the subject you want, then replace `null` with the PDF path:

```javascript
// Before (Coming Soon):
{ name: "Signals and Systems", code: "EC202",
  materials: { notes: null, lab: null, papers: null, syllabus: null } }

// After (PDF linked):
{ name: "Signals and Systems", code: "EC202",
  materials: {
    notes:    "materials/ece/2nd-year/signals/notes.pdf",
    lab:      "materials/ece/2nd-year/signals/lab-manual.pdf",
    papers:   "materials/ece/2nd-year/signals/previous-papers.pdf",
    syllabus: "materials/ece/2nd-year/signals/syllabus.pdf"
  }
}
```

## How to Add a New Subject

Find the correct branch > year > semester > subjects array and add:

```javascript
{
  name: "New Subject Name",
  code: "SUBJ101",
  materials: {
    notes:    null,   // or "materials/path/to/notes.pdf"
    lab:      null,
    papers:   null,
    syllabus: null
  }
}
```

## Features

- Hash-based URL routing (shareable/bookmarkable links)
- Live search across branches, subjects, and materials
- Dark mode (auto-detects system preference + toggle)
- Fully responsive (mobile, tablet, laptop, desktop)
- Hamburger menu on mobile
- No backend, no frameworks — pure HTML/CSS/JS

## Branches Included

**Computer Science:** CSE, CSE (AI & ML), CSE (AI), CSE (Data Science), CSE (DevOps), Information Technology, Data Science  
**Electronics:** ECE, EIE, ECM  
**Other:** EEE, Civil Engineering, Mechanical Engineering

---

*MBU Study Hub — Made for MBU Students. Not affiliated with MBU administration.*
