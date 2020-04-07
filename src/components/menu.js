import React from 'react';
import Menuitem from './MenuItem';
import './menu.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory.selector';

const Menu  = ({sections}) => (
        <div className='menu'>

            {

           // this.state.section.map(({id , imageUrl ,title,size,linkUrl} )=> (
             //   <Menuitem  key={id} title={title} imageUrl={imageUrl}  size={size} linkUrl={linkUrl} />

                sections.map(({ id, ...otherSectionProps }) => (
                    <Menuitem key={id} {...otherSectionProps} />
            )

            )
            }
            </div>
        );
 
        const mapStateToProps = createStructuredSelector({
            sections: selectDirectorySections
        })

export default connect(mapStateToProps)(Menu);