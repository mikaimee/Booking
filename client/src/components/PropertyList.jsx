import "../css/propertyList.css"
import React, {useState, useEffect} from 'react'
import axios from "axios";
import useFetch from "../hooks/useFetch";

const PropertyList = () => {

    const {data, loading, error} = useFetch(
        "localhost:8000/api/hotels/typeOfHotel"
    )

    return (
        <div className="propertyList">
            <div className="propertyListItems">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="Sample Hotel Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Hotels</h2>
                    <h3>941,799 hotels</h3>
                </div>
            </div>
            <div className="propertyListItems">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=" alt="Sample Apartment Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Apartments</h2>
                    <h3>973,815 apartments</h3>
                </div>
            </div>
            <div className="propertyListItems">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="Sample Resort Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Resorts</h2>
                    <h3>18/853 Resorts</h3>
                </div>
            </div>
            <div className="propertyListItems">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" alt="Sample Villa Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Villas</h2>
                    <h3>526,773 Villas</h3>
                </div>
            </div>
            <div className="propertyListItems">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=" alt="Sample Vacation Home Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Vacation Homes</h2>
                    <h3>526,773 Vacation Homes</h3>
                </div>
            </div>
            <div className="propertyListItems">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=" alt="Sample Hostel Image" className="propertyListImg" />
                <div className="propertyListTitle">
                    <h2>Hostel</h2>
                    <h3>17, 218 Hostels</h3>
                </div>
            </div> 
        </div>
    )
}

export default PropertyList