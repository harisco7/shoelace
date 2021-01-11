import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @since 2.0
 * @status experimental
 */
export declare class Include {
  host: HTMLSlIncludeElement;
  html: string;
  /** The location of the HTML file to include. */
  src: string;
  /** The fetch mode to use. */
  mode: 'cors' | 'no-cors' | 'same-origin';
  /** Emitted when the included file is loaded. */
  slLoad: EventEmitter;
  /** Emitted when the included file fails to load due to an error. */
  slError: EventEmitter<{
    status?: number;
  }>;
  handleSrcChange(): void;
  componentWillLoad(): void;
  loadSource(): Promise<void>;
  render(): any;
}
