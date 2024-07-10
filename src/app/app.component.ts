import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  accordionItems = [
    { title: 'Item 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio tempora culpa, quia eveniet temporibus.' },
    { title: 'Item 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio tempora culpa, quia eveniet temporibus.' },
    { title: 'Item 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio tempora culpa, quia eveniet temporibus.' }
  ];

  navbarLinks = [
    { url: '/', label: 'Home' },
    { url: '/Counter', label: 'Counter' },
    { url: '/contact', label: 'contact' },
    { url: '/Accordion', label: 'Accordion' },
    { url: '/Notes', label: 'Notes' },
  
  ]
}
