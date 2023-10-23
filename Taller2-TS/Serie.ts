export class Serie {
    id: number;
    name: string;
    station : string;
    seasons: number;
    description:string;
    webPage: string;
    image: string;
  
    constructor(id: number, name: string, station: string, seasons: number, description:string, webPage: string, image: string) {
        this.id = id;
        this.name = name;
        this.station = station;
        this.seasons = seasons;
        this.description = description;
        this.webPage = webPage;
        this.image = image;
    }
  }