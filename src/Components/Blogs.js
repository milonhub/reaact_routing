import React, {useState} from 'react'
import {blogsData} from './Blogsdata';
import { Link } from 'react-router-dom';
const Blogs = () => {

  const [bdata] = useState(blogsData); 
  

    const truncatestring = (str, num) => {
      if(str.length >100) {
        return str.slice(0, num) + "...."
      } else {
        return str;
      }
    }
  return (
    <div>
        <section>
        {bdata.map((data) => {
          const {body, id, title} = data;
          return (<article key={id}>
            <h3>{title}</h3>
            <p>{truncatestring(body, 100)}</p>
            <Link to= {title} state={{title, id, body}}> Learn More...</Link>
          </article>)
        })}
        </section>
        
    </div>
  )
}

export default Blogs;