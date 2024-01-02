export interface Movie{
    id:number;
    title:string;
    description:string;
    SecondaryDescriptor:string;

}
export interface MovieData{
    movies:Movie[];
}