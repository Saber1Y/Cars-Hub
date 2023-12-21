import Image from 'next/image'
import { Hero } from '../index'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-10 padding-x padding-y max-width' id='discover'>
        <div className='home__container'>
          <h1 className='text-black text-4xl font-extrabold'>Car's Catalogue <span className='text-blue-500 text-normal'>:</span> </h1>
        </div>
      </div>
    </main>
  )
}
