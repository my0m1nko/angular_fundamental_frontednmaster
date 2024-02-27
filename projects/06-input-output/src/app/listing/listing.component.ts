import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <!-- listing markup goes here -->
     <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model--> {{car.make}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year -->{{car.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission -->{{car.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles -->{{car.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price -->{{car.price}}</span>
          </p>
        </section>
      </article>
      <button (click)="handlerSave()">Save</button>
  `,
  styles: ``,
})
export class ListingComponent {
  // @Input() car: Car | undefined;
  @Input({required: true}) car!: Car;
  @Output() carSave = new EventEmitter<Car>();

  handlerSave(){
    this.carSave.emit(this.car);
  }
}
