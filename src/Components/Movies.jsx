import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from "../assets/loader.gif";

const Movies = () => {
    const [datas, setdatas] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=5d97759ad94f89e2b864506f4d087823&page=${page}`)
        setdatas(data.results)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        getData();
    }, [page])

    return <>
        
        <div className="pagi d-flex justify-content-between">
            <button onClick={() => page>1 && setPage(page - 1)}>Prev</button>
            <h5>{page} {loading ? "(Loading...)" : ""}</h5>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
        {
            loading ? <img src="https://media1.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47j6b5u0yf890dk1ln6jy9ldtwququaeeyo9r3synl&rid=giphy.gif&ct=g" alt="" style={{ width: "50vmax", marginLeft: "20vmax" }} /> : <div className='container d-flex flex-wrap justify-content-center'>
                {datas.map((data, i) => (
                    <div key={i} className="card" style={{ width: "20rem", margin: "1.5rem" }}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path ?? data.backdrop_path ?? data.profile_path ?? "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> {data.title ?? data.original_name}</h5>
                            <p className="card-text">{data.overview.slice(0, 35)}...</p>
                            <Link to={`/movie/${data.id}`} className="btn btn-primary">About</Link>
                        </div>
                    </div>
                ))}
            </div>
        }
    </>
}

export default Movies