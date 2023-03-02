/// <reference types="cypress" />
/// <reference types="cypress" />
import { render, type RenderOptions } from '@builder.io/qwik';
interface MountingOptions {
    log?: boolean;
}
export declare function mount(Component: Parameters<typeof render>[0], options?: RenderOptions & MountingOptions): Cypress.Chainable<unknown>;
export {};
