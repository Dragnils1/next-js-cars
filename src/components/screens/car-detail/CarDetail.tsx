import { Layout } from '@/components/layout/Layout'
import CarItem from '@/components/ui/car/CarItem'
import { IcarDataSingle } from '@/interfaces/car.interface'
import React, { FC } from 'react'

 const CarDetail: FC<IcarDataSingle> = ({car}) => {
  return (
    <Layout title={car.name}  description={car.description} >
        <CarItem car={car} />
    </Layout >
  )
}

export default CarDetail