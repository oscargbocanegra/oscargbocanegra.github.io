document.addEventListener("DOMContentLoaded", () => {
	// =====================
	// Tema claro/oscuro
	// =====================
	const themeToggle = document.getElementById("theme-toggle");
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

	const currentTheme = localStorage.getItem("theme");
	if (currentTheme === "dark") {
		document.documentElement.setAttribute("data-theme", "dark");
	} else if (currentTheme === "light") {
		document.documentElement.setAttribute("data-theme", "light");
	} else if (prefersDarkScheme.matches) {
		document.documentElement.setAttribute("data-theme", "dark");
	}

	if (themeToggle) {
		themeToggle.addEventListener("click", () => {
			let theme;
			if (document.documentElement.getAttribute("data-theme") === "dark") {
				document.documentElement.setAttribute("data-theme", "light");
				theme = "light";
			} else {
				document.documentElement.setAttribute("data-theme", "dark");
				theme = "dark";
			}
			localStorage.setItem("theme", theme);
		});
	}

	// =====================
	// Animaciones al hacer scroll (fade in sections)
	// =====================
	const animateOnScroll = () => {
		const sections = document.querySelectorAll(
			".expertise, .skills-section, .featured-projects, .testimonials, .certifications, .cta, .stats-section, .contact-options, .faq-section, .education-certification, .professional-journey, .skills-values, .about-intro",
		);
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			if (sectionTop < windowHeight * 0.88) {
				section.classList.add("animate-in");
			}
		});
	};

	window.addEventListener("scroll", animateOnScroll, { passive: true });
	animateOnScroll();

	// =====================
	// Animación de barras de habilidades (fix: lee data-width del HTML)
	// =====================
	const skillBars = document.querySelectorAll(".skill-bar span[data-width]");
	let skillBarsAnimated = false;

	const animateSkillBars = () => {
		if (skillBarsAnimated) return;
		const firstBar = skillBars[0];
		if (!firstBar) return;

		const barTop = firstBar.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (barTop < windowHeight * 0.92) {
			skillBarsAnimated = true;
			skillBars.forEach((bar, i) => {
				const targetWidth = bar.getAttribute("data-width");
				setTimeout(() => {
					bar.style.width = targetWidth;
				}, i * 80);
			});
		}
	};

	window.addEventListener("scroll", animateSkillBars, { passive: true });
	// Intentar al inicio también (si la sección ya es visible)
	setTimeout(animateSkillBars, 400);

	// =====================
	// Contador animado para stats
	// =====================
	const animateCounters = () => {
		const counters = document.querySelectorAll(".stat-number[data-target]");
		if (counters.length === 0) return;

		counters.forEach((counter) => {
			const target = parseInt(counter.getAttribute("data-target"), 10);
			const suffix = counter.getAttribute("data-suffix") || "";
			const duration = 1800;
			let current = 0;

			const update = () => {
				current += Math.max(1, Math.round(target / (duration / 16)));
				if (current >= target) {
					counter.textContent = target + suffix;
					return;
				}
				counter.textContent = current + suffix;
				requestAnimationFrame(update);
			};
			requestAnimationFrame(update);
		});
	};

	// Disparar counters cuando la sección de stats entra en viewport
	const statsSection = document.querySelector(".stats-section");
	let statsAnimated = false;

	if (statsSection) {
		const checkStats = () => {
			if (statsAnimated) return;
			const top = statsSection.getBoundingClientRect().top;
			if (top < window.innerHeight * 0.9) {
				statsAnimated = true;
				animateCounters();
			}
		};
		window.addEventListener("scroll", checkStats, { passive: true });
		checkStats();
	}

	// =====================
	// Navbar activa al hacer scroll
	// =====================
	const sections = document.querySelectorAll("main > section[id]");
	const navLinks = document.querySelectorAll("nav ul li a");

	const updateActiveNavLink = () => {
		let current = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (window.scrollY >= sectionTop - 120) {
				current = section.getAttribute("id") || "";
			}
		});
		navLinks.forEach((link) => {
			link.classList.remove("active");
			const href = link.getAttribute("href") || "";
			if (current && href.includes(current)) {
				link.classList.add("active");
			}
		});
	};

	window.addEventListener("scroll", updateActiveNavLink, { passive: true });

	// =====================
	// Filtros para proyectos
	// =====================
	const projectFilters = document.querySelectorAll(".project-filter");
	const projectItems = document.querySelectorAll(".project-detail");

	if (projectFilters.length > 0) {
		projectFilters.forEach((filter) => {
			filter.addEventListener("click", function () {
				const filterValue = this.getAttribute("data-filter");
				projectFilters.forEach((btn) => btn.classList.remove("active"));
				this.classList.add("active");
				projectItems.forEach((item) => {
					item.style.display =
						filterValue === "all" || item.classList.contains(filterValue)
							? "block"
							: "none";
				});
			});
		});
	}

	// =====================
	// FAQ accordion
	// =====================
	const faqItems = document.querySelectorAll(".faq-item");
	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");
		if (question) {
			question.addEventListener("click", () => {
				const isActive = item.classList.contains("active");
				faqItems.forEach((i) => i.classList.remove("active"));
				if (!isActive) item.classList.add("active");
			});
		}
	});
});

// =====================
// Fade-in del hero
// =====================
(() => {
	const heroH2 = document.querySelector(".hero-content h2");
	if (!heroH2 || window.innerWidth <= 768) return;

	heroH2.style.opacity = "0";
	heroH2.style.transform = "translateY(12px)";
	heroH2.style.transition = "opacity 0.8s ease, transform 0.8s ease";

	setTimeout(() => {
		heroH2.style.opacity = "1";
		heroH2.style.transform = "translateY(0)";
	}, 350);
})();
