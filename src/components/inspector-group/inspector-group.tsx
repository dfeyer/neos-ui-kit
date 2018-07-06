import {Component, Event, EventEmitter, Method, Prop, State, Listen} from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'neos-inspector-group',
  styleUrl: 'styles/inspector-group.dark.scss',
  shadow: true
})
export class InspectorGroup {
  @Event() neosOpen: EventEmitter;
  @Event() neosClose: EventEmitter;

  @Prop() label: string;
  @Prop() icon: string;
  @Prop() closed: boolean = false;

  @State() isOpen : boolean;
  @State() isVisible : boolean;

  neosOpenHandler() {
    this.neosOpen.emit();
  }

  neosCloseHandler() {
    this.neosClose.emit();
  }

  @Listen('neosVisibilitySwitched')
  neosVisibilitySwitchedHandler(event: CustomEvent) {
    this.isOpen = event.detail;
    this.handleVisibilityChange();
  }

  componentDidLoad() {
    this.isOpen = !this.closed;
    this.handleVisibilityChange();
  }

  handleVisibilityChange() {
    if (this.isOpen) {
      this.neosOpenHandler();
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    } else {
      this.neosCloseHandler();
      this.isVisible = false;
    }
  }

  @Method()
  close() {
    this.isOpen = false;
    this.handleVisibilityChange();
  }

  @Method()
  open() {
    this.isOpen = true;
    this.handleVisibilityChange();
  }

  wrapperClassName() {
    return classnames('content-wrapper', {
      'content-wrapper--open': this.isOpen,
      'content-wrapper--visible': this.isVisible,
    });
  }

  render() {
    return (<section role="group">
      <neos-inspector-group-header
        icon={this.icon}
        label={this.label}
        open={this.isOpen}
      ></neos-inspector-group-header>
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
