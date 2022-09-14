let okay = true;

let customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (okay) {
            setTimeout(() => {
                resolve(task)
            }, time);
        }else{
            reject("Error")
        }
    });
}

export default customFetch;