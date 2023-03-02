import { getContainerEl, setupHooks } from '@cypress/mount-utils';
import { render } from '@builder.io/qwik';
export function mount(Component, options = {}) {
    const root = getContainerEl();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mountResponse = render(root, <Component />, options);
    if (options.log) {
        Cypress.log({
            name: 'mount',
            message: '',
            consoleProps: () => ({ result: mountResponse }),
        });
    }
    return cy.wrap(mountResponse, { log: false });
}
setupHooks();
