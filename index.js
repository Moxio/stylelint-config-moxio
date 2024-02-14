"use strict";

module.exports = {
	"plugins": [
		"@stylistic/stylelint-plugin",
		"stylelint-selector-tag-no-without-class",
		"stylelint-order",
	],
	"rules": {
		"order/order": [
			[
				"less-mixins",
			],
			{
				"unspecified": "bottom"
			}
		],
		"plugin/selector-tag-no-without-class": ["div", "span"],
		"@stylistic/at-rule-name-case": "lower",
		"@stylistic/at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": true,
		"@stylistic/block-closing-brace-newline-after": "always",
		"@stylistic/block-closing-brace-space-before": "always-single-line",
		"block-no-empty": true,
		"@stylistic/block-opening-brace-newline-after": "always-multi-line",
		"@stylistic/block-opening-brace-space-after": "always-single-line",
		"@stylistic/block-opening-brace-space-before": "always",
		"@stylistic/color-hex-case": "lower",
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
		"@stylistic/declaration-block-semicolon-newline-after": "always-multi-line",
		"@stylistic/declaration-block-semicolon-newline-before": "never-multi-line",
		"@stylistic/declaration-block-semicolon-space-after": "always-single-line",
		"@stylistic/declaration-block-semicolon-space-before": "never",
		"@stylistic/declaration-block-trailing-semicolon": "always",
		"@stylistic/declaration-colon-space-after": "always-single-line",
		"@stylistic/declaration-colon-space-before": "never",
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
		"@stylistic/no-eol-whitespace": true,
		"@stylistic/no-extra-semicolons": true,
		"no-invalid-double-slash-comments": true,
		"no-unknown-animations": true,
		"@stylistic/number-no-trailing-zeros": true,
		"@stylistic/property-case": "lower",
		"property-no-unknown": true,
		"@stylistic/selector-attribute-brackets-space-inside": "never",
		"@stylistic/selector-attribute-operator-space-after": "never",
		"@stylistic/selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"@stylistic/selector-combinator-space-after": "always",
		"@stylistic/selector-combinator-space-before": "always",
		"@stylistic/selector-descendant-combinator-no-non-space": true,
		"@stylistic/selector-list-comma-newline-after": "always",
		"@stylistic/selector-pseudo-class-case": "lower",
		"selector-pseudo-class-no-unknown": true,
		"@stylistic/selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-colon-notation": "double",
		"@stylistic/selector-pseudo-element-case": "lower",
		"selector-pseudo-element-no-unknown": true,
		"selector-type-case": "lower",
		"selector-type-no-unknown": true,
		"string-no-newline": true,
		"@stylistic/string-quotes": "double",
		"@stylistic/unit-case": "lower",
		"unit-no-unknown": true,
		"value-keyword-case": "lower",
		"@stylistic/value-list-comma-newline-after": "never-multi-line",
		"@stylistic/value-list-comma-newline-before": "never-multi-line",
		"@stylistic/value-list-comma-space-after": "always",
		"@stylistic/value-list-comma-space-before": "never",
		"declaration-property-value-allowed-list": {
			"flex": ["/^\\S+\\s+\\S+\\s+\\S+$/"]
		},
		"@stylistic/indentation": "tab"
	},
	"overrides": [
		{
			"files": [ "**/*.less" ],
			"customSyntax": "postcss-less",
		}
	]
};
