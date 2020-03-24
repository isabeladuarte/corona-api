import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../app/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reset: false;
  locations: [];
  id: 0;
  confirmed: 0;
  deaths: 0;
  recovered: 0;

  constructor(private coronaService: CoronaService){ }

  ngOnInit(){
    this.coronaService.listar().subscribe(dados => this.exibirPaises(dados));
  }

  exibirDados(dados){
    this.confirmed = dados.location.latest.confirmed;
    this.deaths = dados.location.latest.deaths;
    this.recovered = dados.location.latest.recovered;
  }

  exibirPaises(dados){
    this.locations = dados.locations;
  }

  onChange(id){
    this.coronaService.buscar(id).subscribe(dados => this.exibirDados(dados));
  }

}
