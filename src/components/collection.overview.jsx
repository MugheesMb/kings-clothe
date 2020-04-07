import React from 'react';
import './collection.overview.scss';
import {connect} from 'react-redux';
import Shopcollection  from './shop-collection';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview} from  '../redux/shop.selector';


const CollectionOverview = ({collections}) =>(


    <div className='collections-overview' >

{
                collections.map(({id, ...otherCollectionProps}) => (
                  <Shopcollection key={id} {...otherCollectionProps}/>

                ))
            }


    </div>


);
const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverview);