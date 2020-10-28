import { Component } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent {

  videos: Video[] = [];
  constructor(private youtube: YoutubeService) { 
   this.cargarVideos();
  }

  mostrarVideo(video:Video){
    console.log(video);
    Swal.fire({
      html:`
      <h4>${ video.title }</h4>
      <hr>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/BD_guK9b64k" 
      frameborder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture" allowfullscreen>
      </iframe>
    })
  }
  
  cargarVideos(){
    this.youtube.getVideos()
      .subscribe(data => {
      this.videos.push(...data);
    })
  }
}
