import React from 'react';

const ListFavouriteMovie = ({ profiles, movies, users }) => {
    return (
        <ul>
            {profiles.map(profile => (
                <li key={profile.id}>

                    {`${users[profile.userID].name}'s favourite movies is ${movies[profile.favoriteMovieID].name}.`}

                </li>
            ))}
        </ul>
    );
};

export default ListFavouriteMovie;