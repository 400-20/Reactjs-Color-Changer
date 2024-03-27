import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [back, setBack] = useState('black');
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = back;
  }, [back]);
  useEffect(() => {
    const child = document.querySelector('.child:first-child');
    child.addEventListener('click', function () {
      setBack('blue');
    });
  });
  useEffect(() => {
    const child = document.querySelector('.child:nth-child(2)');
    child.addEventListener('click', function () {
      setBack('Red');
    });
  });
  useEffect(() => {
    const child = document.querySelector('.child:nth-child(3)');
    child.addEventListener('click', function () {
      setBack('pink');
    });
  });
  useEffect(() => {
    const child = document.querySelector('.child:nth-child(4)');
    child.addEventListener('click', function () {
      setBack('peachpuff');
    });
  });
  return (
    <>
      <div className="parent">
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
      </div>
    </>
  );
}

export default App;
