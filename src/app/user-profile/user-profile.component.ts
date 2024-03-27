import { Component, inject, input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { UserService } from '../services/user.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [AsyncPipe, DataTableComponent],
  template: `
   <main>
      @if (profile$ | async; as profile) {
        <h1>{{profile.name}}</h1>
        <app-data-table [data]="profile" />
      }
    </main>
 `

})
export class UserProfileComponent {
  #user = inject(UserService)
  userId = input.required<string>();
  profile$ = toObservable(this.userId).pipe(
    switchMap(id => this.#user.profile(id))
  );

}
