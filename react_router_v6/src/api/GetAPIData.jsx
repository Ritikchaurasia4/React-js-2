export const GetMoviesData = async() =>{
    try{
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a64d7993&s=titanic&page=1");

        // The just below commented code has written for hide the key ....

        // const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);

        const data = response.json();
        return data;
    } 
    catch(error){
        console.log(error);
    }
};

// pass that above component/function name as the value of loader property in that page route .