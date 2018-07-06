import {Component, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-button',
  styleUrl: 'styles/button.dark.scss',
  shadow: true
})
export class Button {
  @Prop() theme: string;
  @Prop() size: string = 'regular';
  @Prop() focused: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() squared: boolean = false;
  @Prop() active: boolean = false;
  @Prop() type: string = 'button';

  className() {
    return classnames('t-' + this.theme, {'l-squared': this.squared});
  }

  render() {
    return (<button class={this.className()} disabled={this.disabled} type={this.type}>
      <slot/>
    </button>);
  }
}
