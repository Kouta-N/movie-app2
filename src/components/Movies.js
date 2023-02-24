import { useEffect, useState } from "react";
const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        let movieList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Something"
            },
            {
                id: 2,
                title: "2",
                release_date: "1986-03-07",
                runtime: 2,
                mpaa_rating: "R",
                description: "Something"
            }
        ];

        setMovies(movieList)
    }, []);
    return(
        <div>
            <h2>Movies</h2>
            <hr />
        </div>
    )
}
a
export default Movies;