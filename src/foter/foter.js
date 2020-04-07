import React from 'react';
//import './foter.scss';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';

const Foter = () => {

    return(
     <div>
          <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
          
        ),
        icon: (
            <img src="https://simpleicons.org/icons/facebook.svg" />
            
          ),
          icon: (
            <img src="https://simpleicons.org/icons/faceit.svg" />
            
          ),
        url: 'https://yuque.com',
        openExternal: true,
        theme : 'light' ,
      },
    ]}
    bottom="Made with ❤️ by MUGY"
  />
      </div>
    );
}
export default Foter;