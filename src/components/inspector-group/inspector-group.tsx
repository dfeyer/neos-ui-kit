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
  @State() isVisible : boolean;

  @Listen('neosVisibilitySwitched')
  neosVisibilitySwitchedHandler(event: CustomEvent) {
    this.isOpen = event.detail;
    this.queueVisibiltyChange();
  }

  componentDidLoad() {
    this.isOpen = !this.closed;
    this.queueVisibiltyChange();
  }

  queueVisibiltyChange() {
    if (this.isOpen) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    } else {
      this.isVisible = false;
    }
  }

  wrapperClassName() {
    return classnames('content-wrapper', {
      'content-wrapper--open': this.isOpen,
      'content-wrapper--visible': this.isVisible,
    });
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
