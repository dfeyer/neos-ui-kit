import {Component, Prop, State, Listen} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-inspector-group',
  styleUrl: 'styles/inspector-group.dark.scss',
  shadow: true
})
export class InspectorGroup {
  @Prop() label: string;
  @Prop() icon: string;
  @Prop() closed: boolean = false;

  @State() isOpen : boolean;

  @Listen('neosVisibilitySwitched')
  neosVisibilitySwitchedHandler(event: CustomEvent) {
    this.isOpen = event.detail;
  }

  componentDidLoad() {
    this.isOpen = !this.closed;
  }

  wrapperClassName() {
    return classnames('content-wrapper', {'content-wrapper--open': this.isOpen});
  }

  render() {
    return (<section role="group">
      <neos-inspector-group-header icon={this.icon} label={this.label} open={this.isOpen}></neos-inspector-group-header>
      <div class={this.wrapperClassName()}>
        <div class="content">
          <slot/>
        </div>
        <footer>
          <slot name="footer"/>
        </footer>
      </div>
    </section>);
  }
}
