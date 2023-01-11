import React, { useState } from "react";
import Form from "./components/Form";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ShowBmi from "./components/ShowBmi";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const bmiValues = (w, h, n, a) => {
    // console.log(w,h);
    setWeight(w);
    setHeight(h);
    setName(n);
    setAge(a);
  };
  // console.log(weight, height)

  const bmi = (weight / (height * height)).toFixed(2);
  const data = { name, age };
  return (
    <>
      <div className="navbar nav-bmi">BMI Calculator </div>
      <div className="main-div">
        <div className="top">
          <Form getdata={bmiValues} />
          <div className="prog-desc">
            <div className="progressBar" style={{ width: 200, height: 200 }}>
              <h2 className="progHeader">Health Risk</h2>
              <CircularProgressbar
                value={bmi < 18.5 ? 80 : bmi > 24.9 ? 85 : 10}
                text={bmi < 18.5 ? "High" : bmi > 24.9 ? "High" : "Normal"}
                background
                backgroundPadding={6}
              />

              {/* <CircularProgressbar value={bmi < 18.5 ? 80 : bmi >24.9  ? 85 : 25} text={bmi < 18.5 ? 'high' : bmi >24.9 ? 'high' : 'normal'}  /> */}
            </div>
            <div className="progDesc">
              {bmi < 18.5
                ? "Advice : Eating at least 5 portions of a variety of fruit and vegetables every day reduces the risk"
                : bmi > 24.9
                ? "Advice :Eat a healty ,reduced-calorie diet and exercise regularly reduces the risk"
                : ""}
            </div>
            {/* uncomment the below div and add your tip based on the bmi */}
            {/* <div className="progDesc">
              {bmi < 18.5
                ? "Tip : Run man run"
                : bmi > 24.9
                ? "tip : eat chicken mutton pulav !"
                : ""}
            </div> */}
          </div>
        </div>
        <ShowBmi bmiScore={bmi} data={data} />
      </div>
    </>
  );
}

export default App;
