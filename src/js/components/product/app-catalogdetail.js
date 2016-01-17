import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';
import CartButton from '../cart/app-cart-button';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';


function getCatalogItem ( props ) {
    let item = AppStore.getCatalog().find( ({ id }) => id === props.params.item );
    return {item};
}

const CatalogDetail  = (props) => {
    return (
        <div>
            <h4>{ props.item.title }</h4>
            <img src="http://placehold.it/250x250" className="img-responsive" />
            <p> { props.item.description } </p>
            <p> { props.item.cost } <span
                className="text-success">
                { props.item.qty && `(${props.item.qty} in cart)`}
            </span>
            </p>
            <div className="btn-group">
                <Link to="/" className="btn btn-default">Continue Shopping</Link>
                <CartButton
                    handler={AppActions.addItem.bind(null, props.item)}
                    txt="Add" />
            </div>
        </div>
    )
}

export default StoreWatchMixin(CatalogDetail, getCatalogItem);