import { connect } from 'react-redux';
import { getUserInformation } from 'src/selectors/user';
import MyAccountTrigger from './myAccountTrigger';

export default connect(state =>({ 
	user: getUserInformation(state)


}))(MyAccountTrigger);