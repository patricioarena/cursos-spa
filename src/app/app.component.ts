import { Component, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface Video {
  name: string
  url: string;
}

interface Curso {
  cursoName: string;
  videos: Video[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app-links';

  curso1: Curso = {
    cursoName: "Tricología",
    videos: [
      { name: "Seminario de tricología analítica 1", url: "https://streamtape.com/v/Mx8bJQA1Gxt6BG" },
      { name: "Seminario de tricología analítica 2", url: "https://streamtape.com/v/Od0kLkXXZ3fZOwY" },
      { name: "Seminario de tricología analítica 3", url: "https://streamtape.com/v/0lbMD2peYVSbykr" },
      { name: "Seminario de tricología analítica 4", url: "https://streamtape.com/v/1Lez3ZzYp0fez1W" },
      { name: "Seminario de tricología analítica 5", url: "https://streamtape.com/v/Z2vZgyJg3zIyev" }
    ]
  };

  curso2: Curso = {
    cursoName: "Fisica genetica",
    videos: [
      { name: "Clase 1 Física, fuerzas y potencias - Parte 1.mp4", url: "https://streamtape.com/v/WqWmxwgWaRCb4gd" },
      { name: "Clase 1 Física, fuerzas y potencias - Parte 2.mp4", url: "https://streamtape.com/v/q69zd88a7VCz9v1" },
      { name: "Clase 2 Fibra capilar y daños a nivel estructural, Parte 1.mp4", url: "https://streamtape.com/v/JqdypwkY4DIjYyX" },
      { name: "Clase 2 Fibra capilar y daños a nivel estructural, Parte 2.mp4", url: "https://streamtape.com/v/1x2aywL111CeKVa" },
      { name: "Clase 3 Procedimientos, Parte 1.mp4", url: "https://streamtape.com/v/XwAmJkVkGOcAAO" },
      { name: "Clase 3 Procedimientos, Parte 2.mp4", url: "https://streamtape.com/v/revPAjyg2LibmYP" },
      { name: "Clase 3 Procedimientos, Parte 3.mp4", url: "https://streamtape.com/v/D9yVBQzxdBHkXOb" },
      { name: "Clase 4 Diagnostico, problemáticas, ingredientes compatibles, Parte 1.", url: "https://streamtape.com/v/myjOkQK12AIQ4v" },
      { name: "Clase 4 Diagnostico, problemáticas, ingredientes compatibles, Parte 2.mp4", url: "https://streamtape.com/v/lAzWVAyVmZs7pBj" },
      { name: "Clase 5 Cosmética, ciencia, mascaras y acondicionadores, Parte 1.mp4", url: "https://streamtape.com/v/yxj63Z6GLZUyj2" },
      { name: "Clase 5 Cosmética, ciencia, mascaras y acondicionadores, Parte 2.mp4", url: "https://streamtape.com/v/O4YodRoWrauZVdY" },
      { name: "Clase 5 Cosmética, ciencia, mascaras y acondicionadores, Parte 3.mp4", url: "https://streamtape.com/v/DQrzplDL0MfkOPD" }
    ]
  };

  jaggedArray = [this.curso1, this.curso2]

  constructor(public sanitizer: DomSanitizer) { }



  downloadText(curso:Curso) {
    let cursoName = curso.cursoName+'\n';
    let concatNameAndUrl = curso.videos.map((video) => {
      return video.name + ' => ' + video.url + '\n';
    })

    let contentFile = cursoName + concatNameAndUrl.toString();
    contentFile = contentFile.replace(/,/g, '')

    var a = document.body.appendChild(document.createElement("a"));
    a.download = "export.txt";
    a.href = "data:text/plain;base64," + btoa(contentFile);
    a.click()
  }

}
