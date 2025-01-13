

import React from 'react'
import Header from '../../common/components/Header';
import Sidebar from '../../common/components/Sidebar';
import Table from '../Table';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <Table />
            </div>
        </div>
    )
}

export default Home;
