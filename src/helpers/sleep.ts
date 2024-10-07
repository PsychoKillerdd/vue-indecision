

export const sleep = (seconds : number = 5) => {
    return new  Promise(resolve =>{
        resolve(true )
        setTimeout(() => {},seconds * 1000);
    })
}