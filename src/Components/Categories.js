import React from 'react'
import "../Styles.css"

function Categories({playerCategory}) {
    return (
        <div className={`categories ${playerCategory}`}>
            <section className='category-section'>
                <button className="category-active"> All </button>
                <button className="category "> Music </button>
                <button className="category "> Vlogs </button>
                <button className="category "> Car reviews </button>
                <button className="category "> Mixes </button>
                <button className="category "> Movie musicals </button>
                <button className="category "> Anime hits </button>
                <button className="category "> Lectures </button>
                <button className="category "> Peaky blinders  </button>
                <button className="category "> Breaking bad </button>
                <button className="category "> Naruto fights </button>
            </section>
            
        </div>
    )
}

export default Categories
