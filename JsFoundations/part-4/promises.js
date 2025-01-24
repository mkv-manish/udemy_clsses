function fectData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched sucessfully");
            } else {
                reject("Error fetched data");
            }
        }, 3000);

    });
}

fectData()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

