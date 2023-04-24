import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./Nav";

const Movie = () => {
    const { id } = useParams();
    const [Movie, setMovie] = useState();
    const getMovie = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
    };
    useEffect(() => {
        getMovie();
    }, []);

    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(!show);
    };
    // "https://image.tmdb.org/t/p/w500/kP7t6RwGz2AvvTkvnI1uteEwHet.png"
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div className="cnt3">
                    <img
                        className="backdropImg"
                        src={`https://image.tmdb.org/t/p/w500${Movie?.backdrop_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
                            }`}
                        alt="not found"
                    />
                    <img
                        className="singleImg"
                        src={`https://image.tmdb.org/t/p/w500${Movie?.poster_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
                            }`}
                    />
                    <div className="singlecontent">
                        <div className="singletitle" color="#fff">
                            {Movie?.original_name || Movie?.original_title || Movie?.name}
                        </div>
                        <div className="genres">
                            {Movie?.genres?.map((e, i) => (
                                <div key={i} className="genre">
                                    {e.name}
                                </div>
                            ))}
                        </div>
                        <div className="singledate">
                            Release Date: {Movie?.release_date}
                        </div>
                        <div className="actions-cnt">
                            <div className="rating">
                                <CircularProgressbar
                                    value={Math.floor(Movie?.vote_average * 10)}
                                    text={Math.floor(Movie?.vote_average * 10) + "%"}
                                    strokeWidth={7}
                                    styles={{
                                        text: {
                                            fill: "#fff",
                                            fontSize: "2vmax",
                                            fontWeight: "bold",
                                            fontFamily: "sans-serif",
                                        },
                                        trail: {
                                            stroke: "rgb(32,69,41)",
                                        },
                                        path: {
                                            stroke: "rgb(33,208,122)",
                                        },
                                    }}
                                />
                            </div>
                            <span>User Scores</span>
                            <i
                                data-bs-original-title="Add to list"
                                className="bi bi-list-ul "
                            ><i className="ri-menu-add-line"></i></i>
                            <i
                                data-bs-original-title="Mark as favourite"
                                className="bi bi-suit-heart-fill"
                            ><i className="ri-heart-line"></i></i>
                            <i
                                data-bs-original-title="Add to your watchlist"
                                className="bi bi-bookmark-fill"
                            ><i className="ri-save-line"></i></i>
                            <i
                                data-bs-original-title="Rate it!"
                                className="bi bi-star-fill"
                            ><i className="ri-star-line"></i></i>
                        </div>
                        <div className="tagline">{Movie?.tagline}</div>
                        <div className="overview">
                            <h2>Overview </h2>
                            {show ? Movie?.overview : Movie?.overview.slice(0, 40) + "..."}
                            &nbsp;&nbsp;&nbsp;
                            <u onClick={showHandler}>{show ? "hide" : "show more"}</u>
                        </div>

                        <a className="singletrailer" href={`${Movie?.homepage}`}>
                            Watch Trailer &nbsp; ▶
                        </a>
                    </div>
                </div>
                <div className="head">Production Team</div>
                <div className="production-team">
                    {Movie?.production_companies?.map((e, i) => (
                        <div key={i} className="production">
                            {e.logo_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${e.logo_path}`}
                                    alt="not found"
                                />
                            )}
                            <div className="production-name">{e.name} &nbsp;</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movie