import React from 'react'
import './App.css';
import Row from '../src/Row';
import requests from '../src/requests'
import Banner from './Banner'
import Nav from './Nav';
function App() {
  return (
    <div className="App">
   {/* nav */}
    <Nav/>
    <Banner/>
   {/* rows on the body */}
    <Row title="NETFLIX ORIGINAL" 
    fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Tranding now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentariey" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}
 
export default App;
