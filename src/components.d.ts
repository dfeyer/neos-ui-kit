/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface NeosBadge {
      'label': string;
    }
  }

  interface HTMLNeosBadgeElement extends StencilComponents.NeosBadge, HTMLStencilElement {}

  var HTMLNeosBadgeElement: {
    prototype: HTMLNeosBadgeElement;
    new (): HTMLNeosBadgeElement;
  };
  interface HTMLElementTagNameMap {
    'neos-badge': HTMLNeosBadgeElement;
  }
  interface ElementTagNameMap {
    'neos-badge': HTMLNeosBadgeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-badge': JSXElements.NeosBadgeAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosBadgeAttributes extends HTMLAttributes {
      'label'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosButton {
      'active': boolean;
      'disbaled': boolean;
      'focused': boolean;
      'size': string;
      'theme': string;
      'type': string;
    }
  }

  interface HTMLNeosButtonElement extends StencilComponents.NeosButton, HTMLStencilElement {}

  var HTMLNeosButtonElement: {
    prototype: HTMLNeosButtonElement;
    new (): HTMLNeosButtonElement;
  };
  interface HTMLElementTagNameMap {
    'neos-button': HTMLNeosButtonElement;
  }
  interface ElementTagNameMap {
    'neos-button': HTMLNeosButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-button': JSXElements.NeosButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosButtonAttributes extends HTMLAttributes {
      'active'?: boolean;
      'disbaled'?: boolean;
      'focused'?: boolean;
      'size'?: string;
      'theme'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosFormInput {
      'label': string;
      'placeholder': string;
      'value': string;
    }
  }

  interface HTMLNeosFormInputElement extends StencilComponents.NeosFormInput, HTMLStencilElement {}

  var HTMLNeosFormInputElement: {
    prototype: HTMLNeosFormInputElement;
    new (): HTMLNeosFormInputElement;
  };
  interface HTMLElementTagNameMap {
    'neos-form-input': HTMLNeosFormInputElement;
  }
  interface ElementTagNameMap {
    'neos-form-input': HTMLNeosFormInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-form-input': JSXElements.NeosFormInputAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosFormInputAttributes extends HTMLAttributes {
      'label'?: string;
      'placeholder'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosLabel {
      'label': string;
    }
  }

  interface HTMLNeosLabelElement extends StencilComponents.NeosLabel, HTMLStencilElement {}

  var HTMLNeosLabelElement: {
    prototype: HTMLNeosLabelElement;
    new (): HTMLNeosLabelElement;
  };
  interface HTMLElementTagNameMap {
    'neos-label': HTMLNeosLabelElement;
  }
  interface ElementTagNameMap {
    'neos-label': HTMLNeosLabelElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-label': JSXElements.NeosLabelAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosLabelAttributes extends HTMLAttributes {
      'label'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;