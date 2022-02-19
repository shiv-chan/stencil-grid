import { Component, h, Prop } from '@stencil/core';
import { Picture } from '../../picture';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() picture: Picture;

  render() {
    return (
      <div class="card">
        <img src={this.picture.url} alt={this.picture.title} />
        <div class="card-header">
          <h2>{this.picture.title}</h2>
          <p>{this.picture.date}</p>
        </div>
        <p class="card-content">{this.picture.explanation}</p>
      </div>
    );
  }
}
