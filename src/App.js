import {useState, React} from 'react'

const AssignmentForm = ({ Name, Url, nameHandler, urlHandler, addHandler }) => (
    <div>
        <form>
            <h1>create a new assignment entry</h1>
            <div>
                name:
                <input value={Name} onChange={nameHandler} />
            </div>
            <div>
                Url:
                <input value={Url} onChange={urlHandler} />
            </div>
            <div>
                <button type="submit" onClick={addHandler}>add</button>
            </div>
        </form>
    </div>
);

const QueryForm = ({Query, queryHandler}) => (
    <div>
        <form>
            <h1>search for assignments</h1>
            <div>
                <input value={Query} onChange = {queryHandler}/>
            </div>
        </form>
    </div>
)

const SearchResults = ({results}) => (
    <div>
        {results.map(result => (

            <div key={result.id}>
                <h3>{result.name}</h3>
                {result.url}
            </div>

        ))}
    </div>
)

const App = () => {
    // fake uploads for testing purposes
    const fakeUploads = [
        {
            name: "aaaa",
            url: "yes..",
            id: "odhzsfdjashdifu"
        },
        {
            name: "harry potter and fucking amazon",
            url: "amazonfuckyouinparticularbutplsdelivermyshit.com",
            id: "sodsdfssadfsadfdfhzsfdjashdifu"
        },
        {
            name: "pbl shit",
            url: "yes..",
            id: "odhzsfdjasdfaashdifu"
        },
        {
            name: "zzzzz",
            url: "amazonfuckyouinparticularbutplsdelivermyshit.com",
            id: "sodsdfsdasdfdasfsdfhzsfdjashdifu"
        }
    ]


    // state variables
    const [Name, setName] = useState("")
    const [Url, setUrl] = useState("")
    const [Query, setQuery] = useState("")
    const [Uploads, setUploads] = useState(fakeUploads)
    const [QueryResults, setResults] = useState([])

    // handlers
    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const urlHandler = (event) => {
        setUrl(event.target.value);
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
        console.log(Name, Url)
    }

    return (
        <div className="container">
            <AssignmentForm 
                Name = {Name} 
                Url = {Url} 
                nameHandler = {nameHandler} 
                urlHandler = {urlHandler}
                addHandler = {addHandler}
            />
    
            <QueryForm
                Query = {Query}
                queryHandler = {queryHandler}
            />

            <SearchResults
                results = {QueryResults}
            />
        </div>
    )
}

export default App;