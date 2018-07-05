import {Component, Prop, State, Event, EventEmitter} from '@stencil/core';

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

  @State() isHovered: boolean = false;

  neosVisibilitySwitchedHandlerHandler() {
    this.neosVisibilitySwitched.emit(!this.open);
  }

  mouseEnterHandler() {
    this.isHovered = true;
  }

  mouseLeaveHandler() {
    this.isHovered = false;
  }

  chevronIcon() {
    return this.open ? 'chevron-up' : 'chevron-down';
  }

  buttonTheme() {
    return this.isHovered ? 'brand' : 'transparent';
  }

  render() {
    return (<header
      onMouseEnter={() => this.mouseEnterHandler()}
      onmouseleave={() => this.mouseLeaveHandler()}
      onClick={() => this.neosVisibilitySwitchedHandlerHandler()}
    >
      <neos-icon squared name={this.icon} type="solid"></neos-icon>
      <neos-label theme="bold" label={this.label}></neos-label>
      <div class="toggle">
        <neos-button squared theme={this.buttonTheme()}>
          <neos-icon name={this.chevronIcon()} type="solid"></neos-icon>
        </neos-button>
      </div>
    </header>);
  }
}
