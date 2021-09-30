import React,{ useState} from 'react'
import "../Styles.css"
import VideoList from './VideoList';

function Categories({playerCategory}) {
    const [Show, setShow] = useState('');


    const categoryList = ['All', 'Music','Educational','Car reviews','Others','Movie','Motivational','Spiritual','Peaky blinders','Series clip','Naruto fights'];
    return (
        <React.Fragment>
        <div className={`categories ${playerCategory}`}>
            <section className={`category-section ${playerCategory}-section`}>
                {categoryList.map(category => <button className="category" onClick={()=>setShow(category)}> {`${category}`} </button>)}
            </section>
        </div>
        <div className="videos">
        <section className="video-section">
             { Show === '' ?
        <VideoList category={'All'} /> :(<VideoList category={Show} />)}
        </section>
        </div>
        </React.Fragment>
    )

}

export default Categories
