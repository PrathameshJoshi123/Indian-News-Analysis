import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import { useNavigate } from 'react-router-dom';


const Channel = () => {
    const [channel, setChannel] = useState([]);
    const [chartViewData, setChartViewData] = useState({ labels: [], values: []  });
    const [chartSubData, setChartSubData] = useState({ labels: [], values: [] });
    // const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await axios.get('http://localhost:4000/channel/getChannels');
                setChannel(response.data); // Assuming response.data is the entire JSON object
                
                // // Example assuming response.data has properties like 'anchors' and 'views'
                const labels1 = response.data.map(item => item.Channel); // Adjust according to your JSON structure
                const values1 = response.data.map(item => item.Views); // Adjust according to your JSON structure
                
                const labels2 = response.data.map(item => item.Channel); // Adjust according to your JSON structure
                const values2 = response.data.map(item => item.Subscribers);

                setChartViewData({ labels: labels1, values: values1 });
                setChartSubData({ labels: labels2, values: values2 });
                
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        };
    
        fetchChannels();
    }, []);

    const Navigate = useNavigate();

    const openChannelPage = (channelName) => {
        Navigate(`/${channelName}`); 
    };

    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value.toLowerCase()); 
    //   };
    
    //   const filteredAnchors = anchor.filter((an) =>
    //     an.Anchor.toLowerCase().includes(searchTerm) || 
    //     an.Channel.toLowerCase().includes(searchTerm)
    //   );
    
    
    

    return (
        <>
        <center><p class="h1">Channel Analysis</p>  </center>

         <table class="table table-dark table-striped">
            
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Channel</th>
                <th scope="col">Sentiment</th>
                <th scope="col">Views</th>
                <th scope="col">Subscribers</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {channel.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.Channel}</td> 
                                <td>{item.Sentiment}</td> 
                                <td>{item.Views}</td> 
                                <td>{item.Subscribers}</td> 
                                <td><button type="button" class="btn btn-outline-info" onClick={() => openChannelPage(item.Channel)}>Info</button></td> 
                            </tr>
                        ))}
            </tbody>
            </table>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>

                <div style={{flex:1}}>
                    <p class="h1">Channel Analysis based on Views</p>
                    <BarChart data={chartViewData} label1="Views" />
                </div>

                <div style={{flex:1}}>
                    <p class="h1">Channel Analysis based on Subscribers</p>
                    <BarChart data={chartSubData} label1="Subscribers"/>
                </div>
            </div>
            </>
    );
  }
  
  export default Channel;