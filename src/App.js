import React from 'react';
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfilCard'
import Share from './components/Share'
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    var url = "https://api.meetworks.in/users/get_unique_jobseeker_profile"
    var conf = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "jobseeker_id": "614b410c2c4b197356a37f18"
    }
    axios.post(url, conf).then((res) => {
      console.log(res.data[0])
      setUser(res.data[0])
    }).catch((err) => console.log("Error : ", err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <section>
        {user ? <div className='wrapper'>
          <ProfileCard user={user} />
          <div className='share__div'><Share /></div>
        </div> : <div className='loader'>Loading...</div>}
      </section>
    </div>
  );
}

export default App;
