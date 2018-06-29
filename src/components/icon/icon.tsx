import {Component, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-icon',
  styleUrl: 'styles/icon.dark.scss',
  shadow: true
})
export class Icon {

  @Prop() name: string;
  @Prop() type: string = 'regular';
  @Prop() theme: string = 'regular';
  @Prop() squared: boolean = false;

  className() {
    return classnames('t-' + this.theme, {'l-squared': this.squared});
  }

  iconClassName() {
    return 'fa' + this.type.charAt(0) + ' ' + 'fa-' + this.name;
  }

  icon() {
    return <i class={this.iconClassName()}></i>;
  }

  render() {
    return <div class={this.className()}>{this.icon()}</div>;
  }
}
