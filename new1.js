




async function fetchdata() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); 
  
       //console.log(data)
       const fullAddressArray = data.map(user => {
        const { street, city, zipcode } = user.address;
        return `${street}, ${city}, ${zipcode}`;
    });

    console.log(fullAddressArray);
    } catch (error) {
       
        console.error( error);
    }
  }
  
  
  fetchdata();