import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name: 'Member 01', id: 1, surname: "Ciclano", photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname: "Beltrano", photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, surname: "Fulano", photo: 'http://www.minhaapp.com/photo2'},
  ];

  produto = [
    {name_product: 'Member 02', id: 2, price: 1},
    {name_product: 'Member 03', id: 3, price: 2}

  ];

  constructor(private api:ApiService, private router: Router){
    this.getMembers();
    this.getProduct();
  };
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }

    ); 
  };

   getProduct = () => {
    this.api.getAllProduct().subscribe(
      data => {
        this.produto = data
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }

    ); 
  };
  memberClick = (member) => {
    this.router.navigate(['member-detail', member.id]);
  };
}
