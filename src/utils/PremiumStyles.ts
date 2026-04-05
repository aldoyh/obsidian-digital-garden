/**
 * Premium Styles for Digital Garden
 *
 * A collection of professionally crafted CSS presets that transform
 * your digital garden into a stunning, polished publication.
 *
 * Design principles:
 * - Clean typography with optimal reading experience
 * - Subtle animations that don't distract
 * - Professional spacing and visual hierarchy
 * - Accessibility-first approach
 * - Works with both light and dark themes
 */

export type PremiumStylePreset =
	| "minimal-elegance"
	| "modern-editorial"
	| "cozy-reading"
	| "tech-focused"
	| "academic";

export interface PremiumStyleConfig {
	preset: PremiumStylePreset;
	enableAnimations: boolean;
	enableCustomFonts: boolean;
	accentColor?: string;
}

const FONT_STACKS = {
	serif: '"Merriweather", "Georgia", "Cambria", "Times New Roman", serif',
	sansSerif:
		'"Inter", "Segoe UI", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
	mono: '"JetBrains Mono", "Fira Code", "SF Mono", "Consolas", monospace',
	editorial:
		'"Playfair Display", "Georgia", "Cambria", "Times New Roman", serif',
};

/**
 * Base CSS that all presets share - foundational improvements
 */
const BASE_CSS = `
/* === Premium Digital Garden Styles === */

/* Import high-quality fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better text rendering */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Improved selection colors */
::selection {
  background: var(--text-accent);
  color: var(--background-primary);
}

/* Better focus states for accessibility */
:focus-visible {
  outline: 2px solid var(--text-accent);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Smooth transitions on interactive elements */
a, button, .nav-link, .tree-item {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Remove default link underlines, add on hover */
.content a:not(.tag):not(.internal-link) {
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.content a:not(.tag):not(.internal-link):hover {
  border-bottom-color: currentColor;
}

/* Better code blocks */
pre, code {
  font-family: ${FONT_STACKS.mono};
}

pre {
  border-radius: 8px;
  padding: 1.25em;
  overflow-x: auto;
  border: 1px solid var(--background-modifier-border);
}

code:not(pre code) {
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

/* Improved blockquotes */
blockquote {
  border-left: 3px solid var(--text-accent);
  padding-left: 1.5em;
  margin-left: 0;
  font-style: italic;
  opacity: 0.9;
}

/* Better horizontal rules */
hr {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--background-modifier-border),
    transparent
  );
  margin: 2.5em 0;
}

/* Image improvements */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.content img {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Table improvements */
table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  margin: 1.5em 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--background-modifier-border);
}

th, td {
  padding: 0.75em 1em;
  text-align: left;
  border-bottom: 1px solid var(--background-modifier-border);
}

th {
  font-weight: 600;
  background: var(--background-secondary);
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background: var(--background-secondary-alt);
}

/* Callout improvements */
.callout {
  border-radius: 8px;
  border-left-width: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Tag styling */
.tag {
  padding: 0.2em 0.6em;
  border-radius: 9999px;
  font-size: 0.85em;
  font-weight: 500;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Backlinks section */
.backlinks {
  margin-top: 3em;
  padding-top: 2em;
  border-top: 1px solid var(--background-modifier-border);
}

/* Graph improvements */
.graph-view {
  border-radius: 12px;
  overflow: hidden;
}

/* File tree refinements */
.filetree-sidebar {
  padding: 1em;
}

.tree-item {
  border-radius: 6px;
  padding: 0.4em 0.6em;
}

.tree-item:hover {
  background: var(--background-secondary);
}

/* Search improvements */
.search-input {
  border-radius: 8px;
  padding: 0.75em 1em;
  border: 1px solid var(--background-modifier-border);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-input:focus {
  border-color: var(--text-accent);
  box-shadow: 0 0 0 3px rgba(var(--text-accent-rgb), 0.1);
}
`;

/**
 * Minimal Elegance - Clean, spacious, understated luxury
 */
const MINIMAL_ELEGANCE = `
${BASE_CSS}

/* Typography */
body {
  font-family: ${FONT_STACKS.sansSerif};
  font-size: 17px;
  line-height: 1.75;
  letter-spacing: -0.01em;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${FONT_STACKS.sansSerif};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-top: 2em;
  margin-bottom: 0.75em;
}

h1 { font-size: 2.25rem; font-weight: 700; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.375rem; }
h4 { font-size: 1.125rem; }

/* Content width and spacing */
.content {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
}

/* Paragraphs */
p {
  margin-bottom: 1.5em;
}

/* Links - subtle accent */
.content a {
  color: var(--text-accent);
  font-weight: 500;
}

/* Headers with subtle line */
h2::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: var(--text-accent);
  margin-top: 0.5em;
  opacity: 0.5;
}

/* Subtle page entrance animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content {
  animation: fadeInUp 0.4s ease-out;
}
`;

/**
 * Modern Editorial - Magazine-style, bold typography
 */
const MODERN_EDITORIAL = `
${BASE_CSS}

/* Typography */
body {
  font-family: ${FONT_STACKS.serif};
  font-size: 18px;
  line-height: 1.8;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${FONT_STACKS.editorial};
  font-weight: 600;
  line-height: 1.2;
  margin-top: 2.5em;
  margin-bottom: 0.75em;
}

h1 {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: -0.03em;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
}

/* Content styling */
.content {
  max-width: 680px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* Drop cap for first paragraph */
.content > p:first-of-type::first-letter {
  float: left;
  font-family: ${FONT_STACKS.editorial};
  font-size: 4em;
  line-height: 0.8;
  padding-right: 0.1em;
  padding-top: 0.1em;
  color: var(--text-accent);
}

/* Pull quotes */
blockquote {
  font-size: 1.25em;
  font-style: italic;
  border-left: none;
  text-align: center;
  padding: 1.5em 2em;
  position: relative;
}

blockquote::before {
  content: '"';
  font-family: ${FONT_STACKS.editorial};
  font-size: 4em;
  position: absolute;
  top: -0.2em;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.15;
}

/* Links */
.content a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--text-accent);
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
}

.content a:hover {
  background: var(--text-accent);
  color: var(--background-primary);
  text-decoration: none;
  padding: 0 0.1em;
}

/* Metadata styling */
.note-meta {
  font-family: ${FONT_STACKS.sansSerif};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75em;
  opacity: 0.7;
}
`;

/**
 * Cozy Reading - Warm, comfortable, book-like
 */
const COZY_READING = `
${BASE_CSS}

/* Warm background tint */
:root {
  --cozy-bg: #faf8f5;
  --cozy-bg-dark: #1a1815;
}

.theme-light body {
  background: var(--cozy-bg);
}

.theme-dark body {
  background: var(--cozy-bg-dark);
}

/* Typography */
body {
  font-family: ${FONT_STACKS.serif};
  font-size: 19px;
  line-height: 1.85;
  color: #3d3d3d;
}

.theme-dark body {
  color: #e8e4df;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${FONT_STACKS.serif};
  font-weight: 700;
  line-height: 1.3;
  margin-top: 2em;
  margin-bottom: 0.5em;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }

/* Content */
.content {
  max-width: 640px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
}

/* Generous paragraph spacing */
p {
  margin-bottom: 1.75em;
  text-align: justify;
  hyphens: auto;
}

/* Soft links */
.content a {
  color: #8b5a2b;
  border-bottom: 1px dotted currentColor;
}

.theme-dark .content a {
  color: #d4a574;
}

/* Warm blockquotes */
blockquote {
  background: rgba(139, 90, 43, 0.08);
  border-left: 3px solid #8b5a2b;
  padding: 1em 1.5em;
  border-radius: 0 8px 8px 0;
  margin: 1.5em 0;
}

/* Soft shadows on images */
.content img {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

/* Page dividers */
hr {
  background: none;
  text-align: center;
  height: auto;
  margin: 3em 0;
}

hr::before {
  content: '* * *';
  color: var(--text-muted);
  letter-spacing: 1em;
}

/* Reading progress indicator */
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #8b5a2b var(--progress, 0%), transparent 0);
  z-index: 1000;
}
`;

/**
 * Tech Focused - Clean, modern, developer-friendly
 */
const TECH_FOCUSED = `
${BASE_CSS}

/* Typography */
body {
  font-family: ${FONT_STACKS.sansSerif};
  font-size: 16px;
  line-height: 1.7;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${FONT_STACKS.sansSerif};
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2em;
  margin-bottom: 0.5em;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; border-bottom: 1px solid var(--background-modifier-border); padding-bottom: 0.3em; }
h3 { font-size: 1.25rem; }

/* Content */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* Code-centric styling */
pre {
  background: #1e1e2e;
  color: #cdd6f4;
  border: none;
  border-radius: 8px;
  padding: 1.5em;
  font-size: 0.9em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
}

code:not(pre code) {
  background: var(--background-secondary);
  color: #f38ba8;
  padding: 0.2em 0.5em;
  border-radius: 4px;
  font-size: 0.875em;
}

/* Links with icon hint */
.content a.external-link::after {
  content: ' ↗';
  font-size: 0.75em;
  opacity: 0.6;
}

.content a {
  color: #89b4fa;
  text-decoration: none;
  border-bottom: 1px dashed currentColor;
}

.content a:hover {
  border-bottom-style: solid;
}

/* Callouts as terminal-style */
.callout {
  background: #1e1e2e;
  color: #cdd6f4;
  border: none;
  border-left: 3px solid #89b4fa;
  font-family: ${FONT_STACKS.mono};
  font-size: 0.9em;
}

/* Tags as badges */
.tag {
  background: linear-gradient(135deg, #89b4fa, #b4befe);
  color: #1e1e2e;
  font-family: ${FONT_STACKS.mono};
  font-size: 0.75em;
  padding: 0.25em 0.75em;
}

/* Keyboard shortcuts styling */
kbd {
  background: var(--background-secondary);
  border: 1px solid var(--background-modifier-border);
  border-radius: 4px;
  padding: 0.2em 0.5em;
  font-family: ${FONT_STACKS.mono};
  font-size: 0.85em;
  box-shadow: 0 2px 0 var(--background-modifier-border);
}

/* Table of contents sticky */
.toc {
  position: sticky;
  top: 2rem;
  font-size: 0.875em;
}

/* File tree as code */
.filetree-sidebar {
  font-family: ${FONT_STACKS.mono};
  font-size: 0.875em;
}
`;

/**
 * Academic - Scholarly, citation-friendly, formal
 */
const ACADEMIC = `
${BASE_CSS}

/* Typography */
body {
  font-family: ${FONT_STACKS.serif};
  font-size: 18px;
  line-height: 2;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${FONT_STACKS.sansSerif};
  font-weight: 600;
  line-height: 1.3;
  margin-top: 2.5em;
  margin-bottom: 0.75em;
}

h1 {
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 0.25em;
}

h1 + .note-meta {
  text-align: center;
  margin-bottom: 2em;
}

h2 {
  font-size: 1.375rem;
  counter-increment: section;
}

h2::before {
  content: counter(section) ". ";
  color: var(--text-muted);
}

h3 { font-size: 1.125rem; }

/* Content */
.content {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 2rem;
  counter-reset: section;
}

/* Justified text */
p {
  text-align: justify;
  text-indent: 1.5em;
  margin-bottom: 0;
}

p:first-of-type,
h2 + p,
h3 + p,
blockquote + p,
pre + p {
  text-indent: 0;
}

/* Footnote-style links */
.content a {
  color: inherit;
  text-decoration: none;
  vertical-align: super;
  font-size: 0.75em;
}

.content a::before {
  content: '[';
}

.content a::after {
  content: ']';
}

/* Block quotes as indented */
blockquote {
  border: none;
  margin: 1.5em 3em;
  font-style: normal;
  font-size: 0.95em;
}

/* Figure captions */
figure {
  margin: 2em 0;
  text-align: center;
}

figcaption {
  font-size: 0.875em;
  color: var(--text-muted);
  margin-top: 0.5em;
}

/* Tables with caption */
table {
  margin: 2em auto;
}

table caption {
  caption-side: bottom;
  font-size: 0.875em;
  color: var(--text-muted);
  padding-top: 0.5em;
}

/* References section */
.backlinks h3 {
  font-variant: small-caps;
  letter-spacing: 0.05em;
}
`;

/**
 * Get CSS for a specific preset
 */
export function getPremiumStyleCSS(preset: PremiumStylePreset): string {
	switch (preset) {
		case "minimal-elegance":
			return MINIMAL_ELEGANCE;
		case "modern-editorial":
			return MODERN_EDITORIAL;
		case "cozy-reading":
			return COZY_READING;
		case "tech-focused":
			return TECH_FOCUSED;
		case "academic":
			return ACADEMIC;
		default:
			return MINIMAL_ELEGANCE;
	}
}

/**
 * Get all available presets with descriptions
 */
export function getPremiumStylePresets(): Array<{
	id: PremiumStylePreset;
	name: string;
	description: string;
}> {
	return [
		{
			id: "minimal-elegance",
			name: "Minimal Elegance",
			description:
				"Clean, spacious design with understated luxury. Perfect for personal blogs and portfolios.",
		},
		{
			id: "modern-editorial",
			name: "Modern Editorial",
			description:
				"Magazine-style typography with bold headlines and drop caps. Great for long-form content.",
		},
		{
			id: "cozy-reading",
			name: "Cozy Reading",
			description:
				"Warm, comfortable aesthetic like a well-loved book. Ideal for journals and personal notes.",
		},
		{
			id: "tech-focused",
			name: "Tech Focused",
			description:
				"Developer-friendly with excellent code styling. Built for technical documentation.",
		},
		{
			id: "academic",
			name: "Academic",
			description:
				"Scholarly formatting with numbered sections and citations. Perfect for research notes.",
		},
	];
}

/**
 * Generate custom CSS with user-selected accent color
 */
export function generateCustomAccentCSS(hexColor: string): string {
	return `
/* Custom accent color */
:root {
  --text-accent: ${hexColor};
  --text-accent-hover: ${hexColor}dd;
}

.tag {
  background: ${hexColor}20;
  color: ${hexColor};
}

h2::after {
  background: ${hexColor};
}

blockquote {
  border-left-color: ${hexColor};
}
`;
}

/**
 * Combine preset with custom options
 */
export function buildPremiumStyles(config: PremiumStyleConfig): string {
	let css = getPremiumStyleCSS(config.preset);

	if (config.accentColor) {
		css += generateCustomAccentCSS(config.accentColor);
	}

	if (!config.enableAnimations) {
		css += `
/* Disable animations */
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
}
`;
	}

	if (!config.enableCustomFonts) {
		css = css.replace(/@import url\([^)]+\);/g, "");
	}

	return css;
}
