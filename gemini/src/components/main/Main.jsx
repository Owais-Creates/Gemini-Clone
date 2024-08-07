import React from 'react'
import "./Main.css"
import { assets } from "../../assets/assets"
import { useGemini } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, setRecentPrompt, showResult, loading, resultData, setInput, input } = useGemini();
  const handleCardClick = (text) => {
    setInput(text);
    onSent(text)
    setRecentPrompt(text)
  }

  return (
    <>

      <div className='main' >

        <div className='nav' >
          <a href="/"><p className='heading' >Genieee <img className='geniee_icon' src={assets.geniee_icon} alt="" /> </p></a>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

          {!showResult
            ?
            <>
              <div className="greet">
                <p><span>Hello, Master</span></p>
                <p>How can I help you today?</p>
              </div>

              <div className="cards">

                <div className="card"
                  onClick={() => handleCardClick("Suggest beautiful places to see on an road trip")}
                >
                  <p>Suggest beautiful places to see on an road trip</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card"
                  onClick={() => handleCardClick("Briefly summarize this concept: Urban planning")}
                >
                  <p>Briefly summarize this concept: Urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card"
                  onClick={() => handleCardClick("Brainstrom team bonding activities for our work retreat")}
                >
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card"
                  onClick={() => handleCardClick("Improve the redeability of the following code")}

                >
                  <p>Improve the redeability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>

              </div>
            </>
            :
            <div className='result' >

              <div className="result-title">
                <img className='res-img' src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>

              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                  ?
                  <div className='loader' >
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  :
                  <p dangerouslySetInnerHTML={{ __html: resultData }} ></p>
                }
              </div>

            </div>
          }



          <div className="main-bottom">

            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text" placeholder='Ask Genieee...' />

              <div>
                <img className='gallery-icon' src={assets.gallery_icon} alt="" />
                <img className='mic-icon' src={assets.mic_icon} alt="" />
                {input
                  &&
                  <img
                    className='send-icon'
                    onClick={() => onSent()}
                    src={assets.send_icon} alt="" />
                }
              </div>

            </div>
            <p className='bottom-info' >
              Gemini may display inaccurate information, including places, people, history etc. so double check its responses.
            </p>

          </div>

        </div>

      </div>

    </>
  )
}

export default Main