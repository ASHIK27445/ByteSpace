# ByteSpace New

A responsive learning platform website built based on the provided Figma design.

## Live Website

**Live Site:** [YOUR VERCEL URL]

## GitHub Repository

https://github.com/ASHIK27445/ByteSpace

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* React Router
* Vite
* Lucide React
* Google Fonts (Poppins)
* Fontshare (Satoshi)

## Features

### Landing Page

* Hero section
* Partner logos
* Course categories
* Course cards
* Learning paths
* Creator showcase
* Creator call-to-action section
* Testimonials

### Authentication Pages

* Sign In page
* Sign Up page

### Courses Page

* Course listing
* Search
* Category filtering
* Pagination
* Course cards

### Course Details Page

* Course video player
* Course information
* About tab
* Lessons tab
* Reviews tab

### Creator Profile Page

* Creator information
* Creator's courses
* Course grid

## How to Explore the Website

### Course Details Page

You can access the Course Details page from multiple places:

1. **Home Page → Courses section**

   * Click any course card.
   * It will navigate to that course's Course Details page.

2. **Courses Page**

   * Open the Courses page from the navigation.
   * Click any course card.
   * It will navigate to the Course Details page.

3. **Creator Profile Page**

   * Open a Creator Profile.
   * Click a course from the creator's course grid.
   * In this case, the course intentionally navigates to a **Not Found page** as part of the implemented routing behavior.

### Creator Profile Page

The Creator Profile page can be accessed through the creator section on the Home Page.

From the Creator Profile page, you can view the creator information and their available courses.

## Git Workflow

The project was developed using a separate feature branch instead of committing project code directly to `main`.

* Development branch: `feature/project`
* A Pull Request was created from `feature/project` to `main`.
* The Pull Request was successfully merged into `main`.

## Notes for Reviewer

* The website is responsive and follows the provided Figma design.
* The landing page, authentication pages, courses page, course details page, and creator profile page are implemented.
* Course cards on the Home Page and Courses Page navigate to the Course Details page when clicked.
* The Creator Profile page contains a course grid. Clicking a course from this specific section intentionally leads to the **Not Found page**, as designed for this implementation.
* Search, filtering, pagination, tabs, and other interactive elements are implemented on the frontend.
* Some visual assets that were not directly available for export from Figma were replaced with suitable placeholder/external assets.
* The project uses reusable React components and React Router for page navigation.
* Basic accessibility considerations such as semantic HTML, keyboard focus styles, and ARIA labels for icon buttons have been included.

## Additional Notes

The implementation was developed by matching the spacing, sizing, layout, and visual structure of the provided Figma design. Minor pixel-level differences may remain due to differences between the original design assets and available web assets.
