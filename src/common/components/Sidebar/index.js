import React from 'react'
import { FiTable } from 'react-icons/fi'
import { ImCreditCard } from 'react-icons/im'
import { LiaCoinsSolid } from 'react-icons/lia'
import { TbChartCircles, TbPuzzle } from 'react-icons/tb'

const Sidebar = () => {
    return (
        <div className='px-4 py-6 border border-r-gray-400 max-w-fit h-full min-h-[90.8vh] flex items-center flex-col justify-between'>

            <div className='flex flex-col gap-5'>
                <FiTable size={24} className='text-gray-800' />
                <TbPuzzle size={26} className='text-gray-800' />
                <TbChartCircles size={26} className='text-gray-800' />
            </div>

            <div className='flex flex-col gap-5'>
                <ImCreditCard size={24} className='text-gray-800' />
                <LiaCoinsSolid size={26} className='text-pink-800' />
            </div>

        </div>
    )
}

export default Sidebar
