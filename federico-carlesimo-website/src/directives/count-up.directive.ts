import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') targetNumber: number = 0;
  @Input() duration: number = 2000; // durata dell'animazione in millisecondi

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.startCounting();
  }

  startCounting() {
    const start = 0;
    const end = this.targetNumber;
    const frameRate = 20; // Aggiornamento ogni 20ms
    const totalFrames = this.duration / frameRate; // Numero totale di frame per la durata
    let currentFrame = 0;
    let currentNumber = start;

    const timer = setInterval(() => {
      currentFrame++;

      // Calcola il progresso come percentuale tra 0 e 1
      const progress = currentFrame / totalFrames;

      // Calcola il numero corrente con effetto di decelerazione
      currentNumber = end * (1 - Math.pow(1 - progress, 3)); // Funzione di easing

      // Aggiorna l'elemento con il numero arrotondato
      this.el.nativeElement.innerText = Math.floor(currentNumber);

      // Ferma il timer quando si raggiunge il numero finale
      if (currentFrame >= totalFrames) {
        this.el.nativeElement.innerText = end;
        clearInterval(timer);
      }
    }, frameRate);
  }
}
