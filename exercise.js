
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function displayMovie(){
  try {
    const customer = await getCustomer(1);
    console.log('Customer :', customer);

    if(customer.isGold){
        var movie = await getTopMovies();
        console.log('Top movies :', movie);
        var email = await sendEmail(customer.email,movie);
        console.log('Email send....',email);
    }
  } catch (error) {
    console.log(error.message);
  }
}

displayMovie();

function getCustomer(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 1000);  
  });
}

function getTopMovies() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 1000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve([email,movies]);
    }, 1000);
  });
}