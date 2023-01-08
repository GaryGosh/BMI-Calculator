import React, { useState } from 'react'
import Form from './components/Form'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ShowBmi from './components/ShowBmi'

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const bmiValues = (w, h, n, a) => {
    // console.log(w,h);
    setWeight(w);
    setHeight(h);
    setName(n);
    setAge(a);
  }
  // console.log(weight, height)

  const bmi = (weight / (height * height)).toFixed(2);
  const data = { name, age }
  return (
    <>
      <div className='navbar nav-bmi' >BMI Calculator </div>
      <div className='main-div'>

        <div className='top'>
          <Form getdata={bmiValues} />
          <div className='progressBar' style={{ width: 250, height: 200 }}>
            <h2 className='progHeader'>Health Risk</h2>
            <CircularProgressbar
              value={bmi < 18.5 ? 80 : bmi > 24.9 ? 85 : 25}
              text={bmi < 18.5 ? 'high' : bmi > 24.9 ? 'high' : 'normal'}
              strokeWidth={8}
              background
              backgroundPadding={6}
            />
            {/* <CircularProgressbar value={bmi < 18.5 ? 80 : bmi >24.9  ? 85 : 25} text={bmi < 18.5 ? 'high' : bmi >24.9 ? 'high' : 'normal'}  /> */}
          </div>
        </div>
        <ShowBmi bmiScore={bmi} data={data} />
      </div>
    </>
  )
}

export default App

