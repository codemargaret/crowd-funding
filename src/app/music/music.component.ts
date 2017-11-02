import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [ProjectService]
})
export class MusicComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
