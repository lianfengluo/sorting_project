import React, { useState, useEffect, lazy, Suspense } from 'react';
import { algos } from './Settings';

const BarChart = lazy(() => import('./BarChart'));
const Settings = lazy(() => import('./Settings'));
const default_size: number = 50;
const default_speed: number = 500;
const default_max: number = 250;
const min_array_value: number = 20;

const Content: React.FC<{}> = () => {
  const [arraySize, setArraySize] = useState<number>(default_size);
  const [speed, setSpeed] = useState<number>(default_speed);
  const [max, setMax] = useState<number>(default_max);
  const [algoOption, setAlgoOption] = useState<string>(algos[0]);
  const [array, setArray] = useState<number[]>([])
  const generate = (arraySize: number, max: number) => {
    const array_data: number[] = [];
    for (let i = 0; i < arraySize; ++i) {
      const number = Math.floor(Math.random() * max);
      array_data.push(number < min_array_value ? min_array_value : number);
    }
    setArray(array_data);
  }
  useEffect(() => {
    generate(arraySize, max);
  }, [arraySize, max, speed, algoOption])
  return (
    <Suspense fallback={()=><h3>Loading...</h3>}>
      <div className="container">
        <Settings setArraySize={setArraySize} setSpeed={setSpeed} setMax={setMax} 
          regenerate={generate} setOption={setAlgoOption} 
          default_size={default_size} default_max={default_max} 
          default_speed={default_speed}/>
        <BarChart array={array} speed={speed} setArray={setArray} algoOption={algoOption}/>
        <div className="modal" aria-hidden="true" data-backdrop="true" 
          data-keyboard="true">
          Done!!!
        </div>
      </div>
    </Suspense>
  )
}

export default Content
