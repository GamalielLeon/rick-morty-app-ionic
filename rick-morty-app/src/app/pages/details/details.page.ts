import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  detailsId: string;
  characters;
  episodes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.getIdRoute();
  }

 getIdRoute(){
  this.detailsId = this.activatedRoute.snapshot.paramMap.get('id')
  this.charactersService.getId( this.detailsId).subscribe(res =>
    this.characters = res)
    // console.log(res))
    // console.log(this.characters)
}

  


}
