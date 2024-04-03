import React, { useContext } from "react";
import './Main.css'
import {assets} from '../../assets/assets'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>NiT Chatbot</p>
            </div>
            <div className="main-container">

                {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello nháaa</span></p>
                    <p>Tui có thể giúp gì cho bạn nè?</p>
                </div>
                </>
                :<div className="result">
                    <div className="result-tittle">
                        <img src={assets.user_icon} alt=""/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.bot_icon} alt=""/>
                        {loading
                        ?<div className="loader">

                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
                }
                
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Hỏi tui ở đây nhá" />
                    <div>
                        {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" />: null}
                    </div>
                </div>
                <p className="bottom-info">
                    Mọi thắc mắc về chatbot bạn vui lòng liên hệ NiT Club nháaa
                </p>
            </div>
        </div>
    )
}

export default Main