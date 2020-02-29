import React, { useEffect, lazy, Suspense, useRef, useState } from 'react';
import { algos } from './Settings';
import { bubbleSort, quickSort, mergeSort, heapSort } from '../utils/Algorithms'

interface Props {
  array: number[];
  speed: number;
  algoOption: string;
  setArray?: React.Dispatch<React.SetStateAction<number[]>>;
}

const Bar = lazy(() => import('./Bar'));

const BarChart: React.FC<Props> = ({ array, speed, algoOption }) => {
  const [chartWidth, setChartWidth] = useState<number>(window.innerWidth * 0.8);
  const [chartHeight, setChartHeight] = useState<number>(window.innerHeight * 0.8);
  useEffect(() => {
    const resizeFun = () => {
      setChartWidth(window.innerWidth * 0.8);
      setChartHeight(window.innerHeight * 0.8);
    }
    window.addEventListener("resize", resizeFun);
    return () => window.removeEventListener("resize", resizeFun);
  }, []);
  const scale = Math.max(chartHeight / 500, 1);
  const width: number = ((chartWidth > 1000 ? chartWidth : 1000) / array.length);
  const refsArray: (HTMLDivElement | null)[] = [];
  const rerender: React.MutableRefObject<boolean> = useRef<boolean>(false);
  useEffect(()=>{
    return ()=>{rerender.current = true};
  },[array]);
  const changeBarValue = async (i: number, value: number): Promise<void> => {
    const node = refsArray[i];
    if (node) {
      const oldBg:string = node.style.background;
      node.style.background = "linear-gradient(to bottom, rgba(0, 140, 255, 0.9), 80%, rgba(0, 140, 255, 0.6))";
      node.style.height = (value * scale).toString() + 'px';
      await new Promise((resolve, _) => {
        rerender.current && resolve();
        setTimeout(()=>resolve(), 3000 / speed)
      })
      node.textContent = value.toString();
      node.style.background = oldBg;
    }
  }

  const sortStart = async() => {
    rerender.current = false;
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
    if (container && modal && !rerender.current) {
      await new Promise((resolve, _) => {
        setTimeout(()=>{
          resolve()
        }, 100);
      });
      if (rerender.current) {
        return;
      }
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
    <Suspense fallback={()=><h3>Loading...</h3>}>
    <div className="chart-content">
      <div className="bar-chart">
        {array.map((v, k) =>
          <Bar speed={speed} key={k} value={v} width={width} 
                      ref={ref => refsArray[k] = ref} scale={scale}/>
        )}
      </div>
      <div className="sorting-button" onClick={() => sortStart()}>
        <button>Start Sorting</button>
      </div>
    </div>
    </Suspense>
  )
}


export default BarChart;