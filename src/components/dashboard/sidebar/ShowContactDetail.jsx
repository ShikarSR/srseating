import React, { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../../assets/css/dashboard.css';

const CREATED_AT_KEYS = [
  'created_at',
  'registered_at',
  'submitted_at',
  'created_on',
  'createdon',
  'date_created',
  'createdAt',
  'timestamp',
];

const getCreatedAtValue = (row) => {
  for (const key of CREATED_AT_KEYS) {
    if (row?.[key]) {
      return row[key];
    }
  }

  return null;
};

const parseCreatedAtDate = (value) => {
  if (!value) {
    return null;
  }

  const normalizedValue = typeof value === 'string' ? value.replace(' ', 'T') : value;
  const parsedDate = new Date(normalizedValue);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
};

const formatCreatedAtDate = (value) => {
  const parsedDate = parseCreatedAtDate(value);

  if (!parsedDate) {
    return 'Not available';
  }

  return parsedDate.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const dashboardTableStyles = {
  table: {
    style: {
      minWidth: '1540px',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f5f7fb',
      borderBottomWidth: '1px',
      borderBottomColor: '#e6eaf2',
      minHeight: '56px',
    },
  },
  headCells: {
    style: {
      color: '#304057',
      fontSize: '13px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
    },
  },
  rows: {
    style: {
      minHeight: '64px',
      fontSize: '14px',
      color: '#23324a',
    },
    highlightOnHoverStyle: {
      backgroundColor: '#f8fbff',
      color: '#10233f',
      transition: 'background-color 0.2s ease',
    },
  },
  cells: {
    style: {
      paddingTop: '16px',
      paddingBottom: '16px',
      alignItems: 'flex-start',
      whiteSpace: 'normal',
      overflow: 'visible',
      textOverflow: 'unset',
    },
  },
  pagination: {
    style: {
      borderTop: '1px solid #e6eaf2',
      minHeight: '60px',
    },
  },
};

const ShowContactDetail = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const getContact = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('https://api.srseating.com/get-contact.php');
      const data = await res.json();
      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  const summary = useMemo(() => {
    const totalContacts = contacts.length;
    return {
      totalContacts,
    };
  }, [contacts]);

  const sortedContacts = useMemo(() => {
    return [...contacts].sort((leftRow, rightRow) => {
      const leftDate = parseCreatedAtDate(getCreatedAtValue(leftRow));
      const rightDate = parseCreatedAtDate(getCreatedAtValue(rightRow));

      if (!leftDate && !rightDate) {
        return 0;
      }

      if (!leftDate) {
        return 1;
      }

      if (!rightDate) {
        return -1;
      }

      return rightDate.getTime() - leftDate.getTime();
    });
  }, [contacts]);

  const columns = [
    {
      name: 'S.No',
      cell: (_row, index) => index + 1,
      sortable: false,
      width: '90px',
    },
    {
      name: 'Name',
      selector: (row) => row.name || '-',
      sortable: true,
      minWidth: '180px',
      wrap: true,
    },
    {
      name: 'Company',
      selector: (row) => row.companyname || '-',
      sortable: true,
      minWidth: '220px',
      wrap: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email || '-',
      sortable: true,
      minWidth: '250px',
      wrap: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone || '-',
      sortable: true,
      minWidth: '170px',
      wrap: true,
    },
    {
      name: 'Solution',
      selector: (row) => row.choosesolution || '-',
      sortable: true,
      minWidth: '190px',
      wrap: true,
    },
    {
      name: 'Message',
      selector: (row) => row.message || '-',
      sortable: false,
      wrap: true,
      minWidth: '340px',
    },
    {
      name: 'Created At',
      selector: (row) => formatCreatedAtDate(getCreatedAtValue(row)),
      sortable: true,
      minWidth: '220px',
      wrap: true,
    },
  ];

  return (
    <div
      className={`contact-dashboard${
        isSidebarCollapsed ? ' contact-dashboard--sidebar-collapsed' : ''
      }`}
    >
      <aside className="contact-dashboard__sidebar">
        <a href="/" className="contact-dashboard__brand" aria-label="SR Seating Home">
          <img
            src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/srlogo.png"
            alt="SR Seating Logo"
          />
        </a>
      </aside>

      <main className="contact-dashboard__main">
        <div className="contact-dashboard__topbar">
          <button
            type="button"
            className="contact-dashboard__toggle"
            onClick={() => setIsSidebarCollapsed((current) => !current)}
            aria-label={isSidebarCollapsed ? 'Open sidebar' : 'Close sidebar'}
          >
            <span className="contact-dashboard__toggle-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {isSidebarCollapsed ? 'Open' : 'Close'}
          </button>
        </div>

        <section className="contact-dashboard__hero">
          <div>
            {/* <span className="contact-dashboard__eyebrow">SR Seating Dashboard</span> */}
            <h1>Contact Registrations</h1>
          </div>
        </section>

        <section className="contact-dashboard__stats">
          <article className="contact-stat-card">
            <span className="contact-stat-card__label">Total Registrations</span>
            <strong>{summary.totalContacts}</strong>
            {/* <p>All contact submissions collected from the website.</p> */}
          </article>
        </section>

        <section className="contact-dashboard__table-shell">
          <div className="contact-dashboard__table-header">
            {/* <div>
              <span className="contact-dashboard__table-kicker">Lead Table</span>
              <h2>Contact details</h2>
            </div> */}
          </div>

          <div className="contact-dashboard__table-scroll">
            <DataTable
              columns={columns}
              data={sortedContacts}
              customStyles={dashboardTableStyles}
              pagination
              paginationPerPage={10}
              highlightOnHover
              pointerOnHover
              responsive={false}
              progressPending={isLoading}
              noDataComponent="No contact submissions found yet."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShowContactDetail;
