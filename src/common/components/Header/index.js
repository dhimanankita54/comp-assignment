import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { RiUser6Line } from 'react-icons/ri';

const Header = () => {
    const [save, setSave] = useState(true);
    return (
        <>
            <div className='p-3 flex items-center justify-between border border-b-gray-400'>
                <div className='flex gap-3 items-center justify-center w-fit'>
                    <FaArrowLeft className='text-gray-800' />
                    <h3 className='text-gray-500'> Name of the file</h3>
                </div>

                <div className='flex items-center justify-center'>
                    <label className="inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked={save} onChange={(e) => setSave(e.target.checked)} />
                        <div className="relative w-9 h-5 bg-gray-500 rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-default:after:left-1 peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[20px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-green-500"></div>
                        <span className="ms-3 text-sm font-medium text-green-500">Auto Save</span>
                    </label>

                    <div className='bg-orange-100 p-2 rounded-full'>
                        <RiUser6Line className='text-orange-600' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
