import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent implements OnInit {
  @Input()
  public user!: User;

  @Output()
  onDeleteButtonClicked = new EventEmitter<string>();

  protected readonly PrimeIcons = PrimeIcons;

  ngOnInit(): void {
    if (!this.user) throw Error('User property is required in UserCardComponent');
  }

  deleteButtonClicked(userId: string) {
    this.onDeleteButtonClicked.emit(userId);
  }
}
