# Portfolio redesign audit

## Current remediation state
- The approved commercial route model is implemented in English and Spanish: Home, Services, Case Studies, About, Resume, and Work With Me.
- Work With Me is the canonical conversion destination and uses a static email-draft fallback; no form data is stored or sent to a third-party provider.
- Public technical work and professional enterprise experience remain explicitly separated. Planned RAG and agent case studies are not presented as completed proof.
- The photo-ready About fallback remains in use because no owner-approved portrait has been supplied.

## Current-site findings
- **Keep:** Jekyll static-site foundation, existing favicon, canonical URL, sitemap plugin, public GitHub and LinkedIn links, and the public `lab-infra-ia-bigdata` repository link.
- **Rewrite:** Spanish-first navigation and copy, generic personal-portfolio framing, and project descriptions that did not distinguish independent technical work from client work.
- **Remove:** Skill-percentage bars because no objective measurement method is documented.
- **Add:** Commercial user journey, five service descriptions, engagement models, clear project CTA, English metadata, Open Graph/Twitter metadata, Person structured data, skip link, and explicit planned-case-study labels.

## Claim classification
- **Supported by public portfolio content:** professional direction, the named technical repositories, and the listed components/documentation of `lab-infra-ia-bigdata`.
- **Presented as services, not prior-client outcomes:** Enterprise RAG, AI Agents & Automation, Data Platform Engineering, Microsoft Fabric Architecture, and Fractional AI/Data Architect.
- **Not claimed:** client names, revenue or performance metrics, testimonials, production deployments, or completed future case studies.

## Verification scope
- The current QA evidence pack is `docs/S3.18_REMEDIATION_QA_EVIDENCE.md` and is the authoritative remediation record.
- GitHub Actions Build check and GitHub Pages deployment have passed for the published remediation commit.
- Chromium and Microsoft Edge route, responsive, interaction, axe, keyboard, and bounded performance checks are recorded in the QA pack. Local Jekyll execution remains unavailable because Ruby/Bundler are not installed in this environment.
- Remaining independent review items are manual LinkedIn confirmation and a dedicated security/privacy review; S3.17/S3.18 are not approved by this document.

