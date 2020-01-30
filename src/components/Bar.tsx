import React, { forwardRef, createRef } from 'react';


interface Props {
  value: number;
  width: number;
  speed: number;
}
type Ref = HTMLDivElement;

const Bar = forwardRef<Ref, Props>((props, ref) => {
  const { value, width, speed } = props;
  const myRef = createRef<HTMLDivElement>();
  return (
    <>
      <div ref={myRef}>
        <div ref={ref}
          style={{
            height: value, width: width, transition: `height ${3 / speed}s ease`,
            color: 'white', overflowWrap: "break-word",
            textAlign: "center"
          }}>
          {props.value}
        </div>
      </div>
    </>
  )
})




export default Bar;