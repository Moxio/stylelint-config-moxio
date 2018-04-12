"use strict";

module.exports = {
	"plugins": [
		"stylelint-selector-tag-no-without-class"
	],
	"rules": {
		"plugin/selector-tag-no-without-class": ["div", "span"],
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": true,
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-space-before": "always-single-line",
		"block-no-empty": true,
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-space-after": "always-single-line",
		"block-opening-brace-space-before": "always",
		"color-hex-case": "lower",
		"color-hex-length": "long",
		"color-named": "never",
		"color-no-invalid-hex": true,
		"comment-no-empty": true,
		"comment-whitespace-inside": "always",
		"declaration-block-no-duplicate-properties": [
			true,
			{
				"ignore": [
					"consecutive-duplicates-with-different-values"
				]
			}
		],
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-semicolon-newline-after": "always-multi-line",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-space-after": "always-single-line",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": "never",
		"declaration-no-important": true,
		"font-family-name-quotes": "always-where-recommended",
		"font-family-no-duplicate-names": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"function-name-case": "lower",
		"function-url-quotes": "always",
		"keyframe-declaration-no-important": true,
		"length-zero-no-unit": true,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-eol-whitespace": true,
		"no-extra-semicolons": true,
		"no-invalid-double-slash-comments": true,
		"no-unknown-animations": true,
		"number-no-trailing-zeros": true,
		"property-case": "lower",
		"property-no-unknown": true,
		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-list-comma-newline-after": "always",
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-no-unknown": true,
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-element-case": "lower",
		"selector-pseudo-element-no-unknown": true,
		"selector-type-case": "lower",
		"selector-type-no-unknown": true,
		"string-no-newline": true,
		"string-quotes": "double",
		"unit-case": "lower",
		"unit-no-unknown": true,
		"value-keyword-case": "lower",
		"value-list-comma-newline-after": "never-multi-line",
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-after": "always",
		"value-list-comma-space-before": "never",
		"declaration-property-value-whitelist": {
			"flex": ["/^\\S+\\s+\\S+\\s+\\S+$/"]
		}
	}
};
