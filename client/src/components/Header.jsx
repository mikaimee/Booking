import "../css/header.css"
import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faBuilding, faCalendarDay, faCar, faCartFlatbed, faCity, faEarthAmericas, faHotel, faHouse, faLandmark, faPerson, faPlane, faTaxi, faUserLarge, faWater} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    
    const[destination, setDestination] = useState("");

    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);

    const [openPerson, setOpenPerson] = useState(false);
    const [person, setPerson] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate();

    const handlePerson = (name, operation) => {
        setPerson((prev) => {
            return {
                ...prev,
                [name]: operation ==="i" ? person[name] + 1 : person[name] - 1
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, person}} )
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                { type !== "list" &&
                    <>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCartFlatbed} className="headerIcon"/>
                                <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)}/>
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                { openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate ={new Date()}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faUserLarge} className="headerIcon"/>
                                <span onClick={() => setOpenPerson(!openPerson)} className="headerSearchText">{`${person.adult} adult • ${person.children} children • ${person.room} room`}</span>
                                { openPerson && <div className="personOptions" >
                                    <div className="personOptionsItems">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCount">
                                            <button className="optionCountButton" disabled={person.adult <= 1} onClick={()=> handlePerson("adult", "d")} >-</button>
                                            <span className="optionCountNumber">{person.adult}</span>
                                            <button className="optionCountButton" onClick={()=> handlePerson("adult", "i")} >+</button>
                                        </div>
                                    </div>
                                    <div className="personOptionsItems">
                                        <div className="optionTextDiv">
                                            <span className="optionText">Children</span>
                                            <p>Ages (0-17)</p>
                                        </div>
                                        <div className="optionCount">
                                            <button className="optionCountButton" disabled={person.children <= 0} onClick={()=> handlePerson("children", "d")} >-</button>
                                            <span className="optionCountNumber">{person.children}</span>
                                            <button className="optionCountButton" onClick={()=> handlePerson("children", "i")} >+</button>
                                        </div>
                                    </div>
                                    <div className="personOptionsItems">
                                        <span className="optionText">Room</span>
                                        <div className="optionCount">
                                            <button className="optionCountButton" disabled={person.room <= 1} onClick={()=> handlePerson("room", "d")} >-</button>
                                            <span className="optionCountNumber">{person.room}</span>
                                            <button className="optionCountButton" onClick={()=> handlePerson("room", "i")} >+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerButton" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                        <h1 className="headerTitle">Find deals for any season</h1>
                        <p className="headerDescription">From cozy bed & breakfasts to luxury hotels</p>
                    </>
                }
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Hotels</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Apartments</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faWater} />
                        <span>Resorts</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Hostels</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCity} />
                        <span>Villas</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;