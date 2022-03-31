import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

const AlbumList = () => {

    const url = "https://jsonplaceholder.typicode.com/albums";
    const [albumList, setAlbumList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get data from api and set album list to state
    useEffect(() => {
        axios.get(`${url}`).then((response) => {
            const albumsData = response.data;
            setAlbumList(albumsData);
            setIsLoading(false);
        }).catch(error => {
            console.log("Error :", error);
        });
    }, []);

    // Map and render album list
    const renderAlbumList = () => {
        return (
            albumList.map((data, i) => {
                return (
                    <li key={i}>
                        <Link to={`/album/${data.id}`}>Album {data.id}</Link>
                    </li>
                )
            })
        );
    }

    return (
        <div className="main-container">
            <div className="header">
                <p>Albums</p>
            </div>
            <div className="list-container">
                <div className="list">
                    <ul>
                        {!isLoading && renderAlbumList()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AlbumList;
