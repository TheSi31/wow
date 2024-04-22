import React from 'react';

interface DomProps {
  children?: String;
}

export const Dom: React.FC<DomProps> = ({ children }) => {
  return <p>{children}+"Пиздец"</p>;
};

