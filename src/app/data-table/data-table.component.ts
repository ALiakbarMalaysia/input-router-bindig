import { Component, Input, input } from '@angular/core';
import { User } from '../models/model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  template: `
  <ul class="user-data">
  <li>
      <span class="key">ID:</span>
      <span class="value">{{data().id}}</span>
    </li>
    <li>
      <span class="key">Email:</span> 
      <span class="value">{{data().email}}</span>
    </li>
    <li>
      <span class="key">Address:</span> 
      <span class="value">
        {{data().address.zipcode}},
        {{data().address.city}},
        {{data().address.street}},
        {{data().address.suite}}
      </span>
    </li>
  </ul>

  `

})
export class DataTableComponent {

  data = input.required<User>()

}
