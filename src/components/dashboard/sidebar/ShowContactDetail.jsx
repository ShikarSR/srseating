import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../../assets/css/dashboard.css';

const ShowContactDetail = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = async () => {
    try {
      const res = await fetch('https://api.srseating.com/get-contact.php');
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2" style={{ height:"100vh", borderRight:"1px solid #F8D84D"}}>
        <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png" alt="SR Seating Logo"
        style={{width: "80%", marginTop: "40px", marginLeft:"auto", marginRight:"auto", display:"block"}}
        />
        </div>

        <div className="col-lg-10 ">
                 <div className='d_contact_table mt-5'>
      <h2 className='mt-4 mb-5'>Contact Submissions</h2>
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
        </div>

      </div>
 
    </div>
  );
};

export default ShowContactDetail;
