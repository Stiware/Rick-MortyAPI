import { Component, OnInit } from '@angular/core';
import { CadrdsService } from './cadrds.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  next_page: string = '';
  previous_page: string = '';

  datos: any[] = [];

  constructor(private cardService: CadrdsService) {}

  ngOnInit(): void {
    this.cardService.getPersonajes().subscribe((data) => {
      this.next_page = data.info.next;
      this.previous_page = data.info.prev;
      this.fillData(data);
    });
  }

  private fillData(data: any) {
    this.next_page = data.info.next;
    this.previous_page = data.info.prev;

    this.datos = []
    for (let i = 0; i < data.results.length; i++) {
      this.datos.push({
        nombre: data.results[i].name,
        img: data.results[i].image,
        gender: data.results[i].gender,
        status:   data.results[i].status,
        species: data.results[i].species,
        type: data.results[i].type,
        origin: data.results[i].origin,
        location: data.results[i].location,
        episode:   data.results[i].episode,
        created: data.results[i].species,
      });
    }
    this.datos = data.results;
  }

  ChangePage() {

    console.log('click')
    if (document.activeElement?.id == 'next') {
      this.cardService.getPersonajes(this.next_page).subscribe((data) => {
        this.fillData(data);
      });
    }
    else{
      this.cardService.getPersonajes(this.previous_page).subscribe((data) => {
        this.fillData(data);
      });
    }
  }


  ver(episodes: any) {
    let all = '';
    for(let i = 0; i < episodes.length; i++){
      all = episodes[i]+'\n'+all
    }
    alert(all)
  }

}
