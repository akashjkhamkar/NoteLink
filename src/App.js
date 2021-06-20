import {useState, React} from 'react'
import Container from '@material-ui/core/Container';

import AssignmentForm from "./components/AssignmentForm"
import QueryForm from "./components/QueryForm"
import SearchResults from "./components/SearchResults"

const App = () => {
    // fake uploads for testing purposes
    const fakeUploads = [
        {
            name: "aaaa",
            url: "yes..",
            user: "amey",
            id: "odhzsfdjashdifu"
        },
        {
            name: "harry potter and fucking amazon",
            url: "amazonfuckyouinparticularbutplsdelivermyshit.com",
            user: "pratik",
            id: "sodsdfssadfsadfdfhzsfdjashdifu"
        },
        {
            name: "pbl shit",
            url: "yes..",
            user: "gopi",
            id: "odhzsfdjasdfaashdifu"
        },
        {
            name: "zzzzz",
            url: "amazonfuckyouinparticularbutplsdelivermyshit.com",
            user: "gajanan",
            id: "sodsdfsdasdfsdsddasfsdfhzsfdjashdifu"
        },
        {
            name: "aaaa",
            url: "yes..",
            user: "chetan",
            id: "odhzsfdjasdsdsdshdifu"
        }
    ]


    // state variables
    const [Name, setName] = useState("")
    const [Url, setUrl] = useState("")
    const [Query, setQuery] = useState("")
    const [Username, setUsername] = useState("")
    const [Uploads, setUploads] = useState(fakeUploads)
    const [QueryResults, setResults] = useState([])

    // handlers
    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const urlHandler = (event) => {
        setUrl(event.target.value);
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const queryHandler = (event) => {
        const query = event.target.value;
        setQuery(query);

        if (query) {
            setResults(Uploads.filter(result => 
                result.name.toLowerCase().includes(query.toLowerCase())
            ));
        }else{
            setResults([]);
        }
    }

    const addHandler = (event) => {
        // validate and send to server
        event.preventDefault();
        console.log(Name, Url, Username)
    }

    return (
        <Container className="mainContainer" component="main">
            <Container maxWidth="xs">
                <AssignmentForm
                    Name = {Name} 
                    Url = {Url} 
                    Username = {Username}
                    nameHandler = {nameHandler} 
                    urlHandler = {urlHandler}
                    addHandler = {addHandler}
                    usernameHandler = {usernameHandler}
                />
        
                <QueryForm
                    Query = {Query}
                    queryHandler = {queryHandler}
                />
            </Container>

            <SearchResults
                results = {QueryResults}
            />

        </Container>
    )
}

export default App;