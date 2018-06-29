import {Component, Prop} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-toolbar',
  styleUrl: 'styles/toolbar.dark.scss',
  shadow: true
})
export class Toolbar {
  @Prop() theme: string = 'regular';

  wrapperClassName() {
    return classnames('wrapper', 't-' + this.theme);
  }

  render() {
    return (<div class={this.wrapperClassName()}>
      <div class="zone"><slot/></div>
      <div class="zone"><slot name="secondary"/></div>
    </div>);
  }
}
