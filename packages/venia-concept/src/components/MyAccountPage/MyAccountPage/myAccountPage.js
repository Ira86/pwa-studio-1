import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import MyAccountMenu from '../MyAccountMenu';

import Header from '../Header';
import defaultClasses from './myAccountPage.css';
import OnlineIndicator from 'src/components/OnlineIndicator';

class MyAccountPage extends Component {
   static propTypes = {
        classes: PropTypes.shape({
            root: PropTypes.string,
            logoContainer: PropTypes.string
        }),
        signOut: PropTypes.func,
        onClose: PropTypes.func,
        history: PropTypes.shape({}),
        user: PropTypes.shape({
            email: PropTypes.string,
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            fullname: PropTypes.string
        })
    };

    handleSignOut = () => {
        const { signOut, history } = this.props;

        signOut({ history });
    };

    render() {
        const { classes, user, onClose } = this.props;

        return (
            <div className={classes.root}>
                <Header user={user} onClose={onClose} />
                <MyAccountMenu signOut={this.handleSignOut} />
                
            </div>
        );
    }
}

export default classify(defaultClasses)(MyAccountPage);
