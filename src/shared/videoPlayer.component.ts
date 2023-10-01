import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video
      #target
      class="video-js vjs-theme-soria"
      controls
      playsinline
      poster='https://w0.peakpx.com/wallpaper/562/352/HD-wallpaper-kotonoha-no-niwa-movie-lake-kotonoha-city-anime-garden-of-words-garden-rain-scenery-couple.jpg'
      preload='metadata'
    ></video>
  `,
  styleUrls: ['./video-player.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target?: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options?: {
    fluid?: boolean;
    aspectRatio?: string;
    preload?: videojs.Preload;
    poster?: string;
    muted?: boolean;
     skipButtons?: {forward?: number; backward?: number},
    experimentalSvgIcons?: boolean;
    controls: boolean;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  }

  player?: videojs.Player;

  constructor(private elementRef: ElementRef) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target?.nativeElement, this.options, () => {
      console.log('onPlayerReady', this);
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
