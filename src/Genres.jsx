import { useState, useEffect } from "react";
export default function Genres() {
    const [listGenres, setListGenres] = useState([])
    useEffect(() =>{
        const optionsGetGenres = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDk2YjZiZTdjYjRlOGQwM2NhNzY4Y2EyNTE5YjFkOCIsInN1YiI6IjY1NWQwMjFmNTM4NjZlMDBhYmFlZGUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.289Q4vjlDtb2mmicnM0zigo4NIEKQ502YnXSBb-oyr4'
            }
        };
          
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', optionsGetGenres)
            .then(response => response.json())
            .then(response => {
                setListGenres(response.genres)
                console.log(response.genress);
            })
            .catch(err => console.error(err));
    }, []) 
    return (
        <div className="genres">
            <div className="genres_name">Жанры</div>
            <div className="genres_list">
                {
                    listGenres.map(item => (
                        <div className='list_checkbox'>
                            <input type="checkbox" name={item.name} id={item.id} />
                            <label htmlFor={item.id}>{item.name}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}