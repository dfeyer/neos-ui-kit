import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-inspector-group-header',
  styleUrl: 'styles/inspector-group-header.dark.scss',
  shadow: true
})
export class InspectorGroupHeader {
  @Prop() label: string;
  @Prop() icon: string;

  render() {
    return (<header>
      <neos-icon squared name={this.icon} type="solid"></neos-icon>
      <neos-label theme="bold" label={this.label}></neos-label>
      <div class="toggle">
        <neos-button squared theme="transparent">
          <neos-icon name="chevron-up" type="solid"></neos-icon>
        </neos-button>
      </div>
    </header>);
  }
}
