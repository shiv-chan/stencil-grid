import { Component, h, State } from '@stencil/core';
import moment from '@rollups/moment';
import { Picture } from '../../picture';
import dotenv from 'dotenv';

dotenv.config();

@Component({
  tag: 'my-grid',
  styleUrl: 'my-grid.css',
  shadow: true,
})
export class MyGrid {
  private picturesUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
  private startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  private endDate = moment().format('YYYY-MM-DD');

  @State() pictures: Picture[] = [];
  @State() message: string = 'Loading...';

  componentDidLoad() {
    fetch(`${this.picturesUrl}&start_date=${this.startDate}&end_date=${this.endDate}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong...please try again.');
        } else {
          return res.json();
        }
      })
      .then(data => (this.pictures = data))
      .catch(err => {
        console.error('catch error!', err);
        this.message = err.message;
      });
  }

  render() {
    let messageBlock = <p id="message">{this.message}</p>;

    let mainContent = (
      <div class="container">
        {this.pictures.map(pic => {
          return <my-card picture={pic} key={pic.date}></my-card>;
        })}
      </div>
    );
    return (
      <div class="wrapper">
        <h1>Stencil - Grid Component</h1>
        {this.pictures.length ? mainContent : messageBlock}
      </div>
    );
  }
}
