# Node CEP API

This project is a simple Node.js API that allows developers to fetch address information based on a provided Brazilian postal code (CEP) using the ViaCEP API.

## Features

- Fetch address details using a CEP.
- Simple and easy-to-use API endpoint.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/node-cep-api.git
   ```

2. Navigate to the project directory:

   ```
   cd node-cep-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Usage

1. Start the server:

   ```
   npm start
   ```

2. Make a GET request to the following endpoint to fetch address information:

   ```
   GET http://localhost:3000/cep/:cep
   ```

   Replace `:cep` with the desired postal code.

### Example

To fetch the address for the CEP `01001-000`, you would make a request to:

```
http://localhost:3000/cep/01001-000
```

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

### License

This project is licensed under the MIT License.