<div align="center">

<img src="my_image.png" alt="Saptarshi Sadhu" width="120" style="border-radius: 50%; border: 2px solid #06b6d4; padding: 4px;" />

# Saptarshi Sadhu

### Full Stack Developer · ML Researcher · Systems Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-saptarshisadhu.co.in-06b6d4?style=for-the-badge&logo=vercel&logoColor=white)](https://saptarshisadhu.co.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saptarshi-sadhu/)
[![GitHub](https://img.shields.io/badge/GitHub-SAPTARSHI--coder-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SAPTARSHI-coder)
[![HackerRank](https://img.shields.io/badge/HackerRank-4★_C_·_3★_C++-00EA64?style=for-the-badge&logo=hackerrank&logoColor=white)](https://www.hackerrank.com/)

</div>

---

## ⚡ Overview

Welcome to the source code of my personal portfolio. This repository is not just a digital resume — it is a **Dual-Mode Web Application** built from the ground up without heavy frameworks. It demonstrates frontend architecture, graphics rendering, performance optimization, and systems thinking.

> **Live →** [saptarshisadhu.co.in](https://saptarshisadhu.co.in)

The portfolio captures my journey across full-stack engineering, machine learning research, and low-level systems programming. 

---

## 🚀 Dual-Mode Architecture

To serve different user preferences and network conditions, the portfolio features a unique dual-mode routing system accessible via the main landing portal (`index.html`).

### 1️⃣ 3D Interactive Mode (`3d.html`)
A cinematic, GPU-accelerated immersive experience.
- **3D Workstation:** Features a fully interactive developer room rendered using Google's `<model-viewer>` (WebGL), complete with orbit controls, realistic lighting, and environment maps.
- **Orbital Physics System:** A custom physics engine written in Vanilla JS where technology icons orbit along math-calculated spiral paths with dynamic light arcs and dust trails.
- **Parallax & Video Layers:** Composited `.mp4` background with screen-blend elements and responsive scroll observers.

### 2️⃣ High-Speed Static Mode (`static.html`)
A lightning-fast, high-contrast, editorial layout optimized for mobile and low-bandwidth connections.
- **Minimalist UI:** Clean glassmorphism, sharp typography, and instantaneous load times.
- **No WebGL Overhead:** Stripped of heavy 3D assets and complex physics loops while maintaining identical content parity with the 3D mode.

---

## 🧠 Integrated Dual-Mode Blog

The portfolio includes a fully integrated blogging system, echoing the dual-mode philosophy:
- **`blog.html` (Dynamic Router):** Uses a Vanilla JS routing engine to load Markdown-style HTML posts asynchronously, providing an SPA (Single Page Application) feel with a frosted-glass UI.
- **`static_blog.html` (Static Delivery):** Directly links to fully pre-rendered static HTML files (`static_blog_posts/`) for maximum SEO compatibility and immediate rendering.

---

## 🏗️ Technical Directory Structure

```
Portfolio/
├── index.html              # Main Gateway (Mode Selector)
├── index.css               # Global Gateway Styles
|
├── 3d.html                 # Complete 3D Immersive Portfolio
├── 3d.css                  # Styles for 3D Mode & Animations
├── script.js               # Orbital Physics, 3D Observer Engine
|
├── static.html             # High-Performance Static Portfolio
├── static.css              # Editorial Minimalist Styles
|
├── blog.html               # Dynamic SPA Blog Index
├── blog_posts/             # Async-loaded Blog Content
|
├── static_blog.html        # Fully Static SSR Blog Index
├── static_blog_posts/      # SEO-optimized Hardcoded Posts
|
├── port3d.glb              # High-Res 3D Developer Workstation
├── Background.mp4          # Cinematic Background Compositing Layer
└── sitemap.xml & robots.txt# Full Technical SEO Suite
```

**Zero Frameworks. Zero Bundlers.** 
This application is purely hand-authored HTML, CSS, and JS. This ensures maximum control over browser paint cycles, memory allocation, and DOM manipulation.

---

## 💻 Tech Stack

### Languages
<p>
  <img src="https://img.shields.io/badge/Python-Advanced-3776AB?style=flat-square&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Advanced-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-Intermediate-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-Intermediate-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/C-Intermediate-A8B9CC?style=flat-square&logo=c&logoColor=black" />
  <img src="https://img.shields.io/badge/Dart-Intermediate-0175C2?style=flat-square&logo=dart&logoColor=white" />
</p>

### Frontend Engineering
<p>
  <img src="https://img.shields.io/badge/React-Advanced-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-Advanced-000000?style=flat-square&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5%2FCSS3-Advanced-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/WebGL%20(Model_Viewer)-Specialist-FF0000?style=flat-square&logo=webgl&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-Advanced-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" />
</p>

### Backend Architecture
<p>
  <img src="https://img.shields.io/badge/Node.js-Intermediate-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Advanced-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Django-Intermediate-092E20?style=flat-square&logo=django&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-Intermediate-6DB33F?style=flat-square&logo=spring-boot&logoColor=white" />
</p>

### Databases & Cloud
<p>
  <img src="https://img.shields.io/badge/MySQL-Advanced-4479A1?style=flat-square&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-Advanced-3ECF8E?style=flat-square&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Intermediate-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/AWS-Intermediate-FF9900?style=flat-square&logo=amazon-aws&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Beginner-2496ED?style=flat-square&logo=docker&logoColor=white" />
</p>

### AI & ML
<p>
  <img src="https://img.shields.io/badge/PyTorch-Intermediate-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/TensorFlow-Intermediate-FF6F00?style=flat-square&logo=tensorflow&logoColor=white" />
  <img src="https://img.shields.io/badge/Scikit_Learn-Advanced-F7931E?style=flat-square&logo=scikit-learn&logoColor=white" />
</p>

---

## 🔬 Featured Research

**Urban Air Quality Prediction using Machine Learning**  
An ongoing data-driven research initiative investigating ML models to predict ground-level concentrations of volatile organic compounds (VOCs), ozone (O₃), and nitrogen oxides (NOx) in urban environments. The project models temporal and environmental feature interactions for short-term forecasting, aiding public health and smart city development.  
*Stack: Python, TensorFlow, PyTorch, Statistical Modeling*

---

## 🎓 Academic Record

| Level | Board | Score |
|---|---|---|
| Secondary | WBBSE | **93.71%** |
| Higher Secondary | WBCHSE | **89.60%** |
| B.Tech Computer Science | Semester GPA Progression | **9.3 → 9.5 → 9.43** |

---

## 🛠️ Running Locally

Because the project relies on dynamically loaded modules (for the 3D `.glb` model) and local file fetching (for the dynamic blog routing), opening the files directly using `file://` will cause CORS restrictions. **You must run a local HTTP server.**

```bash
# 1. Clone the repository
git clone https://github.com/SAPTARSHI-coder/Portfolio.git
cd Portfolio

# 2. Run a local server
# (Using Python 3)
python -m http.server 8080

# (Using Node/NPX)
npx serve .
```
Navigate to `http://localhost:8080` in your web browser.

---

## 📬 Contact & Connect

I am actively open to software engineering internships, systems/ML research collaborations, and open-source opportunities.

| Network | Link |
|---|---|
| **LinkedIn** | [linkedin.com/in/saptarshi-sadhu](https://www.linkedin.com/in/saptarshi-sadhu/) |
| **GitHub** | [github.com/SAPTARSHI-coder](https://github.com/SAPTARSHI-coder) |
| **Email** | Available via [Contact Section](https://saptarshisadhu.co.in/#contact) |
| **Support** | [Buy Me a Coffee](https://buymeacoffee.com/saptarshisadhu) |

---

<div align="center">
  <br/>
  <i>Designing systems that operate at real-world scale.</i>
  <br/>
  <b>Made with ⚡ by Saptarshi Sadhu</b>
</div>
