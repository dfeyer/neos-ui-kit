import {Component, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-label',
  styleUrl: 'styles/label.dark.scss',
  shadow: true
})
export class Label {

  @Prop() theme: string = 'regular';
  @Prop() label: string;

  className() {
    return classnames('t-' + this.theme);
  }

  render() {
    return <div class={this.className()}>{this.label}</div>;
  }
}
