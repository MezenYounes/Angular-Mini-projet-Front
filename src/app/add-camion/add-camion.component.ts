import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
@Component({
  selector: 'app-add-camion',
  templateUrl: './add-camion.component.html',
  styleUrls: ['./add-camion.component.css']
})
export class AddCamionComponent implements OnInit {
  
  newcamion = new camion();
  marques! : Marque[];
newIdmar! : number;
newmarque! : Marque;


  constructor(private camionService: CamionService, private router :Router,private activatedRoute: ActivatedRoute,) { }
  ngOnInit() {
    /* this.marques = this.camionService.listemarques(); */
      this.camionService.listemarques().
      subscribe(mars => {this.marques = mars;
      console.log(mars);
      });
    }
  addcamion(){
    this.newcamion.marque = this.marques.find(mar => mar.idmar == this.newIdmar)!;
    this.camionService.ajoutercamion(this.newcamion).subscribe(cam => {
console.log(cam);

  this.router.navigate(['camions']);
  });

  }
}
