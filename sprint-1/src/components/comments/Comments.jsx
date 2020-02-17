import React from "react"; 
import mohanMuruge from "../../assets/images/Mohan-muruge.jpg"

export default function Comments(props) {
    let liveTimestamp = (theTime) => {
        let msToday = Date.now(); 
        let msDiff = msToday - theTime; 
        let daysAgo = Math.floor(msDiff / 8.64e+7); 
        let timesText = daysAgo === 1 ? 'day' : 'days'; 
        let dynamicTimestamp = daysAgo === 0 ? 'today' : `${daysAgo} ${timesText} ago`; 
        return dynamicTimestamp; 
    }
    const thread = props.data.comments.map((comment, index) => {
        return (
                <div key={index} className="conversation__comment">
                <div className="conversation__avatar-wrapper">
                    <img className="conversation__avatar" alt="" />
                </div>
                    <div className="conversation__comment-text">
                        <div className="conversation__comment-id">
                            <div className="conversation__comment-name">{comment.name}</div>
                            <div className="conversation__comment-date">{liveTimestamp(comment.timestamp)}</div>
                        </div>
                    <div className="conversation__comment-msg">{comment.msg}</div>
                </div>
            </div>           
        );
    })
    return (
        <section className="conversation">
            <h2 className="conversation__header">3 Comments</h2>
            <div className="conversation__wrapper">
                <div className="conversation__form">
                    <form className="conversation__input" id="conversation__input">
                        <div className="conversation__avatar-wrapper">
                            <img name ="avatar" className="conversation__avatar" src={mohanMuruge} alt="User Avatar" />
                        </div>
                        <div className="conversation__field-wrapper">
                            <label className ="conversation__field-header" htmlFor="msg">Join the conversation</label>   
                            <div className="conversation__field">
                                <textarea className="conversation__fill" id="msg" name="comment" placeholder="Add a comment..."></textarea>
                                <button type="submit" className="conversation__upload" disabled>Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="conversation__thread">{thread}</div>
            </div>
        </section>
    )
}
