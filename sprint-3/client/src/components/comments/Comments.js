import React from 'react'; 
import mohanMuruge from "../../assets/Images/Mohan-muruge.jpg"; 

export default function Comments(props) {
    function liveTimestamp(epochTime) {
        let msToday = Date.now(); 
        let msDiff = msToday - epochTime; 
        let daysAgo = Math.floor(msDiff / 8.64e+7); 
        let timesText = daysAgo === 1 ? 'day' : 'days'; 
        let dynamicTimestamp = daysAgo === 0 ? 'today' : `${daysAgo} ${timesText} ago`; 
        return dynamicTimestamp; 
    }

    const thread = props.data.comments &&props.data.comments.map((comment) => {
        return (
                <div key={comment.id} className="conversation__comment">
                <div className="conversation__avatar-wrapper">
                    <img className="conversation__avatar" alt="" />
                </div>
                    <div className="conversation__comment-text">
                        <div className="conversation__comment-id">
                            <div className="conversation__comment-name">{comment.name}</div>
                            <div className="conversation__comment-date">{liveTimestamp(comment.timestamp)}</div>
                        </div>
                    <div className="conversation__comment-msg">{comment.comment}</div>
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
                            <img name ="avatar" className="conversation__avatar" src={mohanMuruge} alt="Upload an Avatar here for your comments!" />
                        </div>
                        <div className="conversation__field-wrapper">
                            <label className ="conversation__field-header" htmlFor="msg">Join the conversation</label>   
                            <div className="conversation__field">
                                <textarea className="conversation__fill" id="msg" name="comment" placeholder="Add A comment"></textarea>
                                <button type="submit" className="conversation__cta" disabled>Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="conversation__thread">{thread}</div>
            </div>
        </section>
    )
}