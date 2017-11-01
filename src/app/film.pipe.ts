import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'film'
})
export class FilmPipe implements PipeTransform {

  transform(input: Project[], category) {
    var output: Project[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === "Film") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
