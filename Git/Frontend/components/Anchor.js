import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/Anchor.css';

const Anchor = () => {
    const [anchor, setAnchor] = useState([]);
    const [chartData, setChartData] = useState({ labels: [], values: [] });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAnchor = async () => {
            try {
                const response = await axios.get('http://localhost:4000/anchor/getAnchors');
                setAnchor(response.data);

                const labels = response.data.map(item => item.Anchor);
                const values = response.data.map(item => item.Views);

                setChartData({ labels, values });
            } catch (error) {
                console.error('Error fetching anchor data:', error);
            }
        };

        fetchAnchor();
    }, []);

    const navigate = useNavigate();

    const openAnchorPage = (anchorName) => {
        navigate(`/anchor/${anchorName}`);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredAnchors = anchor.filter((an) => {
        return (
            typeof an.Anchor === 'string' &&
            typeof an.Channel === 'string' &&
            (
                an.Anchor.toLowerCase().includes(searchTerm) ||
                an.Channel.toLowerCase().includes(searchTerm)
            )
        );
    });

    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="centered-container">
                <p className="h1">Anchor Analysis</p>
                <div className="search-container">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search...."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div style={{ maxHeight: '400px', overflowY: 'scroll', width: '100%' }}>
            <table className="table table-light table-striped table-light-custom">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Anchor <i className="fa-solid fa-user"></i></th>
                        <th scope="col">Channel <i className="fa-solid fa-tv"></i></th>
                        <th scope="col">Views <i className="fa-solid fa-eye"></i></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAnchors.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.Anchor}</td>
                            <td>{item.Channel}</td>
                            <td>{item.Views}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-info" 
                                    onClick={() => openAnchorPage(item.Anchor)}
                                    style={{ borderColor: '#343a40', color: '#211e1e' }}
                                >
                                    Info <i className="fa-solid fa-right"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            <div className="centered-container">
    <p className="h1">Anchor Analysis based on Views</p>
    <div className="chart-container-anchor">
        <BarChart data={chartData} label1="Views" />
    </div>
</div>

        </>
    );
}

export default Anchor;
