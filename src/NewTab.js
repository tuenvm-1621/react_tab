import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import {Japanese} from '../node_modules/flatpickr/dist/l10n/ja'
import '../node_modules/flatpickr/dist/flatpickr.min.css';

export default props => {
  const [count, setCount] = useState(0);
  const [value, setVaue] = useState('')
  const { handleNewTab, label } = props;
  const [date, setDate] = useState(new Date());
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };
  const myRef = React.createRef();
  const handleOnClick = () => {
    myRef.current.flatpickr.open();
  }
  // const handleonChange = (e) => {
  //   console.log(e)
  //   debugger
  // }
  return (
    <div>
      <h1>HomePage {label}</h1>
      <button onClick={() => handleNewTab()}>Click to open new tab</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h3>{count}</h3>
      <hr />
      <div style={styles}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        {/* {/* <div style={{display: 'flex'}}> */}
        <input value={value}/>
        <button onClick={handleOnClick} />
        <Flatpickr
          style={{visibility: 'hidden'}}
          ref={myRef}
          onBlur={(e) => {
            debugger
            setVaue(e.currentTarget.value)}}
          onChange={(e) => {setVaue(`${e[0].getFullYear()}/${e[0].getMonth()+1}/${e[0].getDate()}`)}}
          options={{
            locale: Japanese,
            dateFormat: 'Y/m/d'
          }}
        />
        {/* </div> */}
      </div>
    </div>
  );
};
