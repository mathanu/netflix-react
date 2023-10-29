import openai from '../utils/openAI';
import React, { useRef } from 'react'
import { useSelector } from "react-redux";
import LANG  from "../utils/languageConstants"


const GptSearchBar = () => {
    const languageKey = useSelector((store)=> store.config.lang);
    const searchTxt = useRef(null)

    const handleGPTSearchClick = async () => {
      console.log(searchTxt.current.value)

        const gptResult  = await openai.chat.completions.create({
          messages: [{ role: 'user', content: 'Say this is a test' }],
          model: 'gpt-3.5-turbo'
        });
            
      console.log(gptResult)
    }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchTxt} type='text' className='p-4 m-4 col-span-9' placeholder={LANG[languageKey].placeHolder} />
        <button onClick={handleGPTSearchClick} className='m-4 py-2 bg-red-600 text-white rounded-xl col-span-3'>{LANG[languageKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
