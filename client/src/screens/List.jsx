import "../css/list.css"
import React, {useState} from 'react'
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import { DateRange } from "react-date-range";

import SearchResults from "../components/SearchResults";

export const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const[openDate, setOpenDate] = useState(false);
    const [person, setPerson] = useState(location.state.person);
    const [openPerson, setOpenPerson] = useState(false);

    const handlePerson = (name, operation) => {
        setPerson((prev) => {
            return {
                ...prev,
                [name]: operation ==="i" ? person[name] + 1 : person[name] - 1
            }
        })
    }

    return (
        <div>
            <NavBar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listSearchTitle">Search</h1>
                        <div className="listSearchItems">
                            <label>Destination/Property Name</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="listSearchItems">
                            <label>Check-in Date and Check-out Date</label>
                            <span onClick={() => setOpenDate(!openDate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>
                            { openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate ={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="listSearchItems">
                            <span onClick={() => setOpenPerson(!openPerson)}> {person.adult} adults * {person.children} children * {person.room} rooms </span>
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
                        <button>Search</button>
                    </div>
                    <div className="listResults">
                        <SearchResults /> 
                        <SearchResults />
                        <SearchResults />
                        <SearchResults />
                        <SearchResults />
                        <SearchResults />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;
