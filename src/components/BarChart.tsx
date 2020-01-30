import React from 'react';
import Bar from './Bar';
import { algos } from './Content';
import { bubbleSort, quickSort, mergeSort, heapSort } from './Algorithms'

interface Props {
  array: number[];
  speed: number;
  algoOption: string;
  setArray?: React.Dispatch<React.SetStateAction<number[]>>;
}


const BarChart: React.FC<Props> = ({ array, speed, setArray, algoOption }) => {
  const width: number = (1000 / array.length);
  const refsArray: (HTMLDivElement | null)[] = [];
  const changeBarValue = async (i: number, value: number): Promise<void> => {
    const node = refsArray[i];
    if (node) {
      node.style.backgroundColor = "rgba(0, 140, 255, 0.712)";
      node.style.height = value.toString() + 'px';
      await new Promise((resolve, _) => {
        setTimeout(()=>resolve(), 300 / speed)
      })
      node.textContent = value.toString();
      node.style.backgroundColor = "rgb(104, 104, 104)";
    }
  }
  const sortStart = () => {
    if (algoOption === algos[0]) {
      bubbleSort(array, changeBarValue);
    } else if (algoOption === algos[1]) {
      quickSort(array, changeBarValue);
    } else if (algoOption === algos[2]) {
      mergeSort(array, changeBarValue);
    } else {
      heapSort(array, changeBarValue);
    }
  }
  return (
    <>
      <div className="bar-chart">
        {array.map((v, k) =>
          <Bar speed={speed} key={k} value={v} width={width} ref={ref => {
            refsArray[k] = ref;
          }} />
        )}
      </div>
      <div className="sorting-button" onClick={() => sortStart()}>
        <button>Start Sorting</button>
      </div>
    </>
  )
}


export default BarChart;