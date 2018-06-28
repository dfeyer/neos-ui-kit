import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-badge',
  styleUrl: 'styles/badge.dark.scss',
  shadow: true
})
export class Badge {

  @Prop() label: string;

  render() {
    return this.label;
  }
}
