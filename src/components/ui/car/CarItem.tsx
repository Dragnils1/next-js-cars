import { ICar, IcarDataSingle } from '@/interfaces/car.interface'
import Image from 'next/image'
import Link from 'next/link';
import React, { FC } from 'react'

const CarItem: FC<IcarDataSingle> = ({car}) => {
    console.log(car);
    
  return (
    <div key={car.id}>
        {car.image && <Image src={car.image} alt={car.name} width={400} height={250}/>}
        <h2>{car.model}</h2>
        <Link href={`/car/${car.id}`}>{car.name}</Link>
        <span>{car.description}</span>
        <hr />
    </div>
  )
}


export default CarItem