import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HouseIcon from '@mui/icons-material/House';
import LanguageIcon from '@mui/icons-material/Language';
import "./Landingpage.css";

const Landingpage = ({bg}:
    {bg:string}) => {

  return (
<div className='col_overContainer'>
    <div className={bg === "blue"? "blueBg" :'overall'}>

    <div className='col_containerDiv'>
        <header>
            <h1 className={bg=== "blue"? "whiteText" : "blackText"}>My Skill Level</h1>
            <p className={bg=== "blue"? "whiteText" : "blackText"}>answer the following question to begin your plan</p>
            <hr className='col_hrOne'/>
        </header>
    </div>  
   
 <div className='parent_container'>

    <div className='sidebar'>
        <div className='name_icon'>
        
            <p className='col_text whiteText'>Your Name <br/> first,middle and last name</p>
            <div className='col_iconContainer_one'>
            <AccountCircleIcon/>
            </div>
           
        </div>

        <div className='name_icon'>
            <p className='col_text whiteText'>City Location</p>
            <div className='col_iconContainer'>
            <AssignmentIndIcon/>
            </div>
           
        </div>

        <div className='name_icon'>
            <p className='col_text whiteText'>Telephone Number</p>
            <div className='col_iconContainer'>
            <CallIcon/>
            </div>
            
        </div>

        <div className='name_icon'>
            <p className='col_text whiteText'>House Address</p>
            <div className='col_iconContainer'>
            <HouseIcon/>
            </div>
           
        </div>

        <div className='name_icon'>
            <p className='col_text whiteText'>Country of Residence</p>
            <div className='col_iconContainer'>
            <LanguageIcon/>
            </div>
           
        </div>
    </div>

    <div className='col_hr_container'>
      <hr className='col_hr'/>
    </div>
<div className='step'>
     <div className='col_stepContainer'>
        <p className={bg=== "blue"? "whiteText" : "blackText"}>step 1/5</p>
       <h1 className={bg=== "blue"? "whiteText" : "blackText"}>Let start with your name</h1>
       <p  className={bg=== "blue"? "whiteText" : "blackText"}>please fill in the details below</p>
       <hr className='second_hr'/>
    </div>
    <div>
       <p className={bg=== "blue"? "whiteText" : "blackText"}>enter your name</p>
       <div className='input_button_container'>
       <input className='col_input'/>
       <button className='col_button'>next step</button>
       </div>
       
    </div>
</div>
    

</div>
</div>
</div>
  )
}

export default Landingpage