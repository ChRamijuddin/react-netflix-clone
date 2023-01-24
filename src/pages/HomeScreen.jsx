import React from 'react'
import Banner from '../components/banner/Banner'
import Nav from '../components/nav/Nav'
import './Homescreen.css'
import requests from '../api/Request'
import Row from '../components/row/Row'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
       <Nav />
       <Banner />
       <Row 
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
       />
        <Row title="Trendind Now" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
