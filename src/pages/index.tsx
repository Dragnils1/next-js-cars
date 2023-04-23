import Home from "@/components/screens/home/Home";
import { ICar, IcarData } from "@/interfaces/car.interface";
import { CarService } from "@/services/car.service";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IcarData> = ({cars}) => {
  return <Home cars={cars}/>
}


// Вы должны использовать, getStaticProps если:
// Данные, необходимые для отображения страницы,
//  доступны во время сборки до запроса пользователя.
// т.е. для постов (данные будут обновляться через revalidate сек)
export const getStaticProps: GetStaticProps<IcarData> = async () => {
  const cars: ICar[] =
    await CarService.getAllCars()
    
    return {
      props: {cars},
      revalidate: 60
    }
}


// МЫ должны использовать getServerSideProps только в том случае,
// если вам нужно отобразить страницу,
// данные которой должны быть получены во время запроса.
// Т.е. сервак будет отвечать на каждый запрос новыми уникальными данными 
// не надо использовать для повторяющихся данных, типо статей. Вообще только в 5% случаев.

// export const getServerSideProps: GetServerSideProps<IcarData> = async () => {
//   const cars: ICar[] =
//     await CarService.getAllCars()
    
//     return {
//       props: {cars}
//     }
// }

export default HomePage;