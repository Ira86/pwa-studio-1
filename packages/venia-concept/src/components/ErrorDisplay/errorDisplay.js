import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import classify from 'src/classify';
import defaultClasses from './errorDisplay.css';

class ErrorDisplay extends Component {
    static propTypes = {
        classes: shape({
            body: string,
            root: string
        }),
        error: shape({
            message: string
        })
    };

    render() {
        const { classes, error } = this.props;
        const message = error && error.message;

        if (!message) {
            return null;
        }

        return (
            <pre className={classes.root}>
                <div className={classes.body}>Your password or email is incorrect!</div>
            </pre>
        );
    }
}

export default classify(defaultClasses)(ErrorDisplay);
