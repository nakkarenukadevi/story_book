import {createBrowserRouter} from 'react-router-dom'
import App from '../../App';
import Card from '../../stories/Card';
import {Button} from '../../stories/Button';
import Cart from "../Cart";
import Home from '../Home';


const router= createBrowserRouter ([
    {  path:"/",
        element:<App/>,
      
        children:[
          
            {
                path:"/",
                element:<Home/>
            }
            ,{
                path:'/button',
                element:<Button/>
            },

            {
                path:"/cart",
                element:<Cart/>
            }
        ]
,
    }
])
export default router;
