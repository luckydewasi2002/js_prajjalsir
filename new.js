//13. 
// async function fetchdata() {
//   try {
      
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json(); 

//      //console.log(data)
//      const fullAddressUsers = users.map(user => {
//       const { street, suite, city, zipcode } = user.address;
//       return `${street}, ${suite}, ${city}, ${zipcode}`;
//     });
//     console.log('Users with full address strings:', fullAddressUsers);

 
//   } catch (error) {
     
//       console.error( error);
//   }
// }
  

// fetchdata();

//
// 9)Data fetch hone ke baad, users ka name ka ek naya array banao using reduce method.

// async function fetchAndProcessUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const userNames = users.reduce((names, user) => {
//       names.push(user.name);
//       return names;
//     }, []);
//     console.log('User names:', userNames);

// }catch (error) {
//   console.error('Error fetching users:', error);
// }
// }
// fetchAndProcessUsers();
// 10)Data fetch hone ke baad, users ka ek naya array banao jo users ke email contain karta ho
//  jin ka address.zipcode "92998-3874" hai using filter and map methods.


// async function fetchAndProcessUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const specificZipEmails = users
//       .filter(user => user.address.zipcode === "92998-3874")
//       .map(user => user.email);
//     console.log('Emails of users with zipcode 92998-3874:', specificZipEmails);

// }catch (error) {
//   console.error('Error fetching users:', error);
// }
// }
// fetchAndProcessUsers();
