import React from 'react';
import { useParams, useLocation} from 'react-router-dom';


const Blog = () => {
    const location = useLocation();
    const {title} =  useParams();

  
  return (
    <div>
    <p>{title} Pages</p>
   
    <p>{location.state.body.slice(0, 100)}</p>
    <p>{location.state.body.slice(101, 200)}</p>
   
    </div>
  )
}

export default Blog