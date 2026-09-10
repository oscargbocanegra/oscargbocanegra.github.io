# Oscar Bocanegra AI & Data Portfolio

## Overview

Bilingual EN/ES Jekyll portfolio for Oscar Giovanni Bocanegra, focused on AI and data architecture, engineering, platforms, technical evidence, professional experience, and project conversations.

The official production site is deployed on Cloudflare Pages.

## Live site

https://oscargbocanegra.pages.dev/

## Key characteristics

- Bilingual English/Spanish routes.
- Responsive shared application shell.
- Deep Architecture design system.
- Services, Case Studies, Technical Lab, About, Resume, and Work With Me areas.
- Public technical work presented within explicit evidence boundaries.
- Playwright production QA harness.

## Architecture and technology

- Jekyll and Liquid render the static site from docs/.
- HTML, CSS, and vanilla JavaScript provide the interface.
- Node.js runs the Playwright QA harness.
- Playwright is pinned in package.json.
- Cloudflare Pages publishes the generated Jekyll output.
- No frontend framework is used.

## Repository structure

    docs/
      _config.yml           Jekyll configuration
      _data/                navigation, profile, services, and project data
      _includes/            shared head, header, footer, cards, and CTA markup
      _layouts/             shared page layouts
      assets/               images, documents, and shared CSS
      css/                  page-specific CSS, including Resume
      js/                   shared navigation and interaction behavior
      es/                   Spanish route counterparts
      *.html                English route sources

    tests/
      portfolio-qa.spec.ts  Playwright shell and responsive QA

    playwright.config.ts    QA projects and production base URL
    package.json            Node/Playwright command
    Gemfile                 Ruby/Jekyll dependencies
    MAINTENANCE.md          maintainer workflow

## Local development

### Requirements

- Ruby and Bundler for Jekyll.
- Node.js and npm for Playwright QA.

### Install dependencies

    bundle install
    npm install

### Run Jekyll locally

    bundle exec jekyll serve --source docs --destination .tmp/jekyll-preview

Build without serving:

    bundle exec jekyll build --source docs --destination .tmp/jekyll-build

Generated .tmp/ and docs/_site/ output is disposable.

## QA and testing

The production QA harness is located at tests/portfolio-qa.spec.ts.

Run the exact package script:

    npm run test:portfolio-qa

The configured target is:

    https://oscargbocanegra.pages.dev

The harness covers the primary EN/ES routes, legacy Resume redirects, shared shell structure, language selectors, CTA presence, placeholder detection, horizontal overflow, mobile menu semantics, and page/console errors.

Configured viewports:

- Desktop: 1440x900
- Tablet: 768x1024
- Mobile: 390x844

Temporary screenshots and JSON reports are written under .tmp/qa-evidence/ and are ignored by Git.

The latest known DEV-026 execution result was 45/45 PASS. This is historical evidence, not a permanent guarantee; rerun the command after relevant changes.

## Responsive validation

The Playwright projects exercise desktop, tablet, and mobile layouts. Checks include:

- horizontal overflow;
- header and navigation;
- language selector;
- footer;
- mobile menu and ARIA state;
- CTA presence;
- placeholder copy;
- page errors and console errors.

Additional interactions, links, filters, and the Work With Me mailto flow require targeted browser review.

## Design system

The interface follows the Deep Architecture system implemented by the shared design tokens and CSS:

- dark slate surfaces;
- Inter for body text;
- JetBrains Mono for labels and technical metadata;
- indigo/cyan accents;
- shared grid, spacing, borders, radius, and surfaces;
- focus-visible states and responsive touch targets;
- reduced-motion handling where implemented.

## Content and evidence governance

Professional experience, education, credentials, and public project descriptions must remain aligned with authorized sources.

Public repositories and Technical Lab entries are technical evidence. They must not be presented as client delivery, production deployment, commercial outcomes, or measured claims unless independently supported.

Do not add invented clients, metrics, certifications, dates, capabilities, or results.

## Deployment

The operational flow is:

    local change
      -> local validation
      -> focused commit
      -> push to main
      -> Cloudflare Pages automatic deployment
      -> production validation

Cloudflare Pages is the official production path. GitHub Pages is not used as production evidence.

## Accessibility

The shared interface includes:

- semantic headings and navigation landmarks;
- focus-visible styles;
- keyboard-aware navigation behavior;
- responsive layouts and minimum interactive targets;
- reduced-motion CSS handling where defined.

This README does not claim complete WCAG conformance.

## Internationalization

English is the canonical route set at the docs/ root. Spanish counterparts are under docs/es/.

Examples:

- /resume.html and /es/resume.html
- /services.html and /es/services.html
- /projects.html and /es/projects.html
- /lab.html and /es/lab.html

The shared header provides the language selector.

## Contribution and change workflow

- Start from a reviewed working tree.
- Make focused changes in the owning source files.
- Preserve EN/ES route alignment.
- Run applicable validation before committing.
- Keep temporary reports and generated output out of commits.
- Do not bypass repository hooks.
- Review staged paths before committing.

## Documentation

- MAINTENANCE.md ºw^~)Þt maintainer workflow.
- docs/current-state.md+§uçâçT verified repository state and validation boundaries.
- docs/architecture.md+§uçâçT architecture and source ownership.
- docs/decisions/ ºw^~)Þt durable project decisions.
- AGENTS.md+§uçâçT repository contribution and agent guidance.

## Security and secrets

Do not commit passwords, tokens, API keys, or other credentials. Keep temporary artifacts and dependency directories ignored where configured. Public project links are evidence references, not secret storage.

## License

No public license has been defined in this repository.

## Author and contact

- Oscar Giovanni Bocanegra
- GitHub: https://github.com/oscargbocanegra
- LinkedIn: https://www.linkedin.com/in/oscargbocanegra/
- Work With Me: https://oscargbocanegra.pages.dev/work-with-me.html
