import {Component, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-toolbar-separator',
  styleUrl: 'styles/toolbar-separator.dark.scss',
  shadow: true
})
export class ToolbarSeparator {
  @Prop() theme: string = 'regular';

  className() {
    return classnames('wrapper', 't-' + this.theme);
  }

  render() {
    return (<div class={this.className()}>
      <slot/>
    </div>);
  }
}
