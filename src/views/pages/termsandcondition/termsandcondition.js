// src/TermsAndConditions.js
import React, { useEffect, useState } from 'react';

const TermsAndConditions = () => {
  const termsAndConditionsId = '6729e45151a6293384d24e04';
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTermsData = async () => {
    try {
      const response = await fetch(`http://44.196.192.232:9007/api/termsandcondition/${termsAndConditionsId}`);
      console.log("111", response)
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
  
      setTermsData(data);
    } catch (error) {
      console.error('Error fetching terms and conditions data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTermsData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="about-title">Terms and Conditions</h1>
      {termsData && (
        <div id="dynamic-content">
          {/* <h2>{termsData.title}</h2>
          <h3>{termsData.category}</h3> */}
          <div dangerouslySetInnerHTML={{ __html: termsData.content }} />
          {/* {termsData.image1 && <img src={termsData.image1} alt="Image 1" className="responsive-img" />}
          {termsData.image2 && <img src={termsData.image2} alt="Image 2" className="responsive-img" />}
          <p>Author: {termsData.author}</p>
          <p>Status: {termsData.status}</p>
          <p>Date: {termsData.date}</p> */}
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;
