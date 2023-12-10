import React, { useState } from 'react';
import countries from '@/lib/countries';

function CopyToClipboard({ text }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); 
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
     <>
      <i className="fas fa-copy" onClick={handleCopy}></i>
      {showPopup && <span className="popup">Copied!</span>}
      </>
  );
};

function VoiceButton({text, lang}){
  const handleVoice = () =>{
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <i className="fas fa-volume-up" onClick={handleVoice}></i>
    </>
  );
  
};

// function ExchangeButton ({ft,tt,f,t}){
//   const [input1Value, setInput1Value] = useState('');
//   const [input2Value, setInput2Value] = useState('');
//   const [text1, setText1] = useState('');
//   const [text2, setText2] = useState('');
//   f = input1Value;
//   t = input2Value;
//   ft = text1;
//   tt = text2;

//   const handleExange = () =>{
//     setInput2Value(input1Value);
//     setInput1Value(input2Value);
//     setText2(text1);
//     setText1(text2);
//   };
//   return (
//     <>
//      <i className="fas fa-sort" onClick={handleExange}></i>
//     </>
//   );

// };


export {CopyToClipboard, VoiceButton};
