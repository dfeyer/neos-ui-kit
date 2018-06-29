import {Component} from '@stencil/core';

@Component({
  tag: 'neos-badge',
  styleUrl: 'styles/badge.dark.scss',
  shadow: true
})
export class Badge {
  render() {
    return <div><slot /></div>;
  }
}
