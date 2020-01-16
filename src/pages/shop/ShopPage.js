import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';
import { selectIsCollectionsFetching } from '../../redux/shop/shop-selectors';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from '../collection/CollectionPage';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    };

    render() {
        const { match, isCollectionsFetching } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={props => (<CollectionOverviewWithSpinner isLoading={isCollectionsFetching} { ...props } />)}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => (<CollectionPageWithSpinner isLoading={isCollectionsFetching} { ...props } />)}
                />
            </div>
        )
    };


};



const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);