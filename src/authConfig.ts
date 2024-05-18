import { Configuration, PopupRequest } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: '4793cadf-ac26-4f9b-ac26-762b5b76c24f',
    authority: 'https://login.microsoftonline.com/a00b07e5-583e-4153-8669-f09bb42d4bf6',
    redirectUri: 'https://scale-in.com/',
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ['User.Read'],
};
