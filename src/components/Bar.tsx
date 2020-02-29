import React, { forwardRef } from 'react';


interface Props {
  value: number;
  width: number;
  speed: number;
  scale: number;
}
type Ref = HTMLDivElement;

const Bar = forwardRef<Ref, Props>((props, ref) => {
  const { value, width, speed, scale } = props;
  return (
      <div ref={ref}
        style={{
          height: value * scale, width: width, transition: `height ${2000 / speed}ms ease`,
          color: 'white', overflowWrap: "break-word",
          textAlign: "center"
        }}>
        {props.value}
      </div>
  )
})




export default Bar;