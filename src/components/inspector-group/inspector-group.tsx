import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'neos-inspector-group',
  styleUrl: 'styles/inspector-group.dark.scss',
  shadow: true
})
export class InspectorGroup {
  @Prop() label: string;
  @Prop() icon: string;

  render() {
    return (<section role="group">
      <neos-inspector-group-header icon={this.icon} label={this.label}></neos-inspector-group-header>
      <div class="content">
        <slot/>
      </div>
      <footer>
        <slot name="footer"/>
      </footer>
    </section>);
  }
}
