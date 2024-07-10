import { Component, OnInit } from '@angular/core';
import { Note } from 'src/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  nextId: number = 1;

  constructor() { }

  ngOnInit(): void {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
      this.nextId = this.notes.length ? Math.max(...this.notes.map(note => note.id)) + 1 : 1;
    }
  }

  addNote() {
    const newNote: Note = { id: this.nextId++, content: '' };
    this.notes.push(newNote);
    this.saveNotes();
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
