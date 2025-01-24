function fetchUserData() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({name: "manish", url: "https://devmanish.info"})

        }, 3000);
    })

}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData= await fetchUserData();
        console.log("User data fatched successfully");
        
        console.log("User data: ", userData);
        
        
    } catch (error) {
        console.log("Error fetching data...");
        
    }
    
}
getUserData();