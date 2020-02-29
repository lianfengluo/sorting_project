import React from 'react';

interface Props {
  title: string;
  text?: string[];
}

const Header: React.FC<Props> = ({title, text}) => {
 return (
   <div className="header">
     <header className="header-content">
       <h2 className="header-title">
         {title}
       </h2>
      {text && text.map((v, k) => <div key={k}>{v}</div>) }
     </header>
   </div>
 )
}

export default Header;