// Define the customer object
const customer = {
    customerId: 12345,
    customerName: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumbers: ['123-456-7890', '987-654-3210'],
    addresses: ['123 Main St, Cityville, ABC']
  };
  
  // Function to print all information from destructured object and call another function
  function printCustomerInfo({ customerId, customerName, email, phoneNumbers, addresses }) {
    console.log(`Customer ID: ${customerId}`);
    console.log(`Customer Name: ${customerName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Numbers:`);
    phoneNumbers.forEach(number => console.log(`- ${number}`));
    console.log(`Addresses:`);
    addresses.forEach(address => console.log(`- ${address}`));
    
    // Call another function passing phoneNumbers array
    processPhoneNumbers(phoneNumbers);
    
    // Call another function passing customer object and printing all keys
    printAllKeys(customer);
  }
  
  // Function to process phone numbers array
  function processPhoneNumbers(phoneNumbers) {
    console.log('Processing phone numbers...');
    phoneNumbers.forEach(number => {
      console.log(`Processing ${number}`);
      // Add your processing logic here
    });
  }
  
  // Function to print all keys of the object
  function printAllKeys(obj) {
    console.log('Printing all keys of customer object:');
    for (let key in obj) {
      console.log(key);
    }
  }
  
  // Call the printCustomerInfo function with customer object destructured
  printCustomerInfo(customer);
  