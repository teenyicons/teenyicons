module.exports = {
	noDimensions: true,
	replaceAttrValues: {
		"#000": "{color}",
	},
	svgProps: {
		"width": "{size}",
		"height": "{size}",
		"ref": "{ref}",
	},
	template: require('./svgr-template.js'),
}
