"use client"
import React, { useState, Fragment } from 'react'
import { searchManuFacturerProps } from '../type'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants/data'



const SearchManufac = ({ manufacturer, setManufacturer }) => {

  const  [query, setQuery] = useState('')

  const FilteredManu = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  ));

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relativeeee w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
            src='/car-logo.svg'
            width={20}
            height={20}
            alt='car logo'
            className=''
            />

          </Combobox.Button>
          <Combobox.Input 
          className='search-manufacturer__input' placeholder='Volkwagen' displayValue={(manufacturer) => manufacturer} 
          onChange={(e) => setQuery(e.target.value)} 
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaeveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {FilteredManu.length === 0 && query !== "" && (
                <Combobox.Option 
                value={query}
                className="search-manufacturer__options"
                >
                  Create "{query}"
                </Combobox.Option>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufac
