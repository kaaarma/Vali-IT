import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Button from "@mui/material/Button";




function App() {

    const [userInput, setUserInput] = useState("")
    const [authors, setAuthors] = useState([])
    const [musicians, setMusicians] = useState([])
    const [authorsClicked, setAuthorsClicked] = useState(false)
    const [musiciansClicked, setMusiciansClicked] = useState(false)

            async function findAuthor(author) {

                setMusiciansClicked(false);

                setAuthorsClicked(true);

                    await axios.get(`https://openlibrary.org/search.json?author=${author}`)
                        .then(result => {
                            setAuthors(result.data.docs)
                        }) .catch(error => {console.log(error)})
                       }


           async function findMusician(musician) {

               setAuthorsClicked(false);

               setMusiciansClicked(true);
                    await axios.get(`http://musicbrainz.org/ws/2/artist/?query=${musician}&fmt=json`)
                        .then(result => {
                            setMusicians(result.data.artists)

                        }).catch(error => {console.log(error)})
                    }

            const authorsData = authors.map((item, index) => {
                return (
                    <div key={item?.key}>
                        <h3>{index + 1 + ".   "}{item?.author_name}</h3>
                        <p>{"'" + item?.title + "'"}</p>
                        <p>{item?.first_publish_year}</p>
                    </div>
                );
            });


            const musiciansData = musicians.map((item, index) => {
                return (
                    <div key={item?.key}>
                        <h3>{index + 1 + ".   "}{item?.name}</h3>
                        <p>{item?.disambiguation}</p>
                        <p>{item?.type}</p>
                    </div>
                );
            });

      return (
        <div className="App">
          <header>
              <h1>Find author or musician</h1>

          </header>

          <main>
            <input type="text" placeholder="Type a name" onChange={(e) => {

              setUserInput(e.target.value);
            }}></input>

              <br/><br/>
            <Button sx={{margin: "20px"}} variant="outlined" onClick={() => findAuthor(userInput)}>Authors</Button>
            <Button sx={{margin: "20px"}} variant="outlined" onClick={() => findMusician(userInput)}>Musicians</Button> <br/><br/>

            <label>Results:</label><br/>
              {authorsClicked === true && (

              <div>
                  {authorsData}
              </div>

                  )
              }
              {musiciansClicked === true && (
              <div>
                  {musiciansData}
              </div>
              )}



          </main>

        </div>
    
    );
    }

export default App;
