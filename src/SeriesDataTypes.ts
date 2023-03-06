export interface SeriesDataTypes {
    idSerie: string;
    titulo:  string;
    datos:   SerieDato[];
}

export interface SerieDato {
    dato:  string;
    fecha: string;
}
