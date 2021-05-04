export namespace Elm {
  export namespace Main {
    export interface App {
      ports: Ports;
    }

    export interface Args {
      node: HTMLElement;
      flags?: Flags | null;
    }

    /* eslint @typescript-eslint/no-empty-interface: 0 */
    export interface Flags {}
    /* eslint @typescript-eslint/no-empty-interface: 0 */
    export interface Ports {}

    export interface Subscribe<T> {
      subscribe(callback: (value: T) => void): void;
    }

    export interface Send<T> {
      send(value: T): void;
    }

    export function init(args: Args): App;
  }
}
