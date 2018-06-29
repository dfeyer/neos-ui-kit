import {Component, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'neos-inspector-group-header',
  styleUrl: 'styles/inspector-group-header.dark.scss',
  shadow: true
})
export class InspectorGroupHeader {
  @Event() neosVisibilitySwitched: EventEmitter<boolean>;

  @Prop() label: string;
  @Prop() icon: string;
  @Prop() open: boolean = true;

  neosVisibilitySwitchedHandlerHandler() {
    this.neosVisibilitySwitched.emit(!this.open);
  }

  chevronIcon() {
    return this.open ? 'chevron-up' : 'chevron-down';
  }

  render() {
    return (<header>
      <neos-icon squared name={this.icon} type="solid"></neos-icon>
      <neos-label theme="bold" label={this.label}></neos-label>
      <div class="toggle">
        <neos-button squared theme="transparent" onClick={() => this.neosVisibilitySwitchedHandlerHandler()}>
          <neos-icon name={this.chevronIcon()} type="solid"></neos-icon>
        </neos-button>
      </div>
    </header>);
  }
}
