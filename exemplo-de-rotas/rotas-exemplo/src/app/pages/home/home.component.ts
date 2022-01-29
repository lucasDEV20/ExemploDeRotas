import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * @author lucasDEV20
 * @description adicionando o ActivatedRoute para nos da acesso 
 * a rota ativa no momento 
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    console.log(par);
  }

  /**
   * goToLogin() {
    this.router.navigate(['/login']);

  }

  O Activated Route nos dá acesso a 
  rota ativa no momento, seus parâmetros e demais valores.
   */

}
