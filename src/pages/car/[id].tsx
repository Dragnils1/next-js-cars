import { useRouter } from 'next/router'
import React from 'react'
import Home from "@/components/screens/home/Home";
import { ICar, IcarData, IcarDataSingle } from "@/interfaces/car.interface";
import { CarService } from "@/services/car.service";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import CarDetail from '@/components/screens/car-detail/CarDetail';
import { ParsedUrlQuery } from 'querystring';

const CarDetailPage: NextPage<IcarDataSingle> = ({car}) => {

    const {push, replace } =  useRouter()

  return (
    <div>
        <button onClick={() => push('/')}>go home</button>
        <button onClick={() => replace('/')}>go home</button>
        <CarDetail car={car} />
    </div>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

// со страницы, которая использует динамические маршруты,
//  Next.js будет статически предварительно отображать все пути,
//  указанные в getStaticPaths
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars: ICar[] =
    await CarService.getAllCars()

    return {
      paths: cars.map(car => ({
        params: {
          id: car.id.toString()
        }
      })),
      fallback: 'blocking' // обязательный параметр ( без него не заработает)
    }
}


// Вы должны использовать, getStaticProps если:
// Данные, необходимые для отображения страницы,
//  доступны во время сборки до запроса пользователя.
// т.е. для постов (данные будут обновляться через revalidate сек)
export const getStaticProps: GetStaticProps<IcarDataSingle> = async ({ params }) => {
  const car: ICar =
    await CarService.getSingleCar(String(params?.id))
    
    return {
      props: {car},
      revalidate: 60
    }
}

export default CarDetailPage