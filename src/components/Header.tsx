import React from 'react';

interface Props {
  text?: string[];
  title: string;
}

const Header: React.FC<Props> = ({title, text}) => {
 return (
   <div className="header">
     <header className="header-content">
       <h2 className="header-title">
         {title}
       </h2>
      {text ? text.map((v, k) => {
        return <h3 key={k}>{v}</h3>
      }) : <></>}
     </header>
   </div>
 )
}

export default Header;