const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDk2YjZiZTdjYjRlOGQwM2NhNzY4Y2EyNTE5YjFkOCIsInN1YiI6IjY1NWQwMjFmNTM4NjZlMDBhYmFlZGUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.289Q4vjlDtb2mmicnM0zigo4NIEKQ502YnXSBb-oyr4'
    }
  };
  
fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));