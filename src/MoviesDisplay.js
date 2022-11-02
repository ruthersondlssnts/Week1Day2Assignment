import React from "react";

class MoviesDisplay extends React.Component {
    render() {
        return (
            <>
                <h1>3 Movies</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map((movie, index) => {
                            return (
                                <tr key={index}>
                                    <td>{movie.title}</td>
                                    <td>{movie.year}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default MoviesDisplay;
