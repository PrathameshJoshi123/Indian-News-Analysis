import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import { useNavigate } from 'react-router-dom';
import Barcharthori from './Barcharthori';

const Anchor = () => {
    const [anchor, setAnchor] = useState([]);
    const [chartData, setChartData] = useState({ labels: [], values: [] });
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const fetchAnchor = async () => {
            try {
                const response = await axios.get('http://localhost:4000/anchor/getAnchors');
                setAnchor(response.data); // Assuming response.data is the entire JSON object
                
                // Example assuming response.data has properties like 'anchors' and 'views'
                const labels = response.data.map(item => item.Anchor); // Adjust according to your JSON structure
                const values = response.data.map(item => item.Views); // Adjust according to your JSON structure
    
                setChartData({ labels, values });
            } catch (error) {
                console.error('Error fetching anchor data:', error);
            }
        };
    
        fetchAnchor();
    }, []);

    const Navigate = useNavigate();

    const openAnchorPage = (anchorName) => {
        Navigate(`/anchor/${anchorName}`); 
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase()); 
      };
    
      const filteredAnchors = anchor.filter((an) => {
        return (
          typeof an.Anchor === 'string' &&
          typeof an.Channel === 'string' &&
          (
            an.Anchor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            an.Channel.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      });

      
      
    
    
    

    return (
        <>
        <center><p class="h1 mb-3">Anchor Analysis</p>

        <input class="mb-3" type="text" placeholder="Search...." value={searchTerm} onChange={handleSearchChange}/> </center>
        <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
         <table class="table table-dark table-striped">
            
            <thead style={{ position: 'sticky', top: '0', zIndex: '1', background: '#343a40'}}>
                <tr>
                <th scope="col"></th>
                <th scope="col">Anchor</th>
                <th scope="col">Channel</th>
                <th scope="col">Views</th>
                {/* <th scope="col">Sentiment</th> */}
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
                                {/* <td><Barcharthori Positive={item.Positive} Negative={ item.Negative}></Barcharthori></td> */}
                                <td><button type="button" class="btn btn-outline-info" onClick={() => openAnchorPage(item.Anchor)}>Info</button></td> 
                            </tr>
                        ))}
            </tbody>
            </table>
            </div>
            <center>
                <p class="h1">Anchor Analysis based on Views</p>
                <BarChart data={chartData} label1="Views" />
            </center>
            </>
    );
  }
  
  export default Anchor;