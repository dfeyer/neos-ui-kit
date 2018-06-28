import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-label',
  styleUrl: 'styles/label.dark.scss',
  shadow: true
})
export class Label {

  @Prop() label: string;

  render() {
    return this.label;
  }
}
