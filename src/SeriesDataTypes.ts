export interface SeriesDataTypes {
  id: string;
  idSerie: string;
  titulo: string;
  range: {
    start: string;
    end: string;
  };
  datos: SerieDato[];
}

export interface SerieDato {
  dato: string;
  fecha: string;
}
