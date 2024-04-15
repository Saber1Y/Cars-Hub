import Image from 'next/image'
import { Hero, CustomFilter, Searchbar, CardCard } from '../index'
import { fetchCars } from '@/utils'



export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year || '2022',
    fuel: searchParams.fuel,
    limit: searchParams.limit || '10'
  });



  //if Nocars gets fetched
  const emptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-10 padding-x padding-y max-width' id='discover'>
        <div className='home__container'>
          <h1 className='text-black text-4xl font-extrabold'>Car&apos; Catalogue <span className='text-blue-500 text-normal'>:</span> </h1>
          <p>Explore a Wide Variety of Car&apos;</p>
        </div>

        <div className='home__filters'>
          <Searchbar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {!emptyData ? (
          <div className='home__cars-wrapper'>
            {allCars?.map((car, id) => (
              <CardCard car={car} key={id} />
            ))}
          </div>
        ) :
          <div className='home__error-container'>
            <h2 className='text-black text-xl'>Sorry, cant find any...</h2>
            <p>{allCars?.message}</p>
          </div>}

      </div>
    </main>
  )
}
