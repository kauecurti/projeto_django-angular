import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private router: Router,
    private appComponent: AppComponent) { }
  selected_member = { nome_fantasia: '', cnpj: '', id: '', email: '', city: ''};
  selected_product = {name_product:'', price:'', providers:''}
  selected_id;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
      this.loadProduct(id)
    });
   
  }

  loadMember(id){
    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }

    ); 
  }

  loadProduct(id){
    this.api.getProduct(id).subscribe(
      data => {
        console.log(data);
        this.selected_product = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }

    ); 
  }

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };
  
  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e, i) => {
          if(e.id == this.selected_id)
            index = i;
        });
        this.appComponent.members.splice(index, 1);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };
  


    update1(){
    this.api.updateProduct(this.selected_product).subscribe(
      data => {
        this.selected_product = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };
  
  delete1(){
    this.api.deleteProduct(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.produto.forEach((e, i) => {
          if(e.id == this.selected_id)
            index = i;
        });
        this.appComponent.produto.splice(index, 1);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };
  

  newMember(){
    this.router.navigate(['new-member']);
  };

}