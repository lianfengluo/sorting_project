import React, { useState, lazy, useCallback, memo } from 'react';
import { ValueType, GroupType } from 'react-select';

const Select = memo(lazy(()=> import('react-select')));


export const algos: string[] = ['bubble sort', 'quick sort', 'merge sort', 'heap sort']
type Option = { value: string, label: string }
const algoOptions = algos.reduce((algo: Option[], item: string) => {
  return [...algo, { value: item, label: item }]
}, [])

const formatGroupLabel: React.FC<GroupType<Option>> = (data) => (
  <div className="group-styles">
    <span>{data.label}</span>
    <span className='group-badge-styles'>{data.options.length}</span>
  </div>
);

interface SettingInfo {
  setArraySize: (arraySize: number) => void;
  setSpeed: (speed: number) => void;
  setMax: (max: number) => void;
  setOption: (option: string) => void;
  regenerate: (arraySize: number, max: number) => void;
  defaultSpeed: number;
  defaultSize: number;
  defaultMax: number;
}

const Settings: React.FC<SettingInfo> = ({ 
  setArraySize, setSpeed, setMax, setOption, regenerate,
  defaultSpeed, defaultSize, defaultMax
 }) => {
  const [speed, setInnerSpeed] = useState<number>(defaultSpeed);
  const [arraySize, setInnerArraySize] = useState<number>(defaultSize);
  const [max, setInnerMax] = useState<number>(defaultMax);
  const [selectedOption, setSelectedOption] = useState<ValueType<Option>>(algoOptions[0]);
  const submitArraySize = useCallback((value:number): void => {
    const val = (+value < 10 ? 10 : (+value > 100) ? 100 : +value);
    setInnerArraySize(val);
    setArraySize(val);
  }, [setArraySize]);
  const submitMaxVal = useCallback((value:number): void => {
    const val = (value < 20 ? 20 : (value > 500) ? 500 : value);
    setInnerMax(val);
    setMax(val);
  }, [setMax]);
  return (
    <div className="setting-container">
      <div className="sorting-speed">
        <label htmlFor="speed">Speed:</label>
        <input name="speed" type="range" min={10} max={1000} value={speed}
          onChange={e => {
            setInnerSpeed(+e.target.value);
            setSpeed(+e.target.value);
          }} />
      </div>
      <div className="input-size">
        <input type="text" name="arraySize" value={arraySize} 
          onChange={e =>
            setInnerArraySize(!isNaN(+e.target.value) ? +e.target.value : defaultSize)}
          onKeyDown={(e) => e.key === 'Enter' && submitArraySize(+e.currentTarget.value)} required />
        <label htmlFor="arraySize">
          Size (10 or above):
        </label>
      </div>
      <div className="max-number">
        <input type="text" value={max}
          onChange={e => setInnerMax(!isNaN(+e.target.value) ? +e.target.value : defaultMax)}
          onKeyDown={(e) => e.key === 'Enter' && submitMaxVal(+e.currentTarget.value)} 
          name="maxNumber" required />
        <label htmlFor="maxNumber">
          Max value (20 or above):
        </label>
      </div>
      <div className="select-class">
        <Select
          className='select-class'
          placeholder="Algorithms:"
          value={selectedOption}
          onChange={(e: ValueType<Option>) => {
            setSelectedOption(e);
            e && setOption((e as Option).value);
          }}
          options={algoOptions}
          formatGroupLabel={formatGroupLabel}
        />
      </div>
      <div>
        <button  className="setting-button" onClick={() => {
          submitArraySize(arraySize);
          submitMaxVal(max);
          regenerate(arraySize, max)
        }}>
          Regenerate!!
        </button>
      </div>
    </div>
  )
}

export default Settings;
