# Angular Portfolio

This project is a personal portfolio web application built with Angular. It showcases professional experience, education, projects, and contact information. The application is designed to be easily customizable for anyone who wants to use it as their own portfolio.

## What is it about?

The Angular Portfolio project provides a modern, responsive, and easily extensible portfolio website. It displays information such as:
- Personal profile and contact details
- About section with skills and competencies
- Work experience
- Education background
- Projects
- Contact form

## Where is the data located?

All the main content and data for the portfolio (profile, about, experience, education, projects, etc.) are stored in the file:

```
public/data.json
```

If you want to change the data (such as your name, experience, projects, etc.), simply edit the `public/data.json` file and update the relevant sections according to your requirements.

## Pages included

The application includes the following main pages/routes:
- **Home** (`/`): Landing page with pinned projects
- **About** (`/about`): About me, skills, and competencies
- **Experience** (`/experience`): Work experience
- **Projects** (`/projects`): List of projects
- **Education** (`/education`): Education background
- **Contact** (`/contact`): Contact form

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
