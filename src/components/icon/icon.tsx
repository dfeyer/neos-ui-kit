import {Component, Element, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-icon',
  styleUrl: 'styles/icon.dark.scss',
  shadow: true
})
export class Icon {
  @Element() el: HTMLElement;

  @Prop() name: string;
  @Prop() type: string = 'regular';
  @Prop() theme: string = 'regular';
  @Prop() path: string = 'assets';
  @Prop() squared: boolean = false;

  iconPath() {
    return this.path + '/' + this.type + '.svg#' + this.name; 
  }

  className() {
    return classnames('t-' + this.theme, {
      'l-squared': this.squared
    });
  }

  render() {
    return (
    <div class={this.className()}>
      <svg>
        <use xlinkHref={this.iconPath()}></use>
      </svg>
    </div>
    );
  }
}
