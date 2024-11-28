import React, { useEffect, useState } from 'react';

const About = () => {
  const aboutId = '6729e30c51a6293384d24dff';
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAboutData = async () => {
    try {
      const response = await fetch(`http://44.196.64.110:9007/api/about/${aboutId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      setAboutData(data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="about-title">About</h1>
      {aboutData && (
        <div id="dynamic-content">
          {/* <h2>{aboutData.title}</h2> */}
          {/* <h3>{aboutData.category}</h3> */}
          <div dangerouslySetInnerHTML={{ __html: aboutData.content }} />
          {/* {aboutData.image1 && <img src={aboutData.image1} alt="Image 1" className="responsive-img" />} */}
          {/* {aboutData.image2 && <img src={aboutData.image2} alt="Image 2" className="responsive-img" />} */}
          {/* <p>Author: {aboutData.author}</p> */}
          {/* <p>Status: {aboutData.status}</p> */}
          {/* <p>Date: {aboutData.date}</p> */}
        </div>
      )}
    </div>
  );
};

export default About;