

export const sleep = (seconds : number = 1) => {
    return new  Promise(resolve =>{
        resolve(true )
        setTimeout(() => {},seconds * 1000);
    })
}