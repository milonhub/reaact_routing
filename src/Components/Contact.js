import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

    const navigate = useNavigate();
  return (
    <div>
        <h2>Contact pages</h2>
        
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis dolorem fuga id iste dolor molestias dignissimos nemo. Nesciunt ducimus incidunt iusto magni ab! Nemo nam voluptates voluptatum illo suscipit.
        </p>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis dolorem fuga id iste dolor molestias dignissimos nemo. Nesciunt ducimus incidunt iusto magni ab! Nemo nam voluptates voluptatum illo suscipit.
        </p>
      <button onClick={()=>{
       navigate("/");
      }}>Go to the Home page</button>
    </div>
  )
}

export default Contact