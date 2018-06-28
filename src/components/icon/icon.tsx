import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-icon',
  styleUrl: 'styles/icon.dark.scss',
  shadow: true
})
export class Icon {

  @Prop() name: string;
  @Prop() type: string = 'regular';
  @Prop() squared: boolean = false;

  className() {
    return 'fa' + this.type.charAt(0) + ' ' + 'fa-' + this.name;
  }

  icon() {
    return <i class={this.className()}></i>;
  }

  squaredIcon() {
    return <div class="l-squared">{this.icon()}</div>
  }

  render() {
    return this.squared ? this.squaredIcon() : this.icon();
  }
}
