import React from 'react';
import './shop-collection.scss';
import CollectionItem from './collection-item';

    

const Shopcollection = ({title , items}) => (

    <div className='shop_collection'>
        <h1 className='title'> {title.toUpperCase()}</h1>
<div className='collection'>
    {items
    .filter((item,id)=>id<4)
    .map((item)=> (
        <CollectionItem key={item.id} item={item}/>
        ))}
        
</div>


    </div>

);

export default Shopcollection;