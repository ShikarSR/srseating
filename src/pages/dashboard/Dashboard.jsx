import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'
import ShowContactDetail from '@/components/dashboard/sidebar/ShowContactDetail'

const Dashboard = () => {
  return (
    <div className='d-flex'>
        <div className="d_sidebar_nav">
            <Sidebar/>
        </div>

        <div className="d_content_wrapper">
            <ShowContactDetail/>
        </div>
    </div>
  )
}

export default Dashboard