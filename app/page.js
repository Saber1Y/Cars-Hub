
import Image from 'next/image'
import { Hero, CustomFilter, Searchbar } from '../index'
import { fetchCars } from '@/utils'



export default async function Home() {

  const allCars = await fetchCars();

  console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-10 padding-x padding-y max-width' id='discover'>
        <div className='home__container'>
          <h1 className='text-black text-4xl font-extrabold'>Car's Catalogue <span className='text-blue-500 text-normal'>:</span> </h1>
          <p>Explore a Wide Variety of Car's</p>
        </div>

        <div className='home__filters'>
          <Searchbar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

      </div>
    </main>
  )
}
