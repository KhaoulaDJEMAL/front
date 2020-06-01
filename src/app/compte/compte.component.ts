import { Component, OnInit } from '@angular/core';
import { CompteService } from './compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private compteService: CompteService,private router: Router) { }

  ngOnInit() {
    this.compteService.login();
  }
  save() {
    this.compteService.login();
    }


}
