import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const TermsAndConditionEditor = () => {
  const [termsAndCondition, setTermsAndCondition] = useState({
    title: '',
    category: '',
    content: '',
    date: '',
    author: 'Admin',
    status: 'draft',
  });
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const id  = '6729e45151a6293384d24e04'; // Get the ID from the URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://44.196.192.232:9007/api/termsandcondition/${id}`)
        .then(response => {
          const termsAndConditionData = response.data;
          console.log('fdfhdgrfg', termsAndConditionData);
          setTermsAndCondition({
            ...termsAndConditionData,
            date: formatDate(termsAndConditionData.date), // Format date for display
          });
        })
        .catch(error => console.error('Error fetching terms and conditions:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTermsAndCondition({ ...termsAndCondition, [name]: value });
  };

  const handleContentChange = (content) => {
    setTermsAndCondition({ ...termsAndCondition, content });
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
    formData.append('title', termsAndCondition.title);
    formData.append('category', termsAndCondition.category);
    formData.append('content', termsAndCondition.content);
    formData.append('date', termsAndCondition.date);
    formData.append('author', termsAndCondition.author);
    formData.append('status', termsAndCondition.status);
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);

    try {
      // Update the existing entry using the specified ID
      await axios.put(`http://44.196.192.232:9007/api/termsandcondition/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/terms-and-condition'); // Navigate to the list after successful update
    } catch (error) {
      console.error('Error saving terms and conditions:', error);
    }
  };

  return (
    <CCard>
      <CCardHeader>Edit Terms and Conditions</CCardHeader>
      <CCardBody>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              id="title"
              name="title"
              value={termsAndCondition.title}
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
              value={termsAndCondition.category}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <ReactQuill value={termsAndCondition.content} onChange={handleContentChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              id="author"
              name="author"
              value={termsAndCondition.author}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              name="status"
              value={termsAndCondition.status}
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
              value={termsAndCondition.date}
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

export default TermsAndConditionEditor;
