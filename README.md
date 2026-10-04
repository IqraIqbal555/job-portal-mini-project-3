# CareerNest — Complete Job Portal

CareerNest is a complete, responsive and interactive job portal built as **Mini Project 3** using only **HTML5, CSS3 and Vanilla JavaScript**.

## Project Information

- **Project Name:** CareerNest Job Portal
- **Purpose:** Demonstrate a real-world interactive frontend application with dynamic job data, search, filtering, sorting, job details, applications and browser persistence.
- **Target Audience:** Students, graduates, job seekers and recruiters exploring a modern job discovery interface.
- **Technologies:** HTML5, CSS3, Vanilla JavaScript (ES Modules), Local Storage.

## Live Demo

> Replace this placeholder with your deployed GitHub Pages/Vercel/Netlify URL after deployment.

`https://YOUR-USERNAME.github.io/job-portal/`

## Major Features

- Dynamic job listings from JavaScript arrays/objects
- 15 job listings
- Search by title, company, skill and location
- Multiple filters: category, location, type, experience and minimum salary
- Sorting by latest, oldest, salary and title
- Pagination
- Complete job detail modal
- Application form with JavaScript validation
- Resume file selection validation
- LinkedIn and GitHub URL validation
- Applications stored in Local Storage
- My Applications dashboard
- Delete and view application details
- Export applications as JSON
- Saved/Favorite jobs using Local Storage
- Dark / Light mode with persistent theme
- Empty, loading, success and error UI states
- Toast notifications
- Responsive mobile, tablet and desktop layouts
- Semantic HTML5, Flexbox, CSS Grid and responsive media queries
- CSS variables, transitions, hover effects and custom keyframe animations

## Technical Implementation

### HTML
The application uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `aside`, `form`, `table` and `footer`. Separate pages are used for Home, Jobs, Saved Jobs, Applications and Contact.

### CSS
CSS is separated into:
- `css/style.css` — core design system, layout and page styling
- `css/components.css` — reusable modals, forms, toasts and UI components
- `css/responsive.css` — mobile/tablet/desktop breakpoints

The design uses CSS variables, Grid, Flexbox, relative units, responsive typography, transitions, hover states and keyframe animations.

### JavaScript
JavaScript is separated into:
- `js/data.js` — 15 job objects
- `js/storage.js` — Local Storage abstraction
- `js/app.js` — shared UI, rendering, theme, modal and application utilities
- `js/jobs.js` — search, filtering, sorting and pagination
- `js/saved.js` — saved-job page
- `js/applications.js` — application dashboard and export
- `js/contact.js` — contact form validation

### Local Storage
The project stores:
- Saved job IDs
- Submitted applications
- Selected theme

Data remains available after refreshing the browser.

### Responsive Breakpoints
- **Mobile:** under 600px
- **Tablet:** 600px–1024px
- **Desktop:** 1024px+

## Screenshots

Add these screenshots after deploying and testing the project:

```text
docs/screenshots/
├── desktop-home.png
├── desktop-jobs.png
├── mobile-home.png
├── mobile-jobs.png
└── applications-dashboard.png
```

Then embed them in this section using:

```markdown
![Desktop Homepage](docs/screenshots/desktop-home.png)
![Desktop Jobs](docs/screenshots/desktop-jobs.png)
![Mobile Homepage](docs/screenshots/mobile-home.png)
![Mobile Jobs](docs/screenshots/mobile-jobs.png)
![Application Dashboard](docs/screenshots/applications-dashboard.png)
```

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/job-portal.git
```

### 2. Open the project

Open the project folder in VS Code.

For the best development experience, use VS Code Live Server. You can also open `index.html` directly in a modern browser.

### 3. Test the required workflow

1. Open **Jobs**.
2. Search for a title, company, skill or location.
3. Try multiple filters.
4. Change sorting.
5. Open **View Details**.
6. Save a job.
7. Apply to a job with valid information.
8. Refresh the page and open **My Applications**.
9. Check the saved job.
10. Toggle dark mode and refresh.
11. Test the layout on mobile and desktop.

## Suggested Repository Structure

```text
job-portal/
├── index.html
├── jobs.html
├── saved-jobs.html
├── applications.html
├── contact.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── data.js
│   ├── app.js
│   ├── jobs.js
│   ├── saved.js
│   ├── applications.js
│   ├── contact.js
│   └── storage.js
├── images/
│   ├── companies/
│   └── banners/
└── README.md
```

## Deployment

GitHub Pages can be enabled from:

**Repository → Settings → Pages → Deploy from a branch → main → /(root)**

After deployment, copy the public URL into the **Live Demo** section above.

## Academic Project

This project is designed as an individual academic implementation of the supplied Mini Project 3 requirements. The interface and code structure are independently designed around the assignment specification.

**Built with HTML5 • CSS3 • Vanilla JavaScript**
