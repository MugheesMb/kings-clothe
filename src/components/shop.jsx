import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from './collection.overview'; 
import CollectionPage from './collection';
import { createStructuredSelector } from 'reselect';
import { connect} from 'react-redux';
import { fetchCollectionsStartAsync } from '../redux/shop.actions';
import WithSpinner from '../spinner/spinner';
import { selectIsCollectionFetching , selectIscollectionsLoaded } from '../redux/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {


    componentDidMount(){
        
   const { fetchCollectionsStartAsync} = this.props;
   fetchCollectionsStartAsync();
  


    }


    render(){
        const {match , isCollectionFetching , isCollectionsLoaded } = this.props;
        

return(

     <div className='shop-page'>
            
            < Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } />
            < Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}  /> } />
        </div>
    
);
 
 }}

 const mapStateToProps = createStructuredSelector({
   isCollectionFetching: selectIsCollectionFetching,
   isCollectionsLoaded: selectIscollectionsLoaded
 });

 const mapDispatchToProps = dispatch => ({

   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

 });

export default connect(mapStateToProps,mapDispatchToProps)(Shop);