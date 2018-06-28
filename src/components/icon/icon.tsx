import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-icon',
  styleUrl: 'styles/icon.dark.scss',
  shadow: true
})
export class Icon {

  @Prop() name: string;
  @Prop() type: string = 'regular';

  className() {
    return 'fa' + this.type.charAt(0) + ' ' + 'fa-' + this.name;
  }

  render() {
    return <i class={this.className()}></i>;
  }
}
