import React, { useState } from 'react'
import Card from "./card";
import Addcard from './addcard';
import FormTrip from '../Tripform/FormTrip';
import "./card.css"

const Home = ({TripHeading}) => {
    const [showvar,setShowvar]=useState(false);
    const [posts, setPosts] = useState([
        {id:1, tripimg:require('../pics/banaras.jpg'), tripname:'Banaras', tripdate:'13-12-23', tripprice:'4140'},
        {id:2, tripimg:require('../pics/udaipur.jpg'), tripname:'Udaipur', tripdate:'26-2-21', tripprice:'1000'},
    ]);
    // console.log(banaras)
    const addPost = (tripimg, tripname, tripdate, tripprice) => {
        const newPost = {
            id: Date.now(),
            tripimg: tripimg,
            tripname: tripname,
            tripdate: tripdate,
            tripprice: tripprice,
        };
        setPosts([...posts, newPost])
    };

    const justCheck = (tripname) =>{
        console.log('working fine')
        TripHeading(tripname)
      }
    const showForm=()=>{
        // console.log(showvar)
        setShowvar(true)
        // addPost()
        
    }
    const hideform=() =>{
        setShowvar(false)
    }
  return (<>
  <div className='intro-bg'>
        {/* <img src={bg} alt='..?'/> */}
    </div>
<div id='Home-add-trip' className='trip-content'>
    <div className='heading'>- All Trips -</div>
    <div className='all-trips'>
        {posts.map((post) => (
            <Card key = {post.id} tripimg={post.tripimg}  tripname = {post.tripname} tripdate={post.tripdate} tripprice={post.tripprice} />
        ))}
             {/*   */}
        <Addcard newtitle={justCheck} viewform={showForm}/>
        {
            showvar&&<FormTrip hideform={hideform} addingTrip ={addPost}/>
        }
        
    </div>
</div>
    </>
  )
}

export default Home