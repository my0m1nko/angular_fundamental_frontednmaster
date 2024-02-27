import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input type="text" id="title"  [(ngModel)]="titleValue">

        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea name="post" id="post" cols="47" rows="10" [(ngModel)]="bodyValue"></textarea>
      </section>
      <section>
        <h3>{{titleValue}}</h3>
        <p>{{bodyValue}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  titleValue = '';
  bodyValue = '';

}
