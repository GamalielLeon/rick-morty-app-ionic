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

  characters: any[] = Array(10);
  allCharacters: any[] = Array();
  characterss: any[];
  // id: number = 1;

  constructor(private CharactersService: CharactersService) 
    {
        // this.getAllCharactersList();
        this.getCharacterList();
    }

  ngOnInit() {  }

  // async getAllCharactersList(){
  //   await this.CharactersService.getAllCharacters().subscribe(res =>{
  //     this.allCharacters = res;
  //     console.log(this.allCharacters);
  //   })
  // }

  async getCharacterList(){
    await this.CharactersService.getCharacters().subscribe(res =>{
      this.characterss = res;
      console.log(this.characterss);
    }, 
    error =>{
      console.log(error);
    })
  }

  
  // doInfinite(infiniteScroll){
  //   this.page = this.page + 1;
  //   setTimeout(() =>{
  //     this.CharactersService.getCharacters().subscribe( res =>{
  //       this.origin = res;
  //       this.name = this.origin.name;
  //       this.url = this.origin.url;
  //       console.log(res);
  //     })
  //   })
  // }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      if (this.characters.length == 60) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      var moreCharacters = Array(10);
      this.characters.push( ...moreCharacters)
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      
    }, 1000);
  }

}
