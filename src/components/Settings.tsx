import React, { useState } from 'react';
import Select, { ValueType, GroupType } from 'react-select';

export const default_size: number = 50;
export const default_speed: number = 500;
export const default_max: number = 250;

export const algos: string[] = ['bubble sort', 'quick sort', 'merge sort', 'heap sort']
type Option = { value: string, label: string }
const algoOptions = algos.reduce((algo: Option[], item: string) => {
  return [...algo, { value: item, label: item }]
}, [])

const groupStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles: React.CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

const formatGroupLabel: React.FC<GroupType<Option>> = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

interface SettingInfo {
  setArraySize: (arraySize: number) => void;
  setSpeed: (speed: number) => void;
  setMax: (max: number) => void;
  setOption: (option: string) => void;
  regenerate: (arraySize: number, max: number) => void;
}

export const Settings: React.FC<SettingInfo> = ({ setArraySize, setSpeed, setMax, setOption, regenerate }) => {
  const [speed, setInnerSpeed] = useState<number>(default_speed);
  const [arraySize, setInnerArraySize] = useState<number>(default_size);
  const [max, setInnerMax] = useState<number>(default_max);
  const [selectedOption, setSelectedOption] = useState<ValueType<Option>>(algoOptions[0]);
  // const inputSizeRef: RefObject<HTMLInputElement> = createRef();
  // const inputMaxRef: RefObject<HTMLInputElement> = createRef();
  const submitArraySize = (value:number): void => {
    const val = (+value < 10 ? 10 : (+value > 100) ? 100 : +value);
    setInnerArraySize(val);
    setArraySize(val);
  }
  const submitMaxVal = (value:number): void => {
    const val = (value < 20 ? 20 : (value > 500) ? 500 : value);
    setInnerMax(val);
    setMax(val);
  }
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
            setInnerArraySize(!isNaN(+e.target.value) ? +e.target.value : default_size)}
          onKeyDown={(e) => e.key === 'Enter' && submitArraySize(+e.currentTarget.value)} required />
        <label htmlFor="arraySize">
          Size (10 or above):
        </label>
      </div>
      <div className="max-number">
        <input type="text" value={max}
          onChange={e => setInnerMax(!isNaN(+e.target.value) ? +e.target.value : default_max)}
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
        <button onClick={() => {
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
