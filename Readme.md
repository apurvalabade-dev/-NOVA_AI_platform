# NOVA — AI Productivity Platform

A responsive SaaS landing page for NOVA, a fictional AI productivity platform. The project demonstrates modern React UI patterns, responsive design, accessible interactions, and a polished product-focused visual system.

##Live URL
https://novaaiplatform.vercel.app/

## Features

- Responsive desktop and mobile navigation
- Dark/light theme toggle
- Product dashboard preview in the hero section
- Feature, solutions, statistics, pricing, and testimonial sections
- Monthly/annual pricing toggle
- Accessible FAQ accordion
- Demo request modal with success state
- Newsletter email validation
- Back-to-top control
- Responsive layouts for mobile, tablet, and desktop
- Reduced-motion support

## Technologies

- React
- Vite
- JavaScript (ES modules)
- CSS
- lucide-react icons

## Project structure

```text
.
├── App.jsx       # Main page and interaction state
├── index.jsx     # React entry point
├── index.html    # Document shell
├── styles.css    # Local responsive design system
└── package.json
```

## Getting started

Install the project dependencies, then start the Vite development server. The project can also be built for deployment using the scripts defined in `package.json`.

## Design decisions

NOVA uses a dark, indigo-led SaaS visual language to communicate intelligence and trust. The hero dashboard gives the fictional product a tangible presence instead of relying only on marketing copy. Content is stored in arrays and rendered with `.map()` so plans, features, FAQs, and testimonials remain easy to extend.

## Accessibility

The interface includes semantic sections, descriptive labels, FAQ ARIA relationships, modal dialog attributes, keyboard-friendly controls, visible focus states, and reduced-motion support.

## AI tools used

AI assistance was used for ideation, code review, and implementation suggestions. The code was reviewed and adapted to fit the project's existing React structure and styling system.

## Future improvements

- Connect forms to a real backend
- Add local optimized customer imagery
- Add end-to-end tests
- Add real authentication and billing flows
- Deploy with analytics and error monitoring
