import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const aboutList = () => {
  const [abouts, setabouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://www.panel.efe-travel.com/api/abouts')
      .then(response => setabouts(response.data))
      .catch(error => console.error('Error fetching abouts:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/abouts/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this about?')) {
      axios.delete(`https://www.panel.efe-travel.com/api/abouts/${id}`)
        .then(() => setabouts(abouts.filter(about => about._id !== id)))
        .catch(error => console.error('Error deleting about:', error));
    }
  };

 

  return (
    <CRow>
      <CCol>
        <CCard className="d-flex 100%">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h1 style={{ fontSize: '24px', color: 'purple' }}>about Management List</h1>
            <CButton color="primary" size="sm" className="float-right" onClick={() => navigate('/abouts/create')}>Create New about</CButton>
          </CCardHeader>
          <CCardBody>
            <CTable striped hover bordered responsive>
              <CTableHead color='dark'>
                <CTableRow>
                  <CTableHeaderCell>Title</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Author</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Image 1</CTableHeaderCell>
                  <CTableHeaderCell>Image 2</CTableHeaderCell>
                  <CTableHeaderCell>Date</CTableHeaderCell>

                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {abouts.map((about) => (
                  <CTableRow key={about._id}>
                    <CTableDataCell>{about.title}</CTableDataCell>
                    <CTableDataCell>{about.category}</CTableDataCell>
                    <CTableDataCell>{about.author}</CTableDataCell>
                    <CTableDataCell>{about.status}</CTableDataCell>
                    <CTableDataCell>
                      {about.image1 && (
                        <img
                          src={`https://www.panel.efe-travel.com/api/uploads/${about.image1}`}
                          alt="about"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>
                      {about.image2 && (
                        <img
                          src={`https://www.panel.efe-travel.com/api/uploads/${about.image2}`}
                          alt="about"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>{about.date}</CTableDataCell>
                    <CTableDataCell>
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{ color: '#f0ad4e', cursor: 'pointer' }}
                        onClick={() => handleEdit(about._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: '#bb1616', cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => handleDelete(about._id)}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default aboutList;