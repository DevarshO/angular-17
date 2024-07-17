import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appToggleCustom]',
  standalone: true,
})
export class ToggleCustomDirective implements OnChanges {
  @Input('appToggleCustom') highlighted: boolean = false;

  constructor(private el: ElementRef) {
    console.log('take ref-------------->', el);
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';
  @HostBinding('style.color') textColor: string = 'black';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes-------------->', changes);
    this.updateColor();
  }

  private updateColor() {
    this.backgroundColor = this.highlighted ? 'red' : 'green';
    this.textColor = this.highlighted ? 'white' : 'black';

    // this.el.nativeElement.style.color = 'white';
  }
}
