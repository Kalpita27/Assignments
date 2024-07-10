import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: { title: string, content: string }[] = [];
  expandedIndex: number | null = null;

  toggleItem(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
