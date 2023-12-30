import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp'
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import './style/Details.css';

export default function Details() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const token = Cookies.get('token');
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
          
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, options)
            .then(response => response.json())
            .then(response => {
                setDetails(response);
            })
            .catch(err => console.error(err));
    }, [token])

    const url = `https://image.tmdb.org/t/p/w500${details.poster_path}`
    const voteAverage = details.vote_average !== undefined ? details.vote_average.toFixed(1) : null;

    function convertMinutesToTime(totalMinutes) {
        const date = new Date(0);
        date.setMinutes(totalMinutes);
      
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
      
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const minutesWithLeadingZero = minutes < 10 ? `0${minutes}` : minutes;
      
        return `${formattedHours}:${minutesWithLeadingZero}`;
    }

    function removeFromCookies() {
        const currentPath = '/';
        Cookies.remove('token');
        window.location.href = currentPath;
    }
    
    return (
        <>
            <header>
                <div className="header__logo">
                    <Link to={'/'}>
                        <button>{/* onClick={} */}
                            <LocalMoviesSharpIcon fontSize='medium' style={{marginBottom: '-5px', marginRight: '5px'}}/>
                            Фильмы
                        </button>
                    </Link>
                </div>
                <div className="header__exit">
                    <button>{/* onClick={} */}
                        <AccountCircleIcon fontSize='large' style={{marginBottom: '-5px', marginRight: '-20px'}}/>
                    </button>
                    <Link to={'/'}>
                        <button className='button_exit' onClick={removeFromCookies}>
                            <LogoutIcon fontSize='medium' style={{marginBottom: ''}}/>
                        </button>
                    </Link>
                </div>
            </header>
            
            <div className="main" style={{marginLeft: '120px'}}>
                <div className="details-img">
                    <img src={url} alt="" style={{width: '350px'}}/>
                </div>
                <div className="details">
                    <div className="details-head">
                        <div className="details-name">{details.title}</div>
                        <div className="details-rating">Рейтинг {voteAverage}</div>
                    </div>
                    <div className="details-info-name">О фильме</div>
                    <div className="details-text">{details.overview}</div>
                    <div className="details-info">
                        <div className="details-info_title">Год выпуска: </div>
                        <div className="details-info_ops">{details.release_date && details.release_date.substring(0, 4)}</div>
                    </div>
                    <div className="details-info">
                        <div className="details-info_title">Бюджет: </div>
                        <div className="details-info_ops">{details.budget && details.budget}$</div>
                    </div>
                    <div className="details-info">
                        <div className="details-info_title">Доход: </div>
                        <div className="details-info_ops">{details.revenue && details.revenue}$</div>
                    </div>
                    <div className="details-info">
                        <div className="details-info_title">Жанр: </div>
                        <div className="details-info_ops">
                            {details.genres && details.genres.map((genre, index) => (
                                <span key={index}>
                                    {genre.name}
                                    {index < details.genres.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="details-info">
                        <div className="details-info_title">Время: </div>
                        <div className="details-info_ops">{details.runtime} мин. / {convertMinutesToTime(details.runtime)}</div>
                    </div>
                </div>
            </div>
        </>
    );
}