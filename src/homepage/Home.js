import React from 'react';
import Menu from '../components/menu';
import Pic from './pic';
import { HomeContainer} from './Home.style';
import { Headinga} from './Home.style';

const Home = () => (


        <HomeContainer>
<Menu/>  

       
                    
          
 <div>
<Headinga>

        <h1 >We Have Everything</h1>

</Headinga>
       </div>       
          
             <Pic/>
        

         </HomeContainer>

);

export default Home;