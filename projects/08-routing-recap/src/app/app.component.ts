import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  template: `
          <h1>Welcome to {{ title }}!</h1>
          @for (item of productTitles; track $index) {
            <div>
            <a [routerLink]="['details', $index]">{{ item }}</a>
            </div>
          }
          <router-outlet></router-outlet>    `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
