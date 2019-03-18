import { connect } from 'react-redux';

import { fetchOrderDetails } from 'src/actions/purchaseDetails/asyncActions';
import purchaseDetails from './purchaseDetails';

import {
	getCommonOrderDetails,
	getPaymentDetails, 
	getShipmentDetails, 
	getOrderSummary, 
	getFetchingStatus,
	getOrderItems,
	getItem
} from './selectors';

export default connect (
		state =>({
	orderDetails:getCommonOrderDetails(state),
	paymentDetails:getPaymentDetails(state), 
	shipmentDetails:getShipmentDetails(state), 
	orderSummary:getOrderSummary(state), 
	isFetching:getFetchingStatus(state),
	otherItems:getOrderItems(state),
	item:getItem(state)
		}),
	(fetchOrderDetails)
	)(purchaseDetailsContainer);