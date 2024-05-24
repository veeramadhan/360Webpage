import React from 'react'
import "./MainPage.css"
import college from '../../Assets/college.png'
import school from '../../Assets/school.png'
import Wedding from '../../Assets/wedding.png'
import friends from '../../Assets/friends.png'
import employee from '../../Assets/employee.png'
import family from '../../Assets/family.png'





const MainPage = () => {
  return (

   <>
   <div className='mainPageContent'>
    <div className='container row mainContent'>
 
    <div className='col-lg-4 mt-5'>
    <img src={college} height={"60px"} width={"60px"}/>
    <h4>Industrial Visit</h4>
    <p>"Explore industry insights and career opportunities with our well-organized college industrial visits. Enhance your academic journey with real-world experiences."</p>
    </div>

    <div className='col-lg-4 mt-5'>
    <img src={Wedding} height={"60px"} width={"60px"}/>
    <h4>Couples Trip</h4>
    <p>"Romantic getaways designed for couples seeking intimacy and adventure. Discover new destinations and make every moment special."</p>
    </div>


    <div className='col-lg-4 mt-5'>
    <img src={school} height={"60px"} width={"60px"}/>
    <h4>School Trip</h4>
    <p>"Make learning fun and memorable with our educational and adventurous school trips. Safe, engaging, and designed to inspire young minds."</p>
    </div>

 
    </div>


    <div className='container row mainContent1'>
 
 <div className='col-lg-4'>
 <img src={family} height={"60px"} width={"60px"}/>
 <h4>Family Trip</h4>
 <p>"Embark on a memorable journey with your loved ones on our family-friendly trips. Fun, relaxation, and adventure for all ages in perfect harmony."</p>
 </div>

 <div className='col-lg-4'>
 <img src={friends} height={"60px"} width={"60px"}/>
 <h4>Friends Trip</h4>
 <p>"Create unforgettable memories with friends on our exciting and customizable trips. Adventure, relaxation, and fun tailored just for you."</p>
 </div>

 <div className='col-lg-4'>
 <img src={employee} height={"60px"} width={"60px"}/>
 <h4>Company Trip</h4>
 <p>"Explore industry insights and career opportunities with our well-organized college industrial visits. Enhance your academic journey with real-world experiences."</p>
 </div>

 </div>
</div>
    </>
  )
}

export default MainPage