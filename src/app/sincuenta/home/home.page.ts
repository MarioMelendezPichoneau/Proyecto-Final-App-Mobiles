import { Component } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders}  from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private urlApi = "def/noticias.php";
  //apiUrl: string = "https://adamix.net/defensa_civil/def/noticias.php";
  headers = new HttpHeaders().set('Content-Type', 'application/json');




  constructor(private http: HttpClient) {}

  Noticias: any = [];

  ngOnInit(): void {

    this.getnoticas();

  }


  getnoticas(){
    this.http.get(this.urlApi).subscribe((res)=>{
      this.Noticias = res;

    }, (error=>{
      console.error(error);
    }));
  }



}

export interface Noticias{
  id: number;
  fecha: string;
  titulo: string;
  contenido: string;
  foto: string;


}
