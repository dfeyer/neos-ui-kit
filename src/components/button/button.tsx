import {Component, Prop} from '@stencil/core';

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
  @Prop() active: boolean = false;
  @Prop() type: string = 'button';

  render() {
    return (<button class={this.theme} disabled={this.disabled} type={this.type}>
      <slot/>
    </button>);
  }
}
