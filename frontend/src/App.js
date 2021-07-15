import {useState, useEffect, React} from 'react'
import Container from '@material-ui/core/Container';

import validator from 'validator'

import AssignmentForm from "./components/AssignmentForm"
import QueryForm from "./components/QueryForm"
import SearchResults from "./components/SearchResults"
import Header from "./components/Header"

import filesService from "./services/Documents"

const App = () => {
    // state variables
    const [Name, setName] = useState("")
    const [Url, setUrl] = useState("")
    const [Query, setQuery] = useState("")
    const [Username, setUsername] = useState("")
    const [Uploads, setUploads] = useState([])
    const [QueryResults, setResults] = useState([])

    useEffect(() => {
        filesService.getAll()
        .then(res => {
            console.log('fetched !');
            setUploads(res)})
    }, [])

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
                result.fileName.toLowerCase().includes(query.toLowerCase())
            ));
        }else{
            setResults([]);
        }
    }

    const addHandler = (event) => {
        // validate and send to server
        event.preventDefault();

        if (!(Name && Url && Username)) {
            alert("some fields are empty !");
            return
        }

        if (!validator.isURL(Url)) {
            alert("not a valid url !")
            return
        }

        let fileUrl = Url; 
        
        if(fileUrl.toLowerCase().startsWith("https://")){
            fileUrl = fileUrl.replace("https://", ""); 
        } else if(fileUrl.toLowerCase().startsWith("http://")){
            fileUrl = fileUrl.replace("http://", ""); 
        }

        const newFile = {
            fileName: Name,
            url: "//".concat(fileUrl),
            user: Username
        }
        
        const loadingGif = document.querySelector(".loading");
        const doneGif = document.querySelector(".done");
        loadingGif.style.display = "block";

        filesService.add(newFile).then(result =>{ 
            setUploads(Uploads.concat(result));
            setName("");
            setUrl("");
            setUsername("");
            loadingGif.style.display = "none";

            doneGif.style.display = "block";
            setTimeout(() => {doneGif.style.display = 'none'}, 4000);

        }).catch(err => {
            loadingGif.display = "none";
            console.log(err)})
    }

    return (
        <Container className="mainContainer" component="main">
            <Container maxWidth="xs">
                <Header/>
                <AssignmentForm
                    Name = {Name} 
                    Url = {Url} 
                    Username = {Username}
                    nameHandler = {nameHandler} 
                    urlHandler = {urlHandler}
                    usernameHandler = {usernameHandler}
                    addHandler = {addHandler}
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