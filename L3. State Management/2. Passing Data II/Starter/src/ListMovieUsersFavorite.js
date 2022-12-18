import React from "react";

const Movie = ({ movie, users }) => {
    return (<div>
        <p>{movie.id + ' ' + movie.name}</p>
        <ul>
            {(users.length > 0 ? users.map(user =>
                (<li>{`${user.id} ${user.name}`}</li>)
            ) : <li>No one likes this POS</li>)
            }
        </ul>
    </div>);
};
const ListMovieUsersFavorite = ({ profiles, users, movies, }) => {
    const list = Object.values(movies).reduce((accList, movie) => {
        accList[movie.id] = [];
        return accList;
    }, []);
    return (<ol>
        {
            profiles.reduce((accList, profile) => {
                (accList[profile['favoriteMovieID']] = accList[profile.favoriteMovieID] || []).push(profile.userID);
                return accList;
            }, list)
                .map((userIDList, movieID) => (<li>
                    <Movie movie={movies[movieID]} users={userIDList.map(userID => users[userID])} />
                </li>))
        }
    </ol>
    );
};

export default ListMovieUsersFavorite;