import { Component, OnInit,
         Input, Output, EventEmitter

} from '@angular/core';

/*
  <app-like [(likes)]="homePageLikes" />
  <app-like [(likes)]="productPageLikes" />
*/


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {


  // property binding [likes]
  @Input()
  likes: number; 

  // suffix "Change" added to like, which is angular convention/keyword
  // for two way binding
  // (likesChange)

  // [(likes)] - this is 2 way binding, property + event binding

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  up() { // +1
    this.likesChange.emit(this.likes + 1)
  }

  down() { // -1
    this.likesChange.emit(this.likes - 1)
  }

}
