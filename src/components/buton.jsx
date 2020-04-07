import React from 'react';

import './buton.scss';

const Buton = ({children,isGoogleSignIn ,inverted, ...otherProps})=> (


    < button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} buton`}
    
    {...otherProps}>
{children}

    </button>



);

export default Buton;