import {Component, Element, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-badge',
  styleUrl: 'styles/badge.dark.scss',
  shadow: true
})
export class Badge {
  @Element() el: HTMLElement;

  @Prop() compact: boolean = false;

  hostClassNames() {
    this.el.className = classnames({
      '--compact': this.compact
    });
  }

  render() {
    this.hostClassNames();
    return <slot />;
  }
}
