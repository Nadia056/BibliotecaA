export interface Prestamo
{
    id?:number;
    id_usuario:number;
    id_libro:number;
    fecha_prestamo:string;
    fecha_devolucion:string;
    cliente?:string;
    libro?:string;
}