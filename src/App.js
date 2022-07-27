import React, { useState } from 'react'
import Form from './components/Form'

import ShowBmi from './components/ShowBmi'

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  
const bmiValues=(w,h)=>{
  // console.log(w,h);
  setWeight(w);
  setHeight(h);

}
// console.log(weight, height)

const bmi = (weight / (height * height)).toFixed(2);

  return (
    <>
    <div className='navbar nav-bmi' >BMI Calculator </div>
    <div className='main-div'>
      <Form getdata={bmiValues} />
      <ShowBmi bmiScore={bmi}/>
    </div>
     
 
    </>
  )
}

export default App

