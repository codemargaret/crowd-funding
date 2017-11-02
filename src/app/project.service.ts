import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
 }

 getProjects() {
   return this.projects;
 }

 addProject(newProject: Project){
   this.projects.push(newProject);
 }

 getProjectById(projectId: string){
   return this.database.object('projects/' + projectId);
 }

 updateProject(localUpdatedProject){
   let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
   projectEntryInFirebase.update({title: localUpdatedProject.title,
                               details: localUpdatedProject.details,
                               fundingGoal: localUpdatedProject.fundingGoal,
                               fundsRecieved: localUpdatedProject.fundsRecieved,
                               category: localUpdatedProject.category});
 }

 deleteProject(localProjectToDelete){
   let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
   projectEntryInFirebase.remove();
 }

}
