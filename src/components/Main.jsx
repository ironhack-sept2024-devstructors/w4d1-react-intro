
function Main() {

    const moviesArr = [
        {
            "id": 1,
            "title": "The Godfather",
            "year": 1972,
            "genres": ["Crime", "Drama"],
            "imgURL":
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 8
        },
        {
            "id": 2,
            "title": "Forrest Gump",
            "year": 1994,
            "genres": ["Drama", "Romance"],
            "imgURL":
                "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
            "rating": 7
        },
        {
            "id": 3,
            "title": "Gladiator",
            "year": 2000,
            "genres": ["Action", "Adventure", "Drama"],
            "rating": 6
        }
    ]

   

    let title = "";

    if (moviesArr.length === 0) {
        title = <p>Sorry, no movies to display</p>;
    }

    return (
        <div>

            { title }

            {moviesArr.map(function (movieDetails) {
                return (
                    <div key={movieDetails.id} className="card">
                        
                        { movieDetails.imgURL 
                            ? <img src={movieDetails.imgURL} alt={movieDetails.title} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="Placeholder image" />
                        }

                        <p>{movieDetails.title}</p>
                        <p>Rating: {movieDetails.rating}</p>
                        {movieDetails.rating >=7 && <p>RECOMMENDED!</p>}
                    </div>
                )
            })}
        </div>
    );
}

export default Main;