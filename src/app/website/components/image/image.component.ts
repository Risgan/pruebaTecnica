import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/models/hero';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() setImg!: string;

  imageDefault = 'https://picsum.photos/id/237/200/300';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.setImg = this.imageDefault;
  }
}
