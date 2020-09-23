module.exports = {
	svgProps: {
		"width": "{size}",
		"height": "{size}",
		"ref": "{ref}",
	},
	template: require('./svgr-template.js'),
	svgoConfig: {
		plugins: {
		  removeViewBox: false,
		},
	},
	replaceAttrValues: {
		"#000": "{color}",
	},
}
