import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {
  @Input() size: 'tiny' | 'small' | 'medium' | 'big' | 'large' = 'medium';
}
