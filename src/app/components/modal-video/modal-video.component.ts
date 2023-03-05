import { Component, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent {
  @ViewChild('myVideo') myVideo: ElementRef | null = null;
  faPlayCircle = faPlayCircle;
  faPauseCircle = faPauseCircle;
  faStopCircle = faStopCircle;

  @Output() closeVideo = new EventEmitter<boolean>();

  onCloseVideo() {
    this.closeVideo.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  actionVideo(type: string) {
    if (this.myVideo) {
      switch (type) {
        case 'play':
          this.myVideo.nativeElement.play();
          break;
        case 'pause':
          this.myVideo.nativeElement.pause();
          break
        default:
          this.myVideo.nativeElement.currentTime = 0;
          this.myVideo.nativeElement.pause();
          break;
      }
    }
  }
}
