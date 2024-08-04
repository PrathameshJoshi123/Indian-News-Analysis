// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Doughnut } from 'react-chartjs-2';
// import { useParams } from 'react-router-dom';

// const ChannelPage = () => {
//     const { channelName } = useParams();
//     const [channelData, setChannelData] = useState(null);
    

//     useEffect(() => {
//         const fetchChannelData= async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/channel/getChannel/${channelName}`);
//                 if (response.data !== null && response.data !== undefined) {
//                     console.log(response.data);
//                     setChannelData(response.data);
                    
//                 } else {
//                     console.error('Response data is null or undefined');
                    
//                 }
//             } catch (error) {
//                 console.error('Error fetching anchor data:', error);
               
//             }
//         };
    
//         fetchChannelData();
//     }, [channelName]);


   

//     // Example data for Chart.js doughnut chart
//     // const chartData = {
//     //     labels: ['Positive', 'Negative', 'Neutral'],
//     //     datasets: [{
//     //         label: 'Sentiment Analysis',
//     //         data: [1,2,3],
//     //         backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//     //         hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//     //         borderWidth: 1,
//     //     }],
//     // };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                 {/* <Doughnut data={chartData} options={{ cutout: '80%' }} /> */}
//                 <img
//                     src={channelData.Image} 
//                     alt={channelData.Channel}
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
//                 <div>
//                     <h2>{channelData[0].Channel}</h2>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Subscribers {channelData[0].Subscribers}</li>
//                         <li className="list-group-item">Views: {channelData[0].Views}</li>
//                         <li className="list-group-item">Youtube: <a href={channelData[0].Youtube}>{channelData[0].Youtube}</a><img YT src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" width="25" height="25 "/></li>
//                         <li className="list-group-item">Instagram: <a href={channelData[0].Instagram}>{channelData[0].Instagram}</a> <img  insta src="https://i.pinimg.com/736x/30/8b/49/308b4978318a5ac83e6b128c32504742.jpg" width="25" height="25 "/></li>
//                         <li className="list-group-item">Twitter: <a href={channelData[0].Twitter}>{channelData[0].Twitter}</a><img X src="https://t3.ftcdn.net/jpg/06/29/22/40/360_F_629224066_zdnJIKaJHiMkP6EOIoh6hvUxcnFpsbE1.jpg" width="25" height="25 "/></li>
//                         <li className="list-group-item">Whatsapp Channel: <a href={channelData[0].Whatsapp}>{channelData[0].Whatsapp}</a><img WP src="https://thumbs.dreamstime.com/b/whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-305513225.jpg" width="25" height="25 "/></li>
//                         <li className="list-group-item">Website: <a href={channelData[0].Website}>{channelData[0].Website}</a></li>
//                     </ul>
//                     {/* Display more anchor information as needed */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChannelPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import LasyLoad from 'react-lazy-load';


// const ChannelPage = () => {
//     const { channelName } = useParams();
//     const [channelData, setChannelData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [videoData, setVideoData] = useState([]);

//     useEffect(() => {
//         const fetchChannelData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/channel/getChannel/${channelName}`);
//                 if (response.data !== null && response.data !== undefined) {
//                     setChannelData(response.data);
//                 } else {
//                     console.error('Response data is null or undefined');
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching channel data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchChannelData();
//     }, [channelName]);

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 console.log("hi")
//                 const response = await axios.get(`http://localhost:4000/videos/getVideos/${channelName}`);
//                 console.log("bye")
//                 if (response.data !== null && response.data !== undefined) {
//                     setVideoData(response.data);
//                     console.log("hello")
//                     console.log(response.data)
//                 } else {
//                     console.error('Response data is null or undefined');
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching video data:', error);
//                 setLoading(false);
//             }
//         };
    
//         fetchVideoData();
//     }, [channelName]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!channelData) {
//         return <p>No data found.</p>;
//     }

    
//     return (
//         <>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                 <img src={channelData[0].Image} alt={channelData[0].Channel} style={{maxHeight: '50%', maxWidth: '50%'}}/>
//             </div>

//             <div style={{ flex: 1 }}>
//                 <div>
//                     <h2>{channelData[0].Channel}</h2>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">Subscribers: {channelData[0].Subscribers}</li>
//                         <li className="list-group-item">Views: {channelData[0].Views}</li>
//                         <li className="list-group-item">YouTube: <a href={channelData[0].Youtube}>{channelData[0].Youtube}</a><img  src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" width="25" height="25" /></li>
//                         <li className="list-group-item">Instagram: <a href={channelData[0].Instagram}>{channelData[0].Instagram}</a> <img  src="https://i.pinimg.com/736x/30/8b/49/308b4978318a5ac83e6b128c32504742.jpg" width="25" height="25" /></li>
//                         <li className="list-group-item">Twitter: <a href={channelData[0].Twitter}>{channelData[0].Twitter}</a><img  src="https://t3.ftcdn.net/jpg/06/29/22/40/360_F_629224066_zdnJIKaJHiMkP6EOIoh6hvUxcnFpsbE1.jpg" width="25" height="25" /></li>
//                         <li className="list-group-item">WhatsApp Channel: <a href={channelData[0].Whatsapp}>{channelData[0].Whatsapp}</a><img  src="https://thumbs.dreamstime.com/b/whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-305513225.jpg" width="25" height="25" /></li>
//                         <li className="list-group-item">Website: <a href={channelData[0].Website}>{channelData[0].Website}</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//         <div>
//             <h3>Videos</h3>
//             <div>
//             <LasyLoad height={762} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
//                 <ul className="list-group list-group-flush">    
//                     {videoData.map((video, index) => (
//                         <li key={index}>
//                             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                                     <img src={`https://img.youtube.com/vi/${video.ID}/default.jpg`} alt={video.Title} style={{maxHeight: '50%', maxWidth: '50%'}}/>
//                                 </div>

//                                 <div style={{ flex: 1 }}>
//                                     <div>
//                                         <h5>{video.Title}</h5>
//                                             <ul>
//                                                 <li className="list-group-item">Views: {video.Views}</li>
//                                             </ul>
                                            
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </LasyLoad>
//             </div>
//         </div>
        
        
//         </>
//     );
// };

// export default ChannelPage;


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ChannelPage = () => {
//     const { channelName } = useParams();
//     const [channelData, setChannelData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [videoData, setVideoData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [videosPerPage] = useState(5); // Number of videos per page
//     const [hasMore, setHasMore] = useState(true); // Flag to indicate if there are more videos to load
//     const observer = useRef();

//     useEffect(() => {
//         const fetchChannelData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/channel/getChannel/${channelName}`);
//                 if (response.data !== null && response.data !== undefined) {
//                     setChannelData(response.data);
//                 } else {
//                     console.error('Response data is null or undefined');
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching channel data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchChannelData();
//     }, [channelName]);

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/videos/getVideos/${channelName}?page=${currentPage}&limit=${videosPerPage}`);
//                 if (response.data !== null && response.data !== undefined) {
//                     // Append new videos to existing videoData
//                     setVideoData(prevVideoData => [...prevVideoData, ...response.data]);
//                     // Check if there are more videos to load
//                     if (response.data.length === 0 || response.data.length < videosPerPage) {
//                         setHasMore(false);
//                     }
//                 } else {
//                     console.error('Response data is null or undefined');
//                 }
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching video data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchVideoData();
//     }, [channelName, currentPage, videosPerPage]);

//     // Intersection Observer for infinite scroll
//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1,
//         };

//         const handleObserver = (entities) => {
//             const target = entities[0];
//             if (target.isIntersecting && hasMore) {
//                 setCurrentPage(prevPage => prevPage + 1);
//             }
//         };

//         observer.current = new IntersectionObserver(handleObserver, options);
//         if (observer.current && !loading && hasMore) {
//             observer.current.observe(document.querySelector('.infinite-scroll-footer'));
//         }

//         return () => {
//             if (observer.current) {
//                 observer.current.disconnect();
//             }
//         };
//     }, [loading, hasMore]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!channelData) {
//         return <p>No data found.</p>;
//     }

//     return (
//         <>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                     <img src={channelData[0].Image} alt={channelData[0].Channel} style={{ maxHeight: '50%', maxWidth: '50%' }} />
//                 </div>

//                 <div style={{ flex: 1 }}>
//                     <div>
//                         <h2>{channelData[0].Channel}</h2>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">Subscribers: {channelData[0].Subscribers}</li>
//                             <li className="list-group-item">Views: {channelData[0].Views}</li>
//                             <li className="list-group-item">YouTube: <a href={channelData[0].Youtube}>{channelData[0].Youtube}</a><img src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" width="25" height="25" /></li>
//                             <li className="list-group-item">Instagram: <a href={channelData[0].Instagram}>{channelData[0].Instagram}</a> <img src="https://i.pinimg.com/736x/30/8b/49/308b4978318a5ac83e6b128c32504742.jpg" width="25" height="25" /></li>
//                             <li className="list-group-item">Twitter: <a href={channelData[0].Twitter}>{channelData[0].Twitter}</a><img src="https://t3.ftcdn.net/jpg/06/29/22/40/360_F_629224066_zdnJIKaJHiMkP6EOIoh6hvUxcnFpsbE1.jpg" width="25" height="25" /></li>
//                             <li className="list-group-item">WhatsApp Channel: <a href={channelData[0].Whatsapp}>{channelData[0].Whatsapp}</a><img src="https://thumbs.dreamstime.com/b/whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-305513225.jpg" width="25" height="25" /></li>
//                             <li className="list-group-item">Website: <a href={channelData[0].Website}>{channelData[0].Website}</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <h3>Videos</h3>
//             <ul className="list-group list-group-flush">
//                 {videoData.map((video, index) => (
//                     <li key={index}>
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                             <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
//                                 <img src={`https://img.youtube.com/vi/${video.ID}/default.jpg`} alt={video.Title} style={{ maxHeight: '50%', maxWidth: '50%' }} />
//                             </div>

//                             <div style={{ flex: 1 }}>
//                                 <div>
//                                     <h5>{video.Title}</h5>
//                                     <li className="list-group-item">Views: {video.Views}</li>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//                 {hasMore && <li className="infinite-scroll-footer" style={{ textAlign: 'center', padding: '10px', listStyle: 'none' }}>Loading more...</li>}
//             </ul>
//         </>
//     );
// };

// export default ChannelPage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const ChannelPage = () => {
    const { channelName } = useParams();
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/channel/getChannel/${channelName}`);
                if (response.data !== null && response.data !== undefined) {
                    setChannelData(response.data);
                } else {
                    console.error('Response data is null or undefined');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching channel data:', error);
                setLoading(false);
            }
        };

        fetchChannelData();
    }, [channelName]);

    const fetchVideoData = async (page) => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:4000/videos/getVideos/${channelName}/${page}`);
          console.log('hi')
          setVideos(response.data.videos);
          setCurrentPage(response.data.currentPage);
          setTotalPages(response.data.totalPages);
          console.log(videos)
          console.log('hello')
        } catch (err) {
          setError(err.message);
          console.error('Error fetching video data:', err);
        }
        setLoading(false);
    };
    
    useEffect(() => {
        fetchVideoData();
    }, [channelName]);
      
    
    const handlePageChange = (page) => {
        fetchVideoData(page);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!channelData) {
        return <p>No data found.</p>;
    }

    
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                <img src={channelData[0].Image} alt={channelData[0].Channel} style={{maxHeight: '50%', maxWidth: '50%'}}/>
            </div>

            <div style={{ flex: 1 }}>
                <div>
                    <h2>{channelData[0].Channel}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Subscribers: {channelData[0].Subscribers}</li>
                        <li className="list-group-item">Views: {channelData[0].Views}</li>
                        <li className="list-group-item">YouTube: <a href={channelData[0].Youtube}>{channelData[0].Youtube}</a><img  src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png" width="25" height="25" /></li>
                        <li className="list-group-item">Instagram: <a href={channelData[0].Instagram}>{channelData[0].Instagram}</a> <img  src="https://i.pinimg.com/736x/30/8b/49/308b4978318a5ac83e6b128c32504742.jpg" width="25" height="25" /></li>
                        <li className="list-group-item">Twitter: <a href={channelData[0].Twitter}>{channelData[0].Twitter}</a><img  src="https://t3.ftcdn.net/jpg/06/29/22/40/360_F_629224066_zdnJIKaJHiMkP6EOIoh6hvUxcnFpsbE1.jpg" width="25" height="25" /></li>
                        <li className="list-group-item">WhatsApp Channel: <a href={channelData[0].Whatsapp}>{channelData[0].Whatsapp}</a><img  src="https://thumbs.dreamstime.com/b/whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-whatsapp-icon-illustration-whatsapp-app-logo-social-media-icon-305513225.jpg" width="25" height="25" /></li>
                        <li className="list-group-item">Website: <a href={channelData[0].Website}>{channelData[0].Website}</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <hr class="hr hr-blurry" />
        
        <div className="container" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
            <h1 className='text-center mt-3 mb-3' style={{position: 'sticky'}}>Videos</h1>
            
                <ul className="list-group list-group-flush" >    
                    {videos.map((video, index) => 
                        video.Anchor !== 'Unknown' &&(
                        <li className="list-group-item" >
                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ flex: 1, textAlign: 'center', position: 'relative'   }}>
                                    <img src={`https://img.youtube.com/vi/${video.ID}/maxresdefault.jpg`} alt={video.Title} style={{maxHeight: '50%', maxWidth: '50%'}}/>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div>
                                        
                                        <h5>{video.Title}</h5>
                                        <p>Views: {video.Views}</p>
                                        {/* <button type="button" class="btn btn-primary" onClick={`https://www.youtube.com/watch?v=${video.ID}`}>Watch on Youtube</button>    */}
                                        <a class="btn btn-primary mb-3" href={`https://www.youtube.com/watch?v=${video.ID}`} role="button" target='_blank'>Watch on Youtube</a>
                                        </div>
                                        <div class="card text-bg-warning mb-3" style={{maxWidth: 150}}>  
                                          <h5 class="card-title text-center">{video.Category}</h5>
                                        </div>
                                        <div class="card text-bg-secondary mb-3" style={{maxWidth: 150}}>
                                            <h5 class="card-title text-center">{video.Anchor}</h5>
                                        </div>
                                    
                                       
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <nav>
                    <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(1)}>
                        First
                        </button>
                    </li>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        Prev
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                        </button>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(totalPages)}>
                        Last
                        </button>
                    </li>
                    </ul>
                </nav>
                </div>
        
        
        </>
    );
};

export default ChannelPage;



// const itemsPerPage = 5;

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate total pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Get current items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>Paginated List</h1>
//           <ul>
//             {currentItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//           <Pagination>
//             <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
//             <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
//             {[...Array(totalPages)].map((_, index) => (
//               <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
//                 {index + 1}
//               </Pagination.Item>
//             ))}
//             <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
//             <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
//           </Pagination>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;
