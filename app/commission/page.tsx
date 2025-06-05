'use client';

import { useState } from 'react';
import Image from 'next/image';
import MENU1 from '../../public/menus/6.jpg';
import MENU2 from '../../public/menus/4.jpg';

export default function Page() {
  const [overlay, setOverlay] = useState(false);

  const menus = [
    MENU1,
    MENU2,
  ]

  const test = [ "sample1", "sample2" ]

  test.map((item) => {
    console.log(item)
  })

  return (
    <div className='bg-gray-400 w-full h-full min-w-96 min-h-max'>
      <div className='align-top justify-self-center w-full min-h-max lg:px-80 md:px-52 sm:px-0'>
        <div className=' flex flex-col w-full h-full'>
          <div className='flex flex-row user_background'>
            <p className='p-10 font-bold text-4xl'>
              commission
            </p>
          </div>
          <div className='p-4'>
            <p className='font-bold text-lg'>description</p>
            <div className='bg-white px-3 py-5 rounded-xl'>
              <ul className='list-disc list-inside '>
                <li>requirements</li>
                <li>1</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col p-4 lg:h-full md:h-auto'>
            <table className="text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal border-b-4">
                <tr>
                  <th className='text-lg'>Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr className='flex flex-row'>
                  {menus.map((item, idx) => (
                    <td key={idx} className='px-2'>
                      <button onClick={() => {
                        console.log(overlay)
                        setOverlay(!overlay);
                      }}>
                        <Image 
                          src={item}
                          className='rounded-3xl'
                          width={400}
                          height={500}
                          alt="menu1"
                        />
                      </button>
                    </td>

                  ))}
                  {/* <td>
                    <button onClick={() => {
                      console.log(overlay)
                      setOverlay(!overlay);
                    }}>
                      <Image 
                        src={MENU1}
                        width={400}
                        height={500}
                        alt="menu1"
                      />
                    </button>
                  </td> */}
                </tr>
              </tbody>
            </table>
            {overlay && (
              <div className='flex justify-center items-center absolute w-full h-full top-0 left-0'>
                <div className='bg-slate-800 w-3/4 h-full opacity-45 relative flex flex-col'>
                  <div className='flex w-full justify-end'>
                    <button className='px-4 py-2' onClick={() => { setOverlay(!overlay) }}>X</button>
                  </div>
                  <div className='flex justify-center align-middle w-full h-full'>
                    <table>
                    <thead>
                      <tr>{test.map((item, idx) => (<th key={idx} className='text-lg'>{item}</th>))}</tr>
                    </thead>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='p-4'>
            <p className='font-bold text-lg'>contact</p>
            <div className='bg-white px-3 py-5 rounded-xl'>
              <ul className='flex flex-row px-3 list-disc list-inside'>
                <li className='px-2'>requirements</li>
                <li className='px-2'>1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}