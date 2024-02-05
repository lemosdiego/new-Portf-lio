import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  titulo:string = 'Olá, me chamo Washington!'
  subtitulo:string = 'Apaixonado por tecnologia, sou formado em Análise e Desenvolvimento de sistemas. Atualmente, estou aprimorando meus conhecimentos na área com uma pós-graduação em Engenharia de Software '
  imagem:string = 'assets/minhafoto.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
