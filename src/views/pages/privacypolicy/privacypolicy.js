// src/PrivacyPolicy.js
import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const privacyPolicyId = '6729e44351a6293384d24e02';
  const [policyData, setPolicyData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPrivacyPolicyData = async () => {
    try {
      const response = await fetch(`http://44.196.192.232:9007/api/privacypolicy/${privacyPolicyId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      console.log("111", data);
      setPolicyData(data);
    } catch (error) {
      console.error('Error fetching privacy policy data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrivacyPolicyData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="about-title">Privacy Policy</h1>
      {policyData && (
        <div id="dynamic-content">
          {/* <h2>{policyData.title}</h2>
          <h3>{policyData.category}</h3> */}
          <div dangerouslySetInnerHTML={{ __html: policyData.content }} />
          {/* {policyData.image1 && <img src={policyData.image1} alt="Image 1" className="responsive-img" />}
          {policyData.image2 && <img src={policyData.image2} alt="Image 2" className="responsive-img" />}
          <p>Author: {policyData.author}</p>
          <p>Status: {policyData.status}</p>
          <p>Date: {policyData.date}</p> */}
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;