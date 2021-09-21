import React, { useState, useEffect, useRef } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const inputRef = useRef();
  const prevName = useRef('');

  function focus() {
    inputRef.current.focus();
  }

  useEffect( () => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={ e => setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}


