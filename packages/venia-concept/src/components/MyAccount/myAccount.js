import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classify from 'src/classify';
import ContactInformation from './ContactInformation';
import AddressBook from './AddressBook';
import defaultClasses from './myAccount.css';

class MyAccount extends Component {
	static PropTypes ={
		classes:PropTypes.shape({
			root: PropTypes.string,
			title: PropTypes.string
		}),

		customer:PropTypes.shape({}),
		addresses: PropTypes.arrayOf(PropTypes.shape({}))

	};

	render() {
		const { uesr, addresses, classes } = this.props;

		return (
			<section className={classes.root}>
				<h1 className={classes.title}>My Account</h1>
				<ContactInformation user = { user } />
				<AddressBook addresses = { addresses } />
				</section>
			);
	}
}

export default classify(defaultClasses)(MyAccount);