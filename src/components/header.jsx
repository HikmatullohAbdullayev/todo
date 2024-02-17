import React from 'react';
import  { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
    const {mode, setMode, toggle} = useContext(ThemeContext)
    
    return (
        <div className='flex justify-between items-center'>
           <div className="block">
           <p className={`p-3 ${mode ? 'bg-cyan-200 '  : 'bg-gray-500 text-white'}`}>Lorem ipsum dolor sit amet.</p>
           <p className={`p-3 ${mode ? 'bg-cyan-200 '  : 'bg-gray-500 text-white'}`}>Lorem ipsum dolor sit amet.</p>
           </div>

           <button className='bg-green-500 p-2 rounded-lg' onClick={toggle}>dark/light mode</button>

        </div>
    );
}

export default Header;