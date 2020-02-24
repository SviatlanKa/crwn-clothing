import React, { useEffect, lazy, Suspense } from 'react';
import ErrorBoundary from '../../components/error-boundary/ErrorBoundary';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route
                        exact path={`${match.path}`}
                        component={CollectionOverviewContainer}
                    />
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionPageContainer}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>

    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);