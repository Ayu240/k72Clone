# K72 Clone

A modern React-based portfolio/agency website built with Vite, featuring smooth animations, responsive design, and interactive components.

## Live Demo

Check out the live deployment: [k72-clone-woad.vercel.app](https://k72-clone-woad.vercel.app)

## Description

This project is a clone of a creative agency/portfolio website, showcasing projects, agency information, and contact details. It utilizes advanced animations with GSAP, smooth scrolling with Locomotive Scroll, and a clean UI powered by TailwindCSS.

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **Locomotive Scroll** - Smooth scrolling library
- **React Router** - Client-side routing

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd k72-clone-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── agence/          # Agency-related components
│   ├── common/          # Shared components (BottomPart, Stair)
│   ├── home/            # Home page components (Hero text, video, etc.)
│   ├── navigation/      # Navigation components (Navbar, FullScreenNav)
│   └── project/         # Project-related components (Project cards)
├── context/
│   └── NavContext.jsx   # Navigation context
├── pages/
│   ├── Agence.jsx       # Agency page
│   ├── ContactPage.jsx  # Contact page
│   ├── Home.jsx         # Home page
│   └── Projects.jsx     # Projects page
├── App.jsx              # Main app component
├── index.css            # Global styles
└── main.jsx             # App entry point
```

## Features

- Responsive design
- Smooth page transitions and animations
- Interactive navigation
- Project showcase
- Contact form
- Modern UI/UX

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and not licensed for public use.
