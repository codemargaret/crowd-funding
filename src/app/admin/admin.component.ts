import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, details: string, fundingGoal: number, category: string) {
    let newProject: Project = new Project(title, details, fundingGoal, category);
    console.log(newProject);
    this.projectService.addProject(newProject);
  }
}
