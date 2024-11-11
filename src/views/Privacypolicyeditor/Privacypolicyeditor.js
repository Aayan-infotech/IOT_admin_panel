import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const PrivacyPolicyEditor = () => {
  const [privacypolicy, setPrivacyPolicy] = useState({
    title: '',
    category: '',
    content: '',
    date: '',
    author: 'Admin',
    status: 'draft'
  });
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const id = '6729e44351a6293384d24e02'; // Use the specified ID
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch privacy policy data using the correct GET API endpoint
      axios.get(`http://44.196.192.232:9007/api/privacypolicy/${id}`)
        .then(response => {
          const privacypolicyData = response.data;
          console.log('gqsgwsdhsds' ,privacypolicyData);
          
          setPrivacyPolicy({
            ...privacypolicyData,
            date: formatDate(privacypolicyData.date) // Format date for display
          });
        })
        .catch(error => console.error('Error fetching privacy policy:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrivacyPolicy({ ...privacypolicy, [name]: value });
  };

  const handleContentChange = (content) => {
    setPrivacyPolicy({ ...privacypolicy, content });
  };

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', privacypolicy.title);
    formData.append('category', privacypolicy.category);
    formData.append('content', privacypolicy.content);
    formData.append('date', privacypolicy.date);
    formData.append('author', privacypolicy.author);
    formData.append('status', privacypolicy.status);
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);

    try {
      // Update the existing entry using the specified PUT API endpoint
      await axios.put(`http://44.196.192.232:9007/api/privacypolicy/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/privacy-policy'); // Redirect after update
    } catch (error) {
      console.error('Error saving privacy policy:', error);
    }
  };

  return (
    <CCard>
      <CCardHeader>Edit Privacy Policy</CCardHeader>
      <CCardBody>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              id="title"
              name="title"
              value={privacypolicy.title}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              id="category"
              name="category"
              value={privacypolicy.category}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <ReactQuill
              value={privacypolicy.content}
              onChange={handleContentChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              id="author"
              name="author"
              value={privacypolicy.author}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              name="status"
              value={privacypolicy.status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="image1" className="form-label">Image 1</label>
            <input
              type="file"
              id="image1"
              name="image1"
              onChange={handleImage1Change}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image2" className="form-label">Image 2</label>
            <input
              type="file"
              id="image2"
              name="image2"
              onChange={handleImage2Change}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={privacypolicy.date}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <CButton type="submit" color="primary">Save</CButton>
        </form>
      </CCardBody>
    </CCard>
  );
};

export default PrivacyPolicyEditor;