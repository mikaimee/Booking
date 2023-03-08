import "../css/searchResults.css"
import React from 'react'

const SearchResults = () => {
    return (
        <div>
            <div className="searchResultContainer">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square200/360159357.webp?k=bb9fc22ad626ea9026d3c986fe02d5593ca8119b14ba7027ee6a0f8401ac8637&o=&s=1" 
                    alt="" 
                    className="searchResultImage" 
                />
                <div className="searchResultDescription">
                    <h1 className="searchResultTitle">Tower Street Apartments</h1>
                    <span className="distance">500m from center</span>
                    <span className="taxiOption">Free airport Taxi</span>
                    <span className="subtitle">Studio Apartment with Air Conditioning</span>
                    <span className="features">Entire studio * 1 bathroom * 21m 1 full bed</span>
                    <span className="cancelOption">Free Cancellation</span>
                    <span className="cancelOptionSubtitle">You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="searchResultDetails">
                    <div className="rating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="detailText">
                        <span className="isPrice">$123</span>
                        <span className="isTax">Include taxes and fees</span>
                        <button className="isCheckButton" >See avaliability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults