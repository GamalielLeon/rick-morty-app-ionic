import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private CharactersService: CharactersService) 
    {
      this.loadCharacterList();
    }

    characters: any[] = Array();
    page = 1;
    maximumPages = 67;
    
  ngOnInit() {  }

  
  async loadCharacterList(infiniteScroll?){
    await this.CharactersService.getCharacters(this.page).subscribe(res =>{
      this.characters = this.characters.concat(res);
      // console.log(this.characters);
      if (infiniteScroll){
        infiniteScroll.target.complete();
       }
    }, 
    error =>{
      console.log(error);
    })
  }

  async loadMore(infiniteScroll){
    this.page++;
    await this.loadCharacterList(infiniteScroll);
      if(this.page === this.maximumPages){
        infiniteScroll.enable(false);
      }
  }

}
