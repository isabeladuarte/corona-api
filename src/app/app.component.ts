import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../app/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corona-app';

  lista: Array<any>;

  constructor(private coronaService: CoronaService){ }

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.coronaService.listar().subscribe(dados => this.lista = dados);
  }
}
