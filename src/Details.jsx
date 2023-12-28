import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp'
import { Link } from "react-router-dom";
import './Details.css';

export default function Details() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDk2YjZiZTdjYjRlOGQwM2NhNzY4Y2EyNTE5YjFkOCIsInN1YiI6IjY1NWQwMjFmNTM4NjZlMDBhYmFlZGUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.289Q4vjlDtb2mmicnM0zigo4NIEKQ502YnXSBb-oyr4'
            }
        };
          
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, options)
            .then(response => response.json())
            .then(response => {
                setDetails(response);
                console.log(response);
            })
            .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru`, options)
            .then(response => response.json())
            .then(response => {
                setCredits(response);
                console.log(response);
            })
            .catch(err => console.error(err));
    }, [])
    console.log(details);
    console.log(credits);
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
                        <AccountCircleIcon fontSize='large' style={{marginBottom: '-5px'}}/>
                    </button>
                </div>
            </header>
            
            <div className="main" style={{marginLeft: '70px'}}>
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