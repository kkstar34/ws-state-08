import { useState } from 'react';
import './App.css';


const App = () => {

  
  // <iframe width="885" height="498" src="https://www.youtube.com/embed/aQ5m-WMHSDE" title="Every Game of Thrones Recap Seasons 1 through 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  const [films, setFilms] =useState(
    [
      { 
        title : "Jack Bauer",
        description : "Description",
        poster : "dnkhbes.jpg",
        url : "https://www.youtube.com/embed/rnzE7enfNg0"
      },
      { 
        title : "Prison break",
        description : "Description",
        poster : "dnkhbes.jpg",
        url : "https://www.youtube.com/embed/lthmrnx0dxM?list=PLYnHfaJuZ3SGv46ieBotC3U78JfYiJbye"
      },

      { 
        title : "Person of interest",
        description : "Description",
        poster : "dnkhbes.jpg",
        url : "https://www.youtube.com/embed/rWNpXOZFWMo"
      },
      { 
        title : "Game of thrones",
        description : "Description",
        poster : "dnkhbes.jpg",
        url : "https://www.youtube.com/embed/aQ5m-WMHSDE"
      }
    ]
  )

  const [filterName, setFilterName] = useState('');
  const handleSearch = (e) => {
    setFilterName(e.target.value)
  }


  return (<div className="App">
    <form action="" className='form'>
      <input type="search" placeholder='search...' onChange={handleSearch}/>
    </form>
    <div className="container">
      {films.filter(film => film.title.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())).map((film,i)=> {
        return (<div className="card" key={i}>
              <iframe width="100%" height="400" src={film.url} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <h3>{film.title}</h3>
              <p>{film.description}</p>
          </div>)
      })} 
    </div>  
  </div>)
}


export default App;

