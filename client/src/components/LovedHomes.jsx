import "../css/lovedHomes.css"
import React from 'react'

const LovedHomes = () => {
    return (
        <div className="lovedHomes">
            <div className="lovedHomeItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" className="lovedHomeImg"/>
                <div className="lovedHomeTitle">
                    <h2>6 Continents Apartments by Prague Residences</h2>
                    <h3>Prague 1, Czech Republic, Prague</h3>
                    <h3>Starting from $82</h3>
                    <div className="lovedHomeReviews">
                        <button>8.3</button>
                        <span>Very Good </span>
                        <span>250 reviews</span>
                    </div>
                </div>
            </div>
            <div className="lovedHomeItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" className="lovedHomeImg"/>
                <div className="lovedHomeTitle">
                    <h2>7Seasons Apartments Budapest</h2>
                    <h3>06. Terézváros, Hungary, Budapest</h3>
                    <h3>Starting from $88</h3>
                    <div className="lovedHomeReviews">
                        <button>8.8</button>
                        <span>Excellent Reviews </span>
                        <span>7,265 reviews</span>
                    </div>
                </div>
            </div>
            <div className="lovedHomeItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" className="lovedHomeImg"/>
                <div className="lovedHomeTitle">
                    <h2>Oriente Palace Apartments</h2>
                    <h3>Madrid City Center, Spain, Madrid</h3>
                    <h3>Starting from $94</h3>
                    <div className="lovedHomeReviews">
                        <button>8.9</button>
                        <span>Excellent </span>
                        <span>2552 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LovedHomes