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

import {
  EventEmitter,
} from '@stencil/core';
import {
  InputChangeEvent,
} from './interface';

declare global {

  namespace StencilComponents {
    interface NeosBadge {

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

    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosButton {
      'active': boolean;
      'disabled': boolean;
      'focused': boolean;
      'size': string;
      'squared': boolean;
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
      'disabled'?: boolean;
      'focused'?: boolean;
      'size'?: string;
      'squared'?: boolean;
      'theme'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosDropdownItem {
      'icon': string;
      'iconType': string;
      'label': string;
    }
  }

  interface HTMLNeosDropdownItemElement extends StencilComponents.NeosDropdownItem, HTMLStencilElement {}

  var HTMLNeosDropdownItemElement: {
    prototype: HTMLNeosDropdownItemElement;
    new (): HTMLNeosDropdownItemElement;
  };
  interface HTMLElementTagNameMap {
    'neos-dropdown-item': HTMLNeosDropdownItemElement;
  }
  interface ElementTagNameMap {
    'neos-dropdown-item': HTMLNeosDropdownItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-dropdown-item': JSXElements.NeosDropdownItemAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosDropdownItemAttributes extends HTMLAttributes {
      'icon'?: string;
      'iconType'?: string;
      'label'?: string;
      'onNeosItemSelected'?: (event: CustomEvent<string>) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosDropdown {
      'label': string;
      'placeholder': string;
      'selectedLabel': string;
    }
  }

  interface HTMLNeosDropdownElement extends StencilComponents.NeosDropdown, HTMLStencilElement {}

  var HTMLNeosDropdownElement: {
    prototype: HTMLNeosDropdownElement;
    new (): HTMLNeosDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'neos-dropdown': HTMLNeosDropdownElement;
  }
  interface ElementTagNameMap {
    'neos-dropdown': HTMLNeosDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-dropdown': JSXElements.NeosDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosDropdownAttributes extends HTMLAttributes {
      'label'?: string;
      'placeholder'?: string;
      'selectedLabel'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosFormInputWrapper {
      'label': string;
    }
  }

  interface HTMLNeosFormInputWrapperElement extends StencilComponents.NeosFormInputWrapper, HTMLStencilElement {}

  var HTMLNeosFormInputWrapperElement: {
    prototype: HTMLNeosFormInputWrapperElement;
    new (): HTMLNeosFormInputWrapperElement;
  };
  interface HTMLElementTagNameMap {
    'neos-form-input-wrapper': HTMLNeosFormInputWrapperElement;
  }
  interface ElementTagNameMap {
    'neos-form-input-wrapper': HTMLNeosFormInputWrapperElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-form-input-wrapper': JSXElements.NeosFormInputWrapperAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosFormInputWrapperAttributes extends HTMLAttributes {
      'label'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosFormInput {
      /**
       * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
       */
      'accept': string;
      /**
       * Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
       */
      'autocomplete': string;
      /**
       * Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.
       */
      'autocorrect': string;
      /**
       * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
       */
      'autofocus': boolean;
      /**
       * If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
       */
      'clearOnEdit': boolean;
      /**
       * If true, the user cannot interact with the input. Defaults to `false`.
       */
      'disabled': boolean;
      /**
       * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
       */
      'inputmode': string;
      /**
       * A descriptive label for the current input
       */
      'label': string;
      /**
       * The maximum value, which must not be less than its minimum (min attribute) value.
       */
      'max': string;
      /**
       * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
       */
      'maxlength': number;
      /**
       * The minimum value, which must not be greater than its maximum (max attribute) value.
       */
      'min': string;
      /**
       * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
       */
      'minlength': number;
      /**
       * If true, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
       */
      'multiple': boolean;
      /**
       * The name of the control, which is submitted with the form data.
       */
      'name': string;
      /**
       * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
       */
      'pattern': string;
      /**
       * Instructional text that shows before the input has a value.
       */
      'placeholder': string;
      /**
       * If true, the user cannot modify the value. Defaults to `false`.
       */
      'readonly': boolean;
      /**
       * If true, the user must fill in a value before submitting a form.
       */
      'required': boolean;
      /**
       * This is a nonstandard attribute supported by Safari that only applies when the type is `"search"`. Its value should be a nonnegative decimal integer.
       */
      'results': number;
      /**
       * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
       */
      'size': number;
      /**
       * If true, the element will have its spelling and grammar checked. Defaults to `false`.
       */
      'spellcheck': boolean;
      /**
       * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
       */
      'step': string;
      /**
       * The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
       */
      'type': string;
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
      /**
       * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
       */
      'accept'?: string;
      /**
       * Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
       */
      'autocomplete'?: string;
      /**
       * Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.
       */
      'autocorrect'?: string;
      /**
       * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
       */
      'autofocus'?: boolean;
      /**
       * If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
       */
      'clearOnEdit'?: boolean;
      /**
       * If true, the user cannot interact with the input. Defaults to `false`.
       */
      'disabled'?: boolean;
      /**
       * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
       */
      'inputmode'?: string;
      /**
       * A descriptive label for the current input
       */
      'label'?: string;
      /**
       * The maximum value, which must not be less than its minimum (min attribute) value.
       */
      'max'?: string;
      /**
       * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
       */
      'maxlength'?: number;
      /**
       * The minimum value, which must not be greater than its maximum (max attribute) value.
       */
      'min'?: string;
      /**
       * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
       */
      'minlength'?: number;
      /**
       * If true, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
       */
      'multiple'?: boolean;
      /**
       * The name of the control, which is submitted with the form data.
       */
      'name'?: string;
      /**
       * Emitted when the input loses focus.
       */
      'onNeosBlur'?: (event: CustomEvent<void>) => void;
      /**
       * Emitted when the value has changed.
       */
      'onNeosChange'?: (event: CustomEvent<InputChangeEvent>) => void;
      /**
       * Emitted when the input has focus.
       */
      'onNeosFocus'?: (event: CustomEvent<void>) => void;
      /**
       * Emitted when a keyboard input ocurred.
       */
      'onNeosInput'?: (event: CustomEvent<KeyboardEvent>) => void;
      /**
       * Emitted when the input has been created.
       */
      'onNeosInputDidLoad'?: (event: CustomEvent<void>) => void;
      /**
       * Emitted when the input has been removed.
       */
      'onNeosInputDidUnload'?: (event: CustomEvent<void>) => void;
      /**
       * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
       */
      'pattern'?: string;
      /**
       * Instructional text that shows before the input has a value.
       */
      'placeholder'?: string;
      /**
       * If true, the user cannot modify the value. Defaults to `false`.
       */
      'readonly'?: boolean;
      /**
       * If true, the user must fill in a value before submitting a form.
       */
      'required'?: boolean;
      /**
       * This is a nonstandard attribute supported by Safari that only applies when the type is `"search"`. Its value should be a nonnegative decimal integer.
       */
      'results'?: number;
      /**
       * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
       */
      'size'?: number;
      /**
       * If true, the element will have its spelling and grammar checked. Defaults to `false`.
       */
      'spellcheck'?: boolean;
      /**
       * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
       */
      'step'?: string;
      /**
       * The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
       */
      'type'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosIcon {
      'name': string;
      'squared': boolean;
      'theme': string;
      'type': string;
    }
  }

  interface HTMLNeosIconElement extends StencilComponents.NeosIcon, HTMLStencilElement {}

  var HTMLNeosIconElement: {
    prototype: HTMLNeosIconElement;
    new (): HTMLNeosIconElement;
  };
  interface HTMLElementTagNameMap {
    'neos-icon': HTMLNeosIconElement;
  }
  interface ElementTagNameMap {
    'neos-icon': HTMLNeosIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-icon': JSXElements.NeosIconAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosIconAttributes extends HTMLAttributes {
      'name'?: string;
      'squared'?: boolean;
      'theme'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosInspectorGroupHeader {
      'icon': string;
      'label': string;
      'open': boolean;
    }
  }

  interface HTMLNeosInspectorGroupHeaderElement extends StencilComponents.NeosInspectorGroupHeader, HTMLStencilElement {}

  var HTMLNeosInspectorGroupHeaderElement: {
    prototype: HTMLNeosInspectorGroupHeaderElement;
    new (): HTMLNeosInspectorGroupHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'neos-inspector-group-header': HTMLNeosInspectorGroupHeaderElement;
  }
  interface ElementTagNameMap {
    'neos-inspector-group-header': HTMLNeosInspectorGroupHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-inspector-group-header': JSXElements.NeosInspectorGroupHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosInspectorGroupHeaderAttributes extends HTMLAttributes {
      'icon'?: string;
      'label'?: string;
      'onNeosVisibilitySwitched'?: (event: CustomEvent<boolean>) => void;
      'open'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosInspectorGroup {
      'closed': boolean;
      'icon': string;
      'label': string;
    }
  }

  interface HTMLNeosInspectorGroupElement extends StencilComponents.NeosInspectorGroup, HTMLStencilElement {}

  var HTMLNeosInspectorGroupElement: {
    prototype: HTMLNeosInspectorGroupElement;
    new (): HTMLNeosInspectorGroupElement;
  };
  interface HTMLElementTagNameMap {
    'neos-inspector-group': HTMLNeosInspectorGroupElement;
  }
  interface ElementTagNameMap {
    'neos-inspector-group': HTMLNeosInspectorGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-inspector-group': JSXElements.NeosInspectorGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosInspectorGroupAttributes extends HTMLAttributes {
      'closed'?: boolean;
      'icon'?: string;
      'label'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosLabel {
      'label': string;
      'theme': string;
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
      'theme'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosToolbarSeparator {
      'theme': string;
    }
  }

  interface HTMLNeosToolbarSeparatorElement extends StencilComponents.NeosToolbarSeparator, HTMLStencilElement {}

  var HTMLNeosToolbarSeparatorElement: {
    prototype: HTMLNeosToolbarSeparatorElement;
    new (): HTMLNeosToolbarSeparatorElement;
  };
  interface HTMLElementTagNameMap {
    'neos-toolbar-separator': HTMLNeosToolbarSeparatorElement;
  }
  interface ElementTagNameMap {
    'neos-toolbar-separator': HTMLNeosToolbarSeparatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-toolbar-separator': JSXElements.NeosToolbarSeparatorAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosToolbarSeparatorAttributes extends HTMLAttributes {
      'theme'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NeosToolbar {
      'theme': string;
    }
  }

  interface HTMLNeosToolbarElement extends StencilComponents.NeosToolbar, HTMLStencilElement {}

  var HTMLNeosToolbarElement: {
    prototype: HTMLNeosToolbarElement;
    new (): HTMLNeosToolbarElement;
  };
  interface HTMLElementTagNameMap {
    'neos-toolbar': HTMLNeosToolbarElement;
  }
  interface ElementTagNameMap {
    'neos-toolbar': HTMLNeosToolbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'neos-toolbar': JSXElements.NeosToolbarAttributes;
    }
  }
  namespace JSXElements {
    export interface NeosToolbarAttributes extends HTMLAttributes {
      'theme'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;