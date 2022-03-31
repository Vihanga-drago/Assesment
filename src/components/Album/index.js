import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bg from "../../assests/Image.jpg"
import "./styles.css";

const Album = () => {

    const url = "https://jsonplaceholder.typicode.com/photos";
    const [album, setAlbum] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewImage, setViwImage] = useState(bg);
    const { id } = useParams();

    // get data from api and set to state
    useEffect(() => {
        axios.get(`${url}`).then((response) => {
            const albumData = response.data;
            setAlbum(albumData);
            setIsLoading(false);
        }).catch(error => {
            console.log("Error :", error);
        });
    }, []);

    return (
        <div className='album-main-container'>
            <div className='album-header'>Album {id}</div>
            <div className='album-content-container'>
                <div className='thumbnail-container'>
                    <ul>
                        {!isLoading &&
                            //map and render thumbnails of selected album
                            album.map((element, index) => {
                                if (element.albumId === Number(id)) {
                                    return (
                                        <li key={index}>
                                            <img width={100} height={100} src={element.thumbnailUrl} onClick={() => setViwImage(element.url)} alt="Image" />
                                        </li>
                                    )
                                }

                            })}
                    </ul>
                </div>
                {/* display large image */}
                <div className='gallery-container'>
                    <img width={500} height={500} src={viewImage} alt="Image"></img>
                </div>
            </div>
        </div>
    );

}

export default Album;
