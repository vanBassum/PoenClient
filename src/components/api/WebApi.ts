// src/components/api/WebApi.ts

import { Configuration, TokenApi, QuoteApi, TransactionApi} from "./index"; // Adjust the path if necessary

// Define the base URL for your API (you can also make this configurable)
const basePath = 'https://localhost:44378';

// Create the API configuration object
const configuration = new Configuration({
  basePath: basePath, // Base URL for all API calls
});

// Create a wrapper class for the WebApi
class WebApi {
  public static Tokens = new TokenApi(configuration);
  public static Quotes = new QuoteApi(configuration);
  public static Transactions = new TransactionApi(configuration);
}

// Export the WebApi wrapper and PersonDto so they can be used in the app
export * from './models/index';
export default WebApi;
