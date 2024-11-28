termsandconditionList.js
import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const termsandconditionList = () => {
  const [termsandconditions, settermsandconditions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://44.196.64.110:9007/api/termsandconditions')
      .then(response => settermsandconditions(response.data))
      .catch(error => console.error('Error fetching termsandconditions:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/termsandconditions/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this termsandcondition?')) {
      axios.delete(`http://44.196.64.110:9007/api/termsandconditions/${id}`)
        .then(() => settermsandconditions(termsandconditions.filter(termsandcondition => termsandcondition._id !== id)))
        .catch(error => console.error('Error deleting termsandcondition:', error));
    }
  };

 

  return (
    <CRow>
      <CCol>
        <CCard className="d-flex 100%">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h1 style={{ fontSize: '24px', color: 'purple' }}>termsandcondition Management List</h1>
            <CButton color="primary" size="sm" className="float-right" onClick={() => navigate('/termsandconditions/create')}>Create New termsandcondition</CButton>
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
                {termsandconditions.map((termsandcondition) => (
                  <CTableRow key={termsandcondition._id}>
                    <CTableDataCell>{termsandcondition.title}</CTableDataCell>
                    <CTableDataCell>{termsandcondition.category}</CTableDataCell>
                    <CTableDataCell>{termsandcondition.author}</CTableDataCell>
                    <CTableDataCell>{termsandcondition.status}</CTableDataCell>
                    <CTableDataCell>
                      {termsandcondition.image1 && (
                        <img
                          src={`http://44.196.64.110:9007/api/uploads/${termsandcondition.image1}`}
                          alt="termsandcondition"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>
                      {termsandcondition.image2 && (
                        <img
                          src={`http://44.196.64.110:9007/api/uploads/${termsandcondition.image2}`}
                          alt="termsandcondition"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>{termsandcondition.date}</CTableDataCell>
                    <CTableDataCell>
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{ color: '#f0ad4e', cursor: 'pointer' }}
                        onClick={() => handleEdit(termsandcondition._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: '#bb1616', cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => handleDelete(termsandcondition._id)}
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

export default termsandconditionList;
