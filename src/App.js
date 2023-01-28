import { useState } from 'react';
 
// function App() {
//   let dt = new Date ()
//   const [value, setValue] = useState('');
//   const [value2, setValue2] = useState('');
//   const [value3, setValue3] = useState('');
//   return <div>
//   <input value={value} onChange={event => setValue(+event.target.value)} />
//   <input value={value2} onChange={event => setValue2(+event.target.value)} />
//   <button onClick={() => setValue3(value.slice(0,2) - value2.slice(0,2) )}>разница</button>
//   <p>result: {value3}</p>
//   </div>;
// } 
   
// function App() {
//   const [checked, setChecked] = useState(false);
//   let message;
//   if(checked){
//     message =<div><h2>вам есть 18 </h2>
//     <p>ура</p></div>;
//   }
//   else if(!checked){
//     message = <h2>вам нет 18</h2>;
//   }

//   return <div>
//     <p>вам есть 18?</p>
//   <input type="checkbox" checred={checked} onChange={() => setChecked(!checked)} />
//   <div>{message}</div>
//   </div>;
// } 
 
// function App() {
//   const [value, setValue] = useState('');

//   return <div>
//     <select value={value} onChange={event => setValue(event.target.value)}>
//       <option value="1">от 1 до 12</option>
//       <option value="2">от 13 до 17</option>
//       <option value="3">от 18 до 25</option>
//       <option value="4">либо старше 25 лет</option>
//     </select>
//     <p>
//       {value === '1' && 'младшая группа'}
//       {value === '2' && 'средняя группа'}
//       {value === '3' && 'взрослая группа'}
//       {value === '4' && 'пожилая группа'}
//     </p>
//   </div>;}

function App() {
 const [value, setValue] = useState(0);
  function changeHandler(event){
  setValue(event.target.value);
  }
  let message;
    if(1){
      message =<p>ура</p>;
    }
  return <div>
    <p>inglish</p>
  <input type="radio" name="radio" value="1" checked={value === '1' ? true : false} onChange={changeHandler}
  />
   <div>{message}</div>
   <p>inglqwqish</p>
  <input type="radio" name="radio" value="2" checked={value === '2' ? true : false} onChange={changeHandler}
  />
  <p>ingliseweh</p>
  <input type="radio" name="radio" value="3" checked={value === '3' ? true : false} onChange={changeHandler}
  />
  </div>
}
export default App;