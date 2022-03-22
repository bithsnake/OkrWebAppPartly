import { MsalProvider } from "@azure/msal-react";
import { Configuration, LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const localhost = 'http://localhost:3000/';

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: '.........................',
    authority : 'https://login.microsoftonline.com/.................',
    redirectUri: localhost,
    // navigateToLoginRequestUrl : true
    // redirectUri: redirectUrl,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    secureCookies: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean): void => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      piiLoggingEnabled: false
    }
  }
};

export const pca = new PublicClientApplication(configuration);

type Props = {
  component?: React.Component;
}
const AppProvider: React.FC<Props> = ({
  component,
  children
})  => {
  return <MsalProvider instance={pca}>{children}</MsalProvider>;
}



export default AppProvider;