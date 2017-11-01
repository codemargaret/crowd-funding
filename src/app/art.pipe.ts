import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'art'
})
export class ArtPipe implements PipeTransform {

  transform(input: Project[], category) {
    var output: Project[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === "Art") {
        output.push(input[i]);
      }
    }
    return output;
}

//   transform(input: Project[], category) {
//     var output: Project[] = [];
//     if(category === "Art") {
//     for (var i = 0; i < input.length; i++) {
//       if (input[i].category === "Art") {
//         output.push(input[i]);
//       }
//     }
//     return output;
//   } else if (category === "Music") {
//   for (var i = 0; i < input.length; i++) {
//     if (input[i].category === "Music") {
//       output.push(input[i]);
//     }
//   }
//     return output;
//   } else if (category === "Film") {
//     for (var i = 0; i < input.length; i++) {
//       if (input[i].category === "Film") {
//         output.push(input[i]);
//       }
//     }
//   }
// }

}
