import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BG_IMG } from "../utils/constants"

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute -z-30">
                <img src={LOGIN_BG_IMG} alt="mainpage" />
            </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GPTSearch;
