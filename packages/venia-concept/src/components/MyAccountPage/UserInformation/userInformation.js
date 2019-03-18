import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import UserIcon from 'react-feather/dist/icons/user';
import Icon from 'src/components/Icon';
import defaultClasses from './userInformation.css';

class UserInformation extends Component {
	static propTypes ={
		classes: PropTypes.shape({
			root:PropTypes.string,
			userInformationContainer:PropTypes.string,
			iconContainer: PropTypes.string
		}),
		user:PropTypes.shape({
			email:PropTypes.string,
			firstname: PropTypes.string,
			lastname:PropTypes.string,
			fullanme:PropTypes.string
		})
	};

	render(){
			const {user,classes}=this.props;
			const{fullname,email}=user || {};

			return (
				<div className={classes.root}>
					<Icon name="user" />
				<div className={classes.userInformationContainer}>
					<p className={classes.fullname}>{fullname}</p>
					<p className={classes.email}>{email}</p>
				</div>
			</div>
		);
	}
}
export default classify(defaultClasses)(UserInformation);