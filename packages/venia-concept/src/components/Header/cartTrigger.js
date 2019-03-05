import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { toggleCart } from 'src/actions/cart';
import CartCounter from './cartCounter';
import Icon from 'src/components/Icon';
import ShoppingCartIcon from 'react-feather/dist/icons/shopping-cart';
import classify from 'src/classify';
import defaultClasses from './cartTrigger.css';

export class Trigger extends Component {
    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.shape({
            root: PropTypes.string
        }),
        toggleCart: PropTypes.func.isRequired,
        itemsQty: PropTypes.number
    };

   
    render() {
        const {
            children,
            classes,
            toggleCart,
            cart: { details }
        } = this.props;
        const { cartIcon } = this;
        const itemsQty = details.items_qty;

        return (
            <button
                className={classes.root}
                aria-label="Toggle mini cart"
                onClick={toggleCart}

            >
                {cartIcon}
                {children}
                <CartCounter counter={itemsQty ? itemsQty : 0} />
            </button>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = {
    toggleCart
};

export default compose(
    classify(defaultClasses),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Trigger);