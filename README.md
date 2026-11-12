# Advanced Python Programming Portfolio (CS13007)

<div align="center">

### An Interactive Academic Digital Research Journal & Engineering Compendium

**Course**: CS13007 – Advanced Python Programming  
**Author**: Leo Shiji (**23MIC0082**)  
**Programme**: Integrated M.Tech in Computer Science and Engineering  
**Institution**: Vellore Institute of Technology (VIT), Vellore  
**Faculty Mentor**: Dr. Sharmila Banu K  
**Semester**: Fall Semester 2026–27  


</div>

---

## 📌 Executive Overview

This repository hosts the complete source code for the **Advanced Python Programming Academic Portfolio (CS13007)**. Designed as a digital research journal and compendium, it integrates multimodal artificial intelligence, tabular data science, edge IoT healthcare classification, algorithmic problem solving, and technical editorial writing into an interactive web application.

The featured core project is **CalTracker**, an AI-powered calorie and macronutrient tracking web application leveraging **Google Gemini Vision** multimodal API to remove the manual friction of conventional dietary logging.


## 📖 Compendium Chapters & Course Modules

The portfolio is structured into 8 modular chapters:

### Chapter 01: Academic Profile & Python Dossier
* Academic profile of **Leo Shiji (23MIC0082)**, Integrated M.Tech CSE student at VIT Vellore.
* Pedagogical framework and computing philosophy under the guidance of **Dr. Sharmila Banu K**.
* Six core Python computing pillars: Multimodal AI, Full-Stack Web Development, Data Science, IoT Sensor Telemetry, Algorithmic Analysis, and Technical Writing.

### Chapter 02: Featured Project — CalTracker AI (Complete 10-Point Writeup)
1. **Title**: CalTracker: A Web-Based Calorie Tracker Powered by Gemini Vision
2. **Motivation**: Eliminating manual dietary logging friction with computer vision.
3. **Existing Gap / Motivating Event / USP**: Comparison against traditional commercial trackers.
4. **Architecture**: 4-layer decoupled stack (Presentation, Application, AI, and Hosting) with high-res Figure 3 architecture diagram.
5. **Complete Tech Stack**: React, Python, Google Gemini Vision, pandas, Vercel, Git.
6. **Datasets Used**: Pretrained Gemini Vision weights, runtime user food photos, and GVI urban dataset.
7. **Prompt Engineering**: Development prompts & strict JSON schema runtime prompt:
   ```text
   "Identify the food items in this image. For each item, estimate the serving size, calories, protein, carbohydrates and fat. Respond only in JSON."
   ```
8. **API Integration**: REST endpoint contracts, base64 payload transmission, response schemas, and Vercel environment variable security.
9. **Users, Inputs & Outputs Matrix**: Persona definitions, multimodal inputs, and calculation engines.
10. **References**: Verified citations for CalTracker, Gemini API, LeetCode, Vercel, pandas, and Medium.

### Chapter 03: Pandas Data Analysis — Green View Index (GVI)
* **Part A, Item 01**: Data analysis exercise ranking 30 international cities by their street-level Green View Index (GVI).
* Python pandas DataFrame construction code snippet.
* Interactive, filterable, and sortable 30-city table with visual canopy score metrics (Top: Tampa 36.1%, Mean: 21.5%).

### Chapter 04: IoT-Based Impairment Assessment
* **Part A, Item 03**: Wearable wrist MPU sensor tracking hand-to-mouth motion patterns paired with an ESP32 microcontroller for real-time eating disorder classification.
* Side-by-side zoomable lightbox displaying **Figure 1** (Redrawn Digital Flowchart) and **Figure 2** (Original Handwritten Lab Notebook Sketch).
* Five sequential stages: Motion Capture $\rightarrow$ Pattern Logic $\rightarrow$ Edge Classifier $\rightarrow$ Real-Time Feedback $\rightarrow$ Encrypted Cloud Telemetry.

### Chapter 05: Academic Activities & Laboratory Sessions
* **Item 02: Python Tutorial Discussion**: Collaborative algorithmic problem solving in the computer lab (`python-tutorial-discussion.jpg`).
* **Item 04: In-Class Python Quiz**: Timed evaluation assessing OOP, data structures, and memory management (`class-quiz.jpg`).
* **Item 06: Audio Recording Session [Business Thesis]**: Computer lab recording session (`audio-recording-session.jpg`) accompanied by the official audio deliverable (`New recording 12.mp3`).

### Chapter 06: Algorithmic Problem Solving & Padlet Submission
* **Part A, Item 09**: Official Padlet submission (`Padlet_Python_23MIC0082`) with screenshot evidence (`padlet-submission.jpg`).
* Interactive 6-problem LeetCode solution matrix with time and space complexity proofs:
  * **Easy 1**: Single Number (LeetCode #136) — Bitwise XOR ($O(n)$ time, $O(1)$ space)
  * **Easy 2**: Plus One (LeetCode #66) — Array Carry Ripple ($O(n)$ time, $O(1)$ space)
  * **Medium 1**: Rotate List (LeetCode #61) — Linked List Ring Shift ($O(n)$ time, $O(1)$ space)
  * **Medium 2**: Search a 2D Matrix (LeetCode #74) — Binary Search on 2D Matrix ($O(\log(m \cdot n))$ time)
  * **Hard 1**: Distinct Subsequences (LeetCode #115) — 2D Dynamic Programming ($O(m \cdot n)$ time)
  * **Hard 2**: Remove Boxes (LeetCode #546) — 3D Memoized Interval DP ($O(n^4)$ time)

### Chapter 07: Medium Publication
* **Part A, Item 05**: Article spotlight on *"My First Encounter with Python: It's been 4 years I have been studying..."*.
* Editorial retrospective charting the pedagogical journey from foundational syntax to multimodal computer vision.

### Chapter 08: Project Media Vault & Demonstrations
* Centralized dashboard with direct access cards for the live Vercel web app, Google Slides presentation deck, Google Drive video walkthrough, and business thesis audio recording.

---

## 🛠️ Tech Stack & Architecture

* **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
* **Icons & Animation**: Lucide React, CSS 3D Tilt perspective, Framer Motion
* **AI Model**: Google Gemini API (Multimodal Vision)
* **Data Processing**: Python 3.10+, pandas (DataFrames, aggregations, tabular indexing)
* **Hardware Interfacing**: ESP32 Microcontroller, MPU-6050 6-DOF Sensor
* **Hosting**: Vercel Cloud Platform (Global Edge Network)

---

## 💻 Local Setup & Development

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* `npm` or `pnpm`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LeoShijiKozhikottu/Python_Portfolio.git
   cd Python_Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```



## 👤 Author & Academic Attribution

* **Student**: Leo Shiji
* **Registration Number**: 23MIC0082
* **Programme**: Integrated M.Tech in Computer Science and Engineering
* **Faculty Mentor**: Dr. Sharmila Banu K
* **Institution**: Vellore Institute of Technology (VIT), Vellore
* **Course**: CS13007 – Advanced Python Programming (Fall Semester 2026–27)

---

<div align="center">
<sub>Designed and developed by Leo Shiji (23MIC0082) • CS13007 Advanced Python Programming Portfolio</sub>
</div>
