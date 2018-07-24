import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  stream = {
    source: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
    licenseServers: {
        'com.widevine.alpha': {
            serverURL: 'https://widevine-proxy.appspot.com/proxy'
        }
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
}

  constructor() { }

  ngOnInit() {
  }

}
