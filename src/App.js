import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [name, setname] = useState('');
  let [roll, setroll] = useState('');
  let [sub1, setsub1] = useState('');
  let [sub2, setsub2] = useState('');
  let [sub3, setsub3] = useState('');
  let [sub4, setsub4] = useState('');
  let [sub5, setsub5] = useState('');
  let [total, settotal] = useState('')
  let [max, setmax] = useState('');
  let [min, setmin] = useState('');
  let [gradee, setgradee] = useState('');
  let [result, setresult] = useState('');
  let [per, setper] = useState('');
  let [temp, settemp] = useState([]);
  let [demo1, setdemo1] = useState([]);
  let grade, arr = [], res, color;

  let submit = () => {

    let sum = sub1 + sub2 + sub3 + sub4 + sub5;
    settotal(sum);

    arr.push(sub1);
    arr.push(sub2);
    arr.push(sub3);
    arr.push(sub4);
    arr.push(sub5);

    let percent = sum / 5;
    setper(percent);

    let maxx = Math.max(sub1, sub2, sub3, sub4, sub5);
    setmax(maxx);

    let minn = Math.min(sub1, sub2, sub3, sub4, sub5);
    setmin(minn);

    if (percent > 90) {
      grade = "A+";
    }
    else if (percent > 80) {
      grade = "A";
    }
    else if (percent > 70) {
      grade = "B+";
    }
    else if (percent > 60) {
      grade = "B";
    }
    else if (percent > 50) {
      grade = "C+";
    }
    else {
      grade = "C";
    }
    setgradee(grade);

    let demo = arr.filter((ele) => {
      return ele < 35;
    })

    if (demo.length == 0) {
      res = "Pass";
    }
    else if (demo.length == 1 || demo.length == 2) {
      res = "ATKT";
    }
    else if (demo.length >= 3) {
      res = "Fail"
    }
    setresult(res);


    if (res === "Pass") {
      color = "green";
    }
    else if (res === "ATKT") {
      color = "blue";
    }
    else{
      color = "red";
    }

    settemp([...temp, { name, roll, sub1, sub2, sub3, sub4, sub5, maxx, minn, sum, percent, grade, res, color }])
    setdemo1([...temp, { name, roll, sub1, sub2, sub3, sub4, sub5, maxx, minn, sum, percent, grade, res, color }]);

  }

  let p = () => {
    let a = demo1.filter((ele) => {
      return (ele.res == "Pass")
    })
    settemp(a)
  }

  let f = () => {
    let a = demo1.filter((ele) => {
      return (ele.res == "Fail")
    })
    settemp(a)
  }

  let t = () => {
    let a = demo1.filter((ele) => {
      return (ele.res == "ATKT")
    })
    settemp(a) 
  }

  let all = () => {
    settemp(demo1);
  }

  let n = () => {
    let a = demo1.filter((ele) => {
      return (ele.percent > 90)
    })
    settemp(a) 
  }

  let e = () => {
    let a = demo1.filter((ele) => {
      return (ele.percent > 80)
    })
    settemp(a) 
  }

  let ev = () => {
    let a = demo1.filter((ele) => {
      return (ele.percent > 70)
    })
    settemp(a) 
  }



  return (
    <>

      <div className="main">
        <div className='header'>
          <h1>Student Result</h1>
        </div>
        <div className='middle'>
          <table align='center'>
            <tr>
              <td>Enter Your Name : </td>
              <td><input type="text" name="" id="" onChange={(e) => { setname(e.target.value) }} /></td>
            </tr>
            <tr>
              <td>Enter Your Roll No : </td>
              <td><input type="text" name="" id="" onChange={(e) => { setroll(e.target.value) }} /></td>
            </tr>
            <tr>
              <td>Enter Sub1</td>
              <td><input type="text" name="" id="" onChange={(e) => { setsub1(parseInt(e.target.value)) }} /></td>
            </tr>
            <tr>
              <td>Enter Sub2</td>
              <td><input type="text" name="" id="" onChange={(e) => { setsub2(parseInt(e.target.value)) }} /></td>
            </tr>
            <tr>
              <td>Enter Sub3</td>
              <td><input type="text" name="" id="" onChange={(e) => { setsub3(parseInt(e.target.value)) }} /></td>
            </tr>
            <tr>
              <td>Enter Sub4</td>
              <td><input type="text" name="" id="" onChange={(e) => { setsub4(parseInt(e.target.value)) }} /></td>
            </tr>
            <tr>
              <td>Enter Sub5</td>
              <td><input type="text" name="" id="" onChange={(e) => { setsub5(parseInt(e.target.value)) }} /></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="button" value="Submit" onClick={submit} />
                <input type="button" value="Pass" onClick={p} />
                <input type="button" value="Fail" onClick={f} />
                <input type="button" value="ATKT" onClick={t} />
                <input type="button" value="All" onClick={all} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="button" value="90+" onClick={n} />
                <input type="button" value="80+" onClick={e} />
                <input type="button" value="70+" onClick={ev} />
              </td>
            </tr>
          </table>
        </div>
        <div className='foot'>
          <table border={1} align='center'>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Sub1</th>
              <th>Sub2</th>
              <th>Sub3</th>
              <th>Sub4</th>
              <th>Sub5</th>
              <th>Max</th>
              <th>Min</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
            {
              temp.map((ele) => {
                return (
                  <tr style={{ backgroundColor: ele.color , color:"white"}}>
                    <td>{ele.name}</td>
                    <td>{ele.roll}</td>
                    <td>{ele.sub1}</td>
                    <td>{ele.sub2}</td>
                    <td>{ele.sub3}</td>
                    <td>{ele.sub4}</td>
                    <td>{ele.sub5}</td>
                    <td>{ele.maxx}</td>
                    <td>{ele.minn}</td>
                    <td>{ele.sum}</td>
                    <td>{ele.percent}</td>
                    <td>{ele.grade}</td>
                    <td>{ele.res}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>

    </>
  );
}

export default App;
