privacypolicyList.js
import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const privacypolicyList = () => {
  const [privacypolicys, setprivacypolicys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://44.196.64.110:9007/api/privacypolicys')
      .then(response => setprivacypolicys(response.data))
      .catch(error => console.error('Error fetching privacypolicys:', error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/privacypolicys/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this privacypolicy?')) {
      axios.delete(`http://44.196.64.110:9007/api/privacypolicys/${id}`)
        .then(() => setprivacypolicys(privacypolicys.filter(privacypolicy => privacypolicy._id !== id)))
        .catch(error => console.error('Error deleting privacypolicy:', error));
    }
  };

 

  return (
    <CRow>
      <CCol>
        <CCard className="d-flex 100%">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h1 style={{ fontSize: '24px', color: 'purple' }}>privacypolicy Management List</h1>
            <CButton color="primary" size="sm" className="float-right" onClick={() => navigate('/privacypolicys/create')}>Create New privacypolicy</CButton>
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
                {privacypolicys.map((privacypolicy) => (
                  <CTableRow key={privacypolicy._id}>
                    <CTableDataCell>{privacypolicy.title}</CTableDataCell>
                    <CTableDataCell>{privacypolicy.category}</CTableDataCell>
                    <CTableDataCell>{privacypolicy.author}</CTableDataCell>
                    <CTableDataCell>{privacypolicy.status}</CTableDataCell>
                    <CTableDataCell>
                      {privacypolicy.image1 && (
                        <img
                          src={`http://44.196.64.110:9007/api/uploads/${privacypolicy.image1}`}
                          alt="privacypolicy"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>
                      {privacypolicy.image2 && (
                        <img
                          src={`http://44.196.64.110:9007/api/uploads/${privacypolicy.image2}`}
                          alt="privacypolicy"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      )}
                    </CTableDataCell>
                    <CTableDataCell>{privacypolicy.date}</CTableDataCell>
                    <CTableDataCell>
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{ color: '#f0ad4e', cursor: 'pointer' }}
                        onClick={() => handleEdit(privacypolicy._id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: '#bb1616', cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => handleDelete(privacypolicy._id)}
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

export default privacypolicyList;
