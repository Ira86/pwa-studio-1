import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { signOut } from 'src/actions/user';
import { getUserInformation } from 'src/selectors/user';
import MyAccountPage from './myAccountPage';

export default compose(
	withRouter,
	connect(
			state =>({
				user:getUserInformation(state)
			}),
			{ signOut }
		)
	)(MyAccountPage);
