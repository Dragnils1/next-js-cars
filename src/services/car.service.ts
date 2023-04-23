import { ICar } from "@/interfaces/car.interface";
import connection from "@/lib/db"
import { QueryError } from "mysql2";

export const CarService = {
    async getAllCars() {
        
        // const [rows, fields] = await connection.query(
        //     'SELECT * FROM car',
        //     function(err: QueryError, results: ICar[], ) {
        //         response = results // results contains rows returned by server
        //     }
        //   );          
        
        return connection.promise().query("SELECT * FROM car")
            .then( ([rows,fields]: ICar[]) => {
                return rows;
            })
            .catch((e: QueryError) => {
                console.error(e.code)
                return([])
            })

        // const {data} = axios.get('/cars')
        // return data
    },

    async getSingleCar(id: String){
        return connection.promise().query("SELECT * FROM car where id = ?", [id])
            .then( ([rows,fields]: ICar[]) => {
                return rows[0];
            })
            .catch((e: QueryError) => {
                console.error(e.code)
                return([])
            })
    }
}