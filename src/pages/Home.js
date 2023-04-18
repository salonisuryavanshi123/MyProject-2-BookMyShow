//1. Import area
import React, { useEffect, useReducer } from 'react'
import { REMOVE_MOVIE } from './reducer/actions/actions';
import { reducerFunction } from './reducer/reducrFunctions/rootReducer';
import { useContext } from "react";
import { MovieContext } from '../App';


//2. Defination
  
//console.log("OldState----->",initialState)


//reducerFunction();

//console.log("NewState----->",initialState)

export default function Home() {
    const movies = useContext(MovieContext);
    //2.1 Hooks area
    const [ newState ,dispatch] = useReducer( reducerFunction ,movies)

    //2.2 Function defination
    useEffect(()=>{
        //console.log('movies321----->',movies);
        console.log("newState---->new state",newState)
    },[]);//After page reload
    

    //2.3 return statement
    return (
        <>
        
            { console.log('newState----->',newState.movies) }

            <section className="banner-section">
                <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner01.jpg" />
                <div className="container">
                <div className="banner-content">
                    <h1 className="title  cd-headline clip"><span className="d-block">book your</span> tickets for 
                    <span className="color-theme cd-words-wrapper p-0 m-0">
                        <b className="is-visible">Movie</b>
                        <b>Event</b>
                        <b>Sport</b>
                    </span>
                    </h1>
                    <p>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
                </div>
                </div>
            </section>
            
            <section className="search-ticket-section padding-top pt-lg-0">
                <div className="container">
                <div className="search-tab bg_img" data-background="assets/images/ticket/ticket-bg01.jpg">
                    <div className="row align-items-center mb--20">
                    <div className="col-lg-6 mb-20">
                        <div className="search-ticket-header">
                        <h6 className="category">welcome to Boleto </h6>
                        <h3 className="title">what are you looking for</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                        <ul className="tab-menu ticket-tab-menu">
                            <li className="active">
                                <div className="tab-thumb">
                                <img src="assets/images/ticket/ticket-tab01.png" alt="ticket" />
                                </div>
                                <span>movie</span>
                            </li>
                            <li>
                                <div className="tab-thumb">
                                <img src="assets/images/ticket/ticket-tab02.png" alt="ticket" />
                                </div>
                                <span>events</span>
                            </li>
                            <li>
                                <div className="tab-thumb">
                                <img src="assets/images/ticket/ticket-tab03.png" alt="ticket" />
                                </div>
                                <span>sports</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="tab-area">
                    <div className="tab-item active">
                        <form className="ticket-search-form">
                        <div className="form-group large">
                            <input type="text" placeholder="Search for Movies" />
                            <button type="submit"><i className="fas fa-search" /></button>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/city.png" alt="ticket" />
                            </div>
                            <span className="type">city</span>
                            <select className="select-bar">
                            <option value="london">London</option>
                            <option value="dhaka">dhaka</option>
                            <option value="rosario">rosario</option>
                            <option value="madrid">madrid</option>
                            <option value="koltaka">kolkata</option>
                            <option value="rome">rome</option>
                            <option value="khoksa">khoksa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/date.png" alt="ticket" />
                            </div>
                            <span className="type">date</span>
                            <select className="select-bar">
                            <option value="26-12-19">23/10/2020</option>
                            <option value="26-12-19">24/10/2020</option>
                            <option value="26-12-19">25/10/2020</option>
                            <option value="26-12-19">26/10/2020</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                            </div>
                            <span className="type">cinema</span>
                            <select className="select-bar">
                            <option value="Awaken">Awaken</option>
                            <option value="dhaka">dhaka</option>
                            <option value="rosario">rosario</option>
                            <option value="madrid">madrid</option>
                            <option value="koltaka">kolkata</option>
                            <option value="rome">rome</option>
                            <option value="khoksa">khoksa</option>
                            </select>
                        </div>
                        </form>
                    </div>
                    <div className="tab-item">
                        <form className="ticket-search-form">
                        <div className="form-group large">
                            <input type="text" placeholder="Search for Events" />
                            <button type="submit"><i className="fas fa-search" /></button>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/city.png" alt="ticket" />
                            </div>
                            <span className="type">city</span>
                            <select className="select-bar">
                            <option value="london">London</option>
                            <option value="dhaka">dhaka</option>
                            <option value="rosario">rosario</option>
                            <option value="madrid">madrid</option>
                            <option value="koltaka">kolkata</option>
                            <option value="rome">rome</option>
                            <option value="khoksa">khoksa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/date.png" alt="ticket" />
                            </div>
                            <span className="type">date</span>
                            <select className="select-bar">
                            <option value="26-12-19">23/10/2020</option>
                            <option value="26-12-19">24/10/2020</option>
                            <option value="26-12-19">25/10/2020</option>
                            <option value="26-12-19">26/10/2020</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                            </div>
                            <span className="type">event</span>
                            <select className="select-bar">
                            <option value="angular">angular</option>
                            <option value="startup">startup</option>
                            <option value="rosario">rosario</option>
                            <option value="madrid">madrid</option>
                            <option value="koltaka">kolkata</option>
                            <option value="Last-First">Last-First</option>
                            <option value="wish">wish</option>
                            </select>
                        </div>
                        </form>
                    </div>
                    <div className="tab-item">
                        <form className="ticket-search-form">
                        <div className="form-group large">
                            <input type="text" placeholder="Search fo Sports" />
                            <button type="submit"><i className="fas fa-search" /></button>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/city.png" alt="ticket" />
                            </div>
                            <span className="type">city</span>
                            <select className="select-bar">
                            <option value="london">London</option>
                            <option value="dhaka">dhaka</option>
                            <option value="rosario">rosario</option>
                            <option value="madrid">madrid</option>
                            <option value="koltaka">kolkata</option>
                            <option value="rome">rome</option>
                            <option value="khoksa">khoksa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/date.png" alt="ticket" />
                            </div>
                            <span className="type">date</span>
                            <select className="select-bar">
                            <option value="26-12-19">23/10/2020</option>
                            <option value="26-12-19">24/10/2020</option>
                            <option value="26-12-19">25/10/2020</option>
                            <option value="26-12-19">26/10/2020</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="thumb">
                            <img src="assets/images/ticket/cinema.png" alt="ticket" />
                            </div>
                            <span className="type">sports</span>
                            <select className="select-bar">
                            <option value="football">football</option>
                            <option value="cricket">cricket</option>
                            <option value="cabadi">cabadi</option>
                            <option value="madrid">madrid</option>
                            <option value="gadon">gadon</option>
                            <option value="rome">rome</option>
                            <option value="khoksa">khoksa</option>
                            </select>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>    
            
            <section className="movie-section padding-top padding-bottom bg-two">
                <div className="container">
                <div className="row flex-wrap-reverse justify-content-center">
                    <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
                    <div className="widget-1 widget-facility">
                        <div className="widget-1-body">
                        <ul>
                            <li>
                            <a href="#0">
                                <span className="img"><img src="assets/images/sidebar/icons/sidebar01.png" alt="sidebar" /></span>
                                <span className="cate">24X7 Care</span>
                            </a>
                            </li>
                            <li>
                            <a href="#0">
                                <span className="img"><img src="assets/images/sidebar/icons/sidebar02.png" alt="sidebar" /></span>
                                <span className="cate">100% Assurance</span>
                            </a>
                            </li>
                            <li>
                            <a href="#0">
                                <span className="img"><img src="assets/images/sidebar/icons/sidebar03.png" alt="sidebar" /></span>
                                <span className="cate">Our Promise</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="widget-1 widget-banner">
                        <div className="widget-1-body">
                        <a href="#0">
                            <img src="assets/images/sidebar/banner/banner01.jpg" alt="banner" />
                        </a>
                        </div>
                    </div>
                    <div className="widget-1 widget-trending-search">
                        <h3 className="title">Trending Searches</h3>
                        <div className="widget-1-body">
                        <ul>
                            <li>
                            <h6 className="sub-title">
                                <a href="#0">mars</a>
                            </h6>
                            <p>Movies</p>
                            </li>
                            <li>
                            <h6 className="sub-title">
                                <a href="#0">alone</a>
                            </h6>
                            <p>Movies</p>
                            </li>
                            <li>
                            <h6 className="sub-title">
                                <a href="#0">music event</a>
                            </h6>
                            <p>event</p>
                            </li>
                            <li>
                            <h6 className="sub-title">
                                <a href="#0">NBA Games 2020</a>
                            </h6>
                            <p>Sports</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="widget-1 widget-banner">
                        <div className="widget-1-body">
                        <a href="#0">
                            <img src="assets/images/sidebar/banner/banner02.jpg" alt="banner" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="article-section padding-bottom">
                        <div className="section-header-1">
                        <h2 className="title">movies</h2>
                        <a className="view-all" href="movie-grid">View All</a>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                            {
                                movies.movies && 
                                movies.movies.map((cv,idx,arr)=>{
                                        console.log(cv);
                                        return (
                                                <div key={idx} className="col-sm-6 col-lg-4">
                                                    <div className="movie-grid">
                                                    <div className="movie-thumb c-thumb">
                                                        <a href="#0">
                                                            <img src={cv.image} alt="movie" />
                                                        </a>
                                                    </div>
                                                    <div className="movie-content bg-one">
                                                        <h5 className="title m-0">
                                                        <a href="#0">{cv.name}</a>
                                                        </h5>
                                                        <ul className="movie-rating-percent">
                                                            <li>
                                                                <div className="thumb">
                                                                <img src="assets/images/movie/tomato.png" alt="movie" />
                                                                </div>
                                                                <span className="content">88%</span>
                                                            </li>
                                                            <li>
                                                                <div className="thumb">
                                                                <img src="assets/images/movie/cake.png" alt="movie" />
                                                                </div>
                                                                <span className="content">88%</span>
                                                                <br />
                                                                <button className="btn btn-danger btn-sm" onClick={(e)=>{ dispatch({type:REMOVE_MOVIE,mname:cv.name}) }}>D</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                    })
                            }
                        </div>
                    </div>
                    <div className="article-section padding-bottom">
                        <div className="section-header-1">
                        <h2 className="title">events</h2>
                        <a className="view-all" href="events.html">View All</a>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/event/event01.jpg" alt="event" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">Digital Economy Conference 2020</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/event/event02.jpg" alt="event" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">web design conference 2020</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="event-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/event/event03.jpg" alt="event" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">digital thinkers meetup</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="article-section">
                        <div className="section-header-1">
                        <h2 className="title">sports</h2>
                        <a className="view-all" href="sports.html">View All</a>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/sports/sports01.jpg" alt="sports" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">football league tournament</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/sports/sports02.jpg" alt="sports" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">world cricket league 2020</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="sports-grid">
                            <div className="movie-thumb c-thumb">
                                <a href="#0">
                                <img src="assets/images/sports/sports03.jpg" alt="sports" />
                                </a>
                                <div className="event-date">
                                <h6 className="date-title">28</h6>
                                <span>Dec</span>
                                </div>
                            </div>
                            <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                <a href="#0">basket ball tournament 2020</a>
                                </h5>
                                <div className="movie-rating-percent">
                                <span>327 Montague Street</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        </>
    )
}