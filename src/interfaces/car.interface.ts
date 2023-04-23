import { RowDataPacket } from "mysql2";

export interface ICar extends RowDataPacket{
    id: number;
    name: string;
    image?: string;
    description?: string;
    model?: string;
}

export interface IcarData {
    cars: ICar[]
}

export interface IcarDataSingle {
    car: ICar
}