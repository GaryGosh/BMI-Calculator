import React from 'react'
import List from './List'

function ShowBmi({bmiScore}) {

  const checkForBmi = () => {
    if(bmiScore < 18.5) {
      return 'Under weight'
    } else if((bmiScore >= 18.5)&&(bmiScore <= 24.9)){
      return 'Normal weight'
    }else if((bmiScore >= 25)&&(bmiScore <= 29.9)){
      return 'Over weight'
    }else if(bmiScore > 30){
      return 'Obese'
    }else{
      return '';
    }
  }

 


  return (
    <>
    <div className='bmi-score'>
      
      <div className='show-bmi'>
       Your BMI  SCORE  : {bmiScore}
      </div>
      <div className='bmi-class'>
          Your bmi status 
      </div>
        <div className='bmi'>
           {checkForBmi()}
        </div>
        
      </div>

      <List list={checkForBmi()} />
    </>
  )
}

export default ShowBmi