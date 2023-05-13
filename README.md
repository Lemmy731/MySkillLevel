# MySkillLevelDashboard
## My Skill level dashbord built with react typescript
### install react using typescript 
npx create-react-app my-app --template typescript
create component folder and inside the folder create a landpage.tsx file :+1:

```
{
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
}
```

create a landpage.css file in the component folder

```
{
  .sidebar{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
height: 300px;
margin-right: 15px;
}
.col_overContainer{
    margin-top: 30px;
}
.name_icon{
display: flex;
align-items: center;
width: 150px;

}
.parent_container{
display: flex;
}
.col_hr{
    border: none; 
    border-left: 1px solid black; 
    height: 500px; 
    

}
.overall{
    /* margin-left: 50px;
    margin-right: 50px; */

    width: 90vw;
    padding-left: 20px;
    margin: 20px;
    border-radius: 25px;  
    box-shadow: 1px 5px 15px #888888;  
    margin-top: 100px;
}
.blueBg{
    width: 90vw;
    padding-left: 20px;
    margin: 20px;
    border-radius: 25px;  
    box-shadow: 1px 5px 15px #888888;  
    background-color: #200764;
    
}
.col_input{
   width: 670px;
   border-radius: 5px;
   padding: 10px;
   border: 2px solid #37cad6;
   margin-right: 10px;

}
.col_button{
    background-color: #37cad6;
    border-radius: 50px;
    border: none;
    width: 100px;
    margin-top: 20px;
    padding: 14px;
    margin-right: 10px;
}
.step{
    margin-left: 20px;
}
.second_hr{
    width: 660px;
    padding-right: 10px;
    /* border-left: 20px; */
    margin-left: 20px;
}

.input_button_container{
    display: flex;
    flex-direction: column;
    width: 700px;
    justify-content: flex-end;
    align-items: flex-end;
}
.col_hrOne{
    /* padding-top: 50px; */
    width: 800px;
    padding-right: 60px;

    

}
.col_containerDiv{
 /* margin-top: 100px; */
 
}
.col_hr_container{
    /* background-color: blue;
    width: 200px; */
    /* margin-bottom: 100px; */
    margin-top: -17px;
}
.col_text{
    width: 80px;
    margin-right: 20px;
}
.col_iconContainer{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #4d3d7a;
    display: flex;
    align-items: center;
    justify-content: center;
}
.col_iconContainer_one{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #37cad6;
    display: flex;
    align-items: center;
    justify-content: center;
}
.whiteText{
    color: white;
}
.blackText{
    color: black;
}
}
```





