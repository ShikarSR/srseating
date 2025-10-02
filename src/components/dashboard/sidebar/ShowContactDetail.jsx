import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../../assets/css/dashboard.css';

const ShowContactDetail = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = async () => {
    try {
      const res = await fetch('http://localhost/backend/getContact.php');
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Company Name',
      selector: row => row.companyname,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Solution',
      selector: row => row.choosesolution,
      sortable: true,
    },
    {
      name: 'Message',
      selector: row => row.message,
      sortable: false,
      wrap: true
    }
  ];

  return (
    <div className='d_contact_table' style={{ padding: '20px' }}>
      <h2>Contact Submissions</h2>
      <DataTable
        columns={columns}
        data={contacts}
        pagination
        paginationPerPage={10}
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default ShowContactDetail;
