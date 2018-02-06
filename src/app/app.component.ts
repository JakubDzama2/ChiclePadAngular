import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ChiclePad';

  public userId: number = -1;
  public loggedIn: boolean = false;
  public entries: string[] = ['Notes', 'Goals', 'TODOs', 'DiaryPages'];
  private _selectedEntry: string = this.entries[0];
  public selectedNotes: boolean = this.selectedEntry == 'Notes';
  public selectedDiaries: boolean = this.selectedEntry == 'DiaryPages';

  get selectedEntry(): string {
    return this._selectedEntry;
  }

  set selectedEntry(selectedEntry: string) {
    this._selectedEntry = selectedEntry;
  }

  login(userId: number) {
    this.userId = userId;
    console.log(this.userId);
    this.loggedIn = this.userId != -1;
  }
}
