import {Component} from '@angular/core';
import {GamesService} from '../games.service';

@Component({
    selector: 'list',
    templateUrl: 'app/games/list/list.template.html'
})
export class ListComponent {
    //Instance Variables
    games: any;
    errorMessage : string;

    //constructor
    constructor(private _gamesService: GamesService){
    }

    //methods
    ngOnInit(){
        this._gamesService.list().subscribe(games=> this.games = games);
        console.log(this.games);
    }
}