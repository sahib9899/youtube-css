import React,{ useState} from 'react'
import { connect } from 'react-redux';
import "../Styles.css"
import VideoList from './VideoList';
import { categoryChange } from "./Actions";

function Categories(props) {
    const [Show, setShow] = useState('');
    const activeCategory = props.data;
    const categoryList = ['All', 'Music','Educational','Car reviews','Others','Movie','Motivational','Spiritual','Peaky blinders','Series clip','Naruto fights'];
    
    function handleChange(category){
        setShow(category);
        props.categoryChange(category);
    }
   
    return (
        <React.Fragment>
        <div className={`categories ${props.playerCategory}`}>
            <section className={`category-section ${props.playerCategory}-section`}>
                {categoryList.map(category =>  category!==activeCategory ? 
                (<button className="category" onClick={()=>handleChange(category)}> {`${category}`} </button>) :
                (<button className="category-active"> {category} </button> ))}
            </section>
        </div>
        {/* <div className="videos"> */}
        {/* <section className="video-section-list"> */}
             { Show === '' ?
        <VideoList category={'All'} /> :(<VideoList category={Show} />)}
        {/* </section> */}
        {/* </div> */}
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return{
        data: state.categoryChange
    }
}

const mapDispatchToProps = {
    categoryChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
