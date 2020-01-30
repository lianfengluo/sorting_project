import React, { useEffect } from 'react';
import Bar from './Bar';
import { algos } from './Settings';
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
  let rerender: boolean = false;
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    rerender = false;
    return ()=>{rerender = true};
  },[array]);
  const changeBarValue = async (i: number, value: number): Promise<void> => {
    const node = refsArray[i];
    if (node) {
      const old_bgColor:string = node.style.backgroundColor;
      node.style.backgroundColor = "rgba(0, 140, 255, 0.712)";
      node.style.height = value.toString() + 'px';
      await new Promise((resolve, _) => {
        setTimeout(()=>resolve(), 3000 / speed)
      })
      node.textContent = value.toString();
      node.style.backgroundColor = old_bgColor;
    }
  }

  const sortStart = async() => {
    if (algoOption === algos[0]) {
      await bubbleSort(array, changeBarValue);
    } else if (algoOption === algos[1]) {
      await quickSort(array, changeBarValue);
    } else if (algoOption === algos[2]) {
      await mergeSort(array, changeBarValue);
    } else {
      await heapSort(array, changeBarValue);
    }
    const container: HTMLDivElement|null = document.querySelector(".container");
    const modal: HTMLDivElement|null = document.querySelector(".modal");
    if (container && modal && !rerender) {
      await new Promise((resolve, _) => {
        setTimeout(()=>{
          resolve()
        }, 100);
      });
      modal.style.opacity = "1";
      container.className += " modalBlur";
      await new Promise((resolve, _) => {
        document.body.onclick = resolve;
        setTimeout(()=>resolve(), 2000);
      });
      modal.style.opacity = "0";
      container.className = "container";
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