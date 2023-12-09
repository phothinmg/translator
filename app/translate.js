"use client"

import React, { useState } from 'react';
import countries from "@/lib/countries";
import { CopyButton } from './icons';

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
    // b = JSON.stringify(a),
    c = a.matches;
    let d = '';
    for (let i = 1; i<c.length; i++){
        d += c[i].translation
    }
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
        fetchTranslatedText();
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
          <i className="fas fa-volume-up"></i>
          {/* <CopyButton text = {text.trim()} /> */}
          <select value={f} onChange={handleF} id='fl'>
            <option value="">Select Lang</option>
            {renderOptions()}
          </select>
        </div>
      </fieldset>
      <div className="sort">
        <p className="exchange">
          <i className="fas fa-sort"></i>
        </p>
      </div>
      <fieldset>
        <div
        //   placeholder="Translate..."
        //   spellCheck={false}
          readOnly
          className='textarea'
        >
          {translatedText}
        </div>
        <div className="control">
          <i className="fas fa-volume-up"></i>
          <i className="fas fa-copy"></i>
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
