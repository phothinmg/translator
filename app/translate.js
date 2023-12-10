"use client"

import React, { useState } from 'react';
import countries from "@/lib/countries";
import { zg2uni} from 'rabbit-node';
import { CopyToClipboard, VoiceButton} from './icons';

let option = [];
    for (let d in countries){
        const v = d;
        const n = countries[d];
        const o = {value: v, name: n};
        option.push(o)
    }
export function Translator() {
  const [f, setFValue] = useState('');
  const handleF = (event) => {
    setFValue(event.target.value);
  };
  const [t, setTValue] = useState('');
  const handleT = (event) => {
    setTValue(event.target.value);
  };
  
  const [text, setTextareaValue] = useState('');
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const apiurl = `https://api.mymemory.translated.net/get?q=${text.trim()}&langpair=${f}|${t}`;

  const getapi = async (url) => {
    const apidata = await fetch(url);
    const 
    a = await apidata.json(),
    c = a.matches[0],
    d = zg2uni(c.translation);
   
    return d
  };
  const datatext = async () => await getapi(apiurl);
  const [translatedText, setTranslatedText] = useState('');
  const fetchTranslatedText = async () => {
    const text = await datatext();
    setTranslatedText(text);
    };
  const handleTranslateClick = (event) => {
        event.preventDefault();
        if(!f || !t){
          alert('Please select lang !!');
        } else if (!text){
          alert('Please enter text to translate !!');
        } else {
          fetchTranslatedText();
        }
  };
  const renderOptions = () => {
        return option.map((item, index) => (
          <option key={index} value={item.value}>{item.name}</option>
        ));

      };
  return (
    <>
      <fieldset>
        <textarea
          value={text}
          placeholder="Enter text"
          spellCheck={false}
          onChange={handleTextareaChange}
          id='ft'
        ></textarea>
        <div className="control">
          <VoiceButton 
            text = {text}
            lang={f}
          />
          <CopyToClipboard text={text.trim()} />
          <select value={f} onChange={handleF} id='fl'>
            <option value="">Select Lang</option>
            {renderOptions()}
          </select>
        </div>
      </fieldset>
      {/* <div className="sort">
        <p className="exchange">
        <i className="fas fa-sort" onClick={handleExchange}></i>
        </p>
      </div> */}
      <fieldset>
        <div
          readOnly
          className='textarea'
          id='tt'
        >
          {translatedText}
        </div>
        <div className="control">
        <VoiceButton 
            text = {translatedText}
            lang={t}
          />
          <CopyToClipboard text={translatedText} />
          <select value={t} onChange={handleT} id='tl'>
           <option value="">Select Lang</option>
            {renderOptions()}
          </select>
        </div>
      </fieldset>
      <button className="button-52" role="button" onClick={handleTranslateClick}>
            <span className="text">Translate Text</span>
      </button>
    </>
  );
}
