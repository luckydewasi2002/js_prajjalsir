fetch( ' https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  
  .then(data => {
   
  
    const fieldsToInclude = ['field1', 'field2', 'field3'];

    // Create a new array with only the specified fields
    const filteredData = data.map(item => {
      // Create a new object with only the specified fields
      const filteredItem = {};
      fieldsToInclude.forEach(field => {
        if (item.hasOwnProperty(field)) {
          filteredItem[field] = item[field];
        }
      });
      return filteredItem;
    });

    // Log the new array
    console.log('Filtered Data:', filteredData);
  
  })
  .catch(error => {
    console.error( error);
   });

