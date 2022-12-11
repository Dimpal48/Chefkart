import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';

function App() {
    const [data, setData] = useState([])

    const getData = async()=>{
        const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await resp.json();
        setData(data);
    }

    useEffect(()=>{
        getData();
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Homepage data={data}/>} />
        </Routes>
    );
}

export default App;
