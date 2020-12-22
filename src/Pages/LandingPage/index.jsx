import React, {useState} from "react";
import {Holder, BookDisplay} from "./style"
import axios from "axios";
import Menu from "../../components/menu/index"

const LandingPage = () => {
    const [crimeBooks, setCrimeBooks] = useState();
    const [romanceBooks, setRomanceBooks] = useState();

    const clickHandler = (data) => {
        console.log(data);
    }

    crimeBooks === undefined && axios.get("https://www.googleapis.com/books/v1/volumes?q=crime&maxResults=5")
    .then((res) => setCrimeBooks(res.data.items))
    romanceBooks === undefined && axios.get("https://www.googleapis.com/books/v1/volumes?q=amor&maxResults=5")
    .then((res) => setRomanceBooks(res.data.items))

    return <>
    <Menu />
    <Holder>
        <h1>BookBooks</h1>
        <p>Crime</p>
        <BookDisplay>
            {crimeBooks && crimeBooks.map((data, key) => (
                <img onClick={() => clickHandler(data)} key={key} src={data.volumeInfo.imageLinks.smallThumbnail} alt={data.volumeInfo.title}/>
            ))}
        </BookDisplay>
        <p>Romance</p>
        <BookDisplay>
            {romanceBooks && romanceBooks.map((data,key) => (
                <img onClick={() => clickHandler(data)} key={key} src={data.volumeInfo.imageLinks.smallThumbnail} alt={data.volumeInfo.title}/>
            ))}
        </BookDisplay>
    </Holder>
    </>
}

export default LandingPage;