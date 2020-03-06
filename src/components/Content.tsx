import React, { useState, useEffect, lazy, Suspense } from 'react';
import { algos } from 'components/Settings';

const BarChart = lazy(() => import('./BarChart'));
const Settings = lazy(() => import('./Settings'));
const defaultSize: number = 50;
const defaultSpeed: number = 500;
const defaultMax: number = 250;
const minArrayValue: number = 20;

const Content: React.FC<{}> = () => {
  const [arraySize, setArraySize] = useState<number>(defaultSize);
  const [speed, setSpeed] = useState<number>(defaultSpeed);
  const [max, setMax] = useState<number>(defaultMax);
  const [algoOption, setAlgoOption] = useState<string>(algos[0]);
  const [array, setArray] = useState<number[]>([])
  const generate = (arraySize: number, max: number) => {
    const array_data: number[] = [];
    for (let i = 0; i < arraySize; ++i) {
      const number = Math.floor(Math.random() * max);
      array_data.push(number < minArrayValue ? minArrayValue : number);
    }
    setArray(array_data);
  }
  useEffect(() => {
    generate(arraySize, max);
  }, [arraySize, max, speed, algoOption])
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <div className="container">
        <Settings setArraySize={setArraySize} setSpeed={setSpeed} setMax={setMax} 
          regenerate={generate} setOption={setAlgoOption} 
          defaultSize={defaultSize} defaultMax={defaultMax} 
          defaultSpeed={defaultSpeed}/>
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
