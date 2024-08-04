// import React from 'react';
// import axios from 'axios';
// import { Doughnut } from 'react-chartjs-2';
// import { useParams } from 'react-router-dom';

// const AnchorPage = async() => {
//     const { anchorName } = useParams

//     const response = await axios.get(`http://localhost:4000/anchor/getAnchor/${anchorName}`);
    

//     // Example data for Chart.js doughnut chart
//     const chartData = {
//         labels: ['Label 1', 'Label 2', 'Label 3'],
//         datasets: [{
//             label: 'Dataset',
//             data: [30, 40, 30],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             borderWidth: 1,
//         }],
//     };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                 <Doughnut data={chartData} options={{ cutout: '80%' }} />
//                 <img
//                     src={response.data.Img}
//                     alt={response.data.Anchor}
//                     style={{
//                         position: 'absolute',
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         maxWidth: '50%',
//                         maxHeight: '50%',
//                         zIndex: 10,
//                     }}
//                 />
//             </div>

//             {/* Right side: Anchor Info */}
//             <div style={{ flex: 1 }}>
//                 (
//                     <div>
//                         <h2>{response.data.Anchor}</h2>
//                         <ul class="list-group list-group-flush">
//                             <li class="list-group-item">Channel: {response.data.Channel}</li>
//                             <li class="list-group-item">Views: {response.data.Views}</li>
//                             <li class="list-group-item">Instagram: {response.data.insta}</li>
//                             <li class="list-group-item">Twitter: {response.data.twitter}</li>
//                         </ul>
//                         {/* Display more anchor information as needed */}
//                     </div>
//                 )
//             </div>
//         </div>
//     );
// };

// export default AnchorPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

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
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            borderWidth: 1,
        }],
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                <Doughnut data={chartData} options={{ cutout: '80%' }} />
                <img
                    src={anchorData[0].Image} 
                    alt={anchorData[0].Anchor}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '50%',
                        maxHeight: '50%',
                        zIndex: 10,
                    }}
                />
            </div>

            {/* Right side: Anchor Info */}
            <div style={{ flex: 1 }}>
                <div>
                    <h2>{anchorData[0].Anchor}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Channel: {anchorData[0].Channel}</li>
                        <li className="list-group-item">Views: {anchorData[0].Views}</li>
                        <li className="list-group-item">Education: {anchorData[0].Education} </li>
                        <li className="list-group-item">Instagram: <a href={anchorData[0].Instagram}>{anchorData[0].Instagram}</a></li>
                        <li className="list-group-item">Twitter: <a href={anchorData[0].Twitter}>{anchorData[0].Twitter}</a></li>
                    </ul>
                    {/* Display more anchor information as needed */}
                </div>
            </div>
        </div>
    );
};

export default AnchorPage;
