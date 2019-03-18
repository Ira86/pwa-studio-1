import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import defaulClasses from './separator.css';

class Separator extends Component {

	static propsTypes = {
		isHidden: PropTypes.bool,
		classes: PropTypes.shape({
			root: PropTypes.string
	})
};

render() {
	const { isHidden, classes } = this.props;

		if(isHidden) {
			return null;
		}

		return <span className={classes.root}>|</span>;
	}
}

export default classify(defaultClasses)(Separator);