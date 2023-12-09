import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function CopyButton (text){
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  };

  return (
       <i className="fas fa-copy" onCopy={handleCopy}></i>
  );
};