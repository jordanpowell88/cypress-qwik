import { getContainerEl, setupHooks } from '@cypress/mount-utils';
import { render, type RenderOptions } from '@builder.io/qwik';

interface MountingOptions {
  log?: boolean;
}

export function mount(
  Component: Parameters<typeof render>[0],
  options: RenderOptions & MountingOptions = {}
) {
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
