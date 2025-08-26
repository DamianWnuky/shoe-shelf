# Candidate Live Coding Test: Node.js + React — Fullstack Mini-App

**Duration:** 30–45 minutes (max)
**Supervised by:** HR (full screen share, no interaction unless issues)

**Goal:** Evaluate architecture, API design, React modularization, and communication.

---

## 1) Backend: Node.js + Express API

Set up a Node.js Express server with these endpoints:

* **GET `/shoes`**

  * Return a list of shoes.
  * Each shoe should have:

    * `id` (UUID or incremental number)
    * `name` (e.g., "Air Jordan 1")
    * `brand` (e.g., "Nike")

* **POST `/shoes`**

  * Add a new shoe (accept `name` and `brand` in the request body).

* **DELETE `/shoes/:id`**

  * Remove a shoe by ID.

**Data source (choose one):**

* Use a relational database.
* Use an ORM (Prisma preferred).

**Backend project structure must be clean:**

* `server.js` or `index.js`
* `routes/` (Express routes)
* `controllers/` (Request handlers)
* `services/` (Business logic and database/mocked database interaction)
* `db/` (if using SQLite)

---

## 2) Frontend: React.js App

Create a React app that:

* Fetches and displays the list of shoes.
* Has a form to add a new shoe (inputs: `name` + `brand`).
* Allows deleting a shoe (via a delete button next to each shoe).

**React frontend structure must be modular:**

* Components split cleanly (e.g., `ShoeList`, `AddShoeForm`, etc.).
* Use `fetch` or `axios`.
* Include minimal error handling.
* Aim for a clean and professional look.

---

## 3) Authentication

* Authentication is required; use JWT (recommended).

---

## 4) Other Technical Requirements

* Properly handle CORS if frontend and backend run on different ports.
* Code must be runnable locally without major manual edits.
* Provide the `.env` variables if any.
* Everything must be self-contained (no external hosted services).

---

## 🧠 What We Are Evaluating

* Code this using AI (cursor, windsurf, copilot, Claude Code, your choice), and **explain the code** generated during the recording.
* Fullstack basic CRUD skills.
* Proper project structure and modularization.
* Database or mocked data handling.
* Error handling and basic user interaction flows (add/delete).
* Problem-solving skills and communication during coding.
* Ensure candidate shares **full screen** (not just a window).
* Record the session.
* Save the recording and supervisor notes.

---

## 💬 Final Reminder to Candidate

> “The goal is not just to finish, but to show how you structure, organize, and solve problems. Please narrate your thought process while you work. Please include a short technical summary of how your app works at the end of the video.”
