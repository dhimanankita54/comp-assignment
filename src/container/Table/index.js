import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import Grid from './Grid';

const Table = () => {
  
  return (
    <div className='flex flex-col w-full overflow-auto'>
      <div id='table-header'>
        <TableHeader />
      </div>
      <Grid />
    </div>
  );
};

export default Table;