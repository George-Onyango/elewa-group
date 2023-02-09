import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() imgUrl!: string;
  @Input() text!: string;
  @Input() title!: string;
  @Input() placement!: string;
  @Input() background!: string;
}
