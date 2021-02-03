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
  character: any;
  episodes: any;
  dataReceived: boolean = false;
  comma = ",";

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.getIdRoute();

  }


  getIdRoute(){
    this.detailsId = this.activatedRoute.snapshot.paramMap.get('id')
    this.charactersService.getId( this.detailsId).subscribe(res =>{
      this.character = res[0];
      this.dataReceived = true;
      this.episodes = this.character.episode;
      // this.separateEpisodes (this.episodes, this.comma)
    })
  }
  
  
  separateEpisodes(stringToDivide, separator){
    let episodesArray = stringToDivide.split(separator);
    debugger
    for (let i=0; i < episodesArray.length; i++) {
      debugger
      document.write(episodesArray[i] + " / ");
   }
   console.log(episodesArray);
  }

}
