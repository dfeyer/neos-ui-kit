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

  classNames() {
    return classnames({
      '--compact': this.compact
    });
  }

  render() {
    return <span class={this.classNames()}><span class="label"><slot /></span></span>;
  }
}
