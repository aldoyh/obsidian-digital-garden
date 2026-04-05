import { ILogLevel } from "js-logger";
import { PublishPlatform } from "./PublishPlatform";
import type { PremiumStylePreset } from "../utils/PremiumStyles";

/** Premium style configuration for stunning garden designs */
export interface PremiumStyleSettings {
	enabled: boolean;
	preset: PremiumStylePreset;
	enableAnimations: boolean;
	enableCustomFonts: boolean;
	customAccentColor: string;
}

/** Saved to data.json, changing requires a migration */
export default interface DigitalGardenSettings {
	githubToken: string;
	githubRepo: string;
	githubUserName: string;

	gardenBaseUrl: string;
	prHistory: string[];

	theme: string;
	baseTheme: string;
	faviconPath: string;
	logoPath: string;
	mainLanguage: string;
	useFullResolutionImages: boolean;

	siteName: string;

	noteSettingsIsInitialized: boolean;

	slugifyEnabled: boolean;

	noteIconKey: string;
	defaultNoteIcon: string;
	showNoteIconOnTitle: boolean;
	showNoteIconInFileTree: boolean;
	showNoteIconOnInternalLink: boolean;
	showNoteIconOnBackLink: boolean;

	showCreatedTimestamp: boolean;
	createdTimestampKey: string;

	showUpdatedTimestamp: boolean;
	updatedTimestampKey: string;

	timestampFormat: string;

	styleSettingsCss: string;
	styleSettingsBodyClasses: string;

	pathRewriteRules: string;
	customFilters: Array<{ pattern: string; flags: string; replace: string }>;
	contentClassesKey: string;

	publishPlatform: PublishPlatform;
	forestrySettings: {
		forestryPageName: string;
		apiKey: string;
		baseUrl: string;
	};

	defaultNoteSettings: {
		dgHomeLink: boolean;
		dgPassFrontmatter: boolean;
		dgShowBacklinks: boolean;
		dgShowLocalGraph: boolean;
		dgShowInlineTitle: boolean;
		dgShowFileTree: boolean;
		dgEnableSearch: boolean;
		dgShowToc: boolean;
		dgLinkPreview: boolean;
		dgShowTags: boolean;
	};

	uiStrings: {
		backlinkHeader: string;
		noBacklinksMessage: string;
		searchButtonText: string;
		searchPlaceholder: string;
		searchNotStarted: string;
		searchEnterHotkey: string;
		searchEnterHint: string;
		searchNavigateHotkey: string;
		searchNavigateHint: string;
		searchCloseHotkey: string;
		searchCloseHint: string;
		searchNoResults: string;
		searchPreviewPlaceholder: string;
		canvasDragHint: string;
		canvasZoomHint: string;
		canvasResetHint: string;
	};

	/** Premium styling configuration for stunning garden designs */
	premiumStyles: PremiumStyleSettings;

	ENABLE_DEVELOPER_TOOLS?: boolean;
	devPluginPath?: string;
	logLevel?: ILogLevel;
	localExportPath?: string;
}
