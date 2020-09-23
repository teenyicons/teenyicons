function iconTemplate({ template }, opts, { interfaces, componentName, jsx, exports }) {

	const plugins = ['jsx'];

	if (opts.typescript) {
	  plugins.push('typescript')
	}

	// SVGR creates component names based on filename (SvgFilename)
	// this cleans up the componentName to have a displayName to use
	// in your components that matches the original .svg filename.
	const cleanDisplayName = () => {
		// Required due to svg.svg file name
		if (componentName.name !== "SvgSvg") {
			return componentName.name.replace((/\w*Svg*/), '')
		}
		return "Svg";
	}

	// For a cleaner syntax on the icon components
	const NEWLINE = `\n`

	const typeScriptTpl = template.smart({ plugins })

	return typeScriptTpl.ast`
		import React, { forwardRef } from 'react';
		import PropTypes from 'prop-types';
		${interfaces}
		${NEWLINE}
		const ${componentName} = forwardRef(({color = 'currentColor', size = 15, ...props}, ref) => {
			return ${jsx};
		})
		${NEWLINE}
		${componentName}.propTypes = {
			color: PropTypes.string,
			size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		};
		${NEWLINE}
		${componentName}.displayName = "${cleanDisplayName()}";
		${NEWLINE}
		${exports}
	`
  }

  module.exports = iconTemplate
