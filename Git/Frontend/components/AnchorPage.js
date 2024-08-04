import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/AnchorPage.css'; // Import the CSS file

const AnchorPage = () => {
    const { anchorName } = useParams();
    const [anchorData, setAnchorData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnchorData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/anchor/getAnchor/${anchorName}`);
                if (response.data !== null && response.data !== undefined) {
                    console.log(response.data);
                    setAnchorData(response.data);
                    setLoading(false);
                } else {
                    console.error('Response data is null or undefined');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching anchor data:', error);
                setLoading(false);
            }
        };
    
        fetchAnchorData();
    }, [anchorName]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!anchorData) {
        return <p>No data found.</p>;
    }

    // Example data for Chart.js doughnut chart
    const chartData = {
        labels: ['Positive', 'Negative'],
        datasets: [{
            label: 'Sentiment Analysis',
            data: [anchorData[0].Positive, anchorData[0].Negative],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            borderWidth: 1,
        }],
    };

    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <div className="anchor-page-container">
                {/* Left side: Chart and Image */}
                <div className="chart-container">
                    <Doughnut data={chartData} options={{ cutout: '80%' }} />
                    <img
                        src={anchorData[0].Image}
                        alt={anchorData[0].Anchor}
                        className="chart-image"
                    />
                </div>
                {/* Right side: Anchor Info */}
                <div className="anchor-info">
                    <h2>{anchorData[0].Anchor}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Channel:</strong> {anchorData[0].Channel}</li>
                        <li className="list-group-item"><strong>Views:</strong> {anchorData[0].Views}</li>
                        <li className="list-group-item"><strong>Education:</strong> {anchorData[0].Education}</li>
                        <li className="list-group-item"><strong>Instagram:</strong> <a href={anchorData[0].Instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F', marginLeft: '10px' }}></i></a></li>
                        <li className="list-group-item"><strong>Twitter:</strong> <a href={anchorData[0].Twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" style={{ fontSize: '24px', color: '#1DA1F2', marginLeft: '10px' }}></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AnchorPage;
