function doAnyThingPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('do anything during any time.....')
            let numb = Math.random();
            if (numb < 0.7) {
                resolve(numb) // correct
            } else {
                reject(numb) // incorrect
            }
        }, 2000);
    });
}

doAnyThingPromise()
    .then((data) => { console.log('the number data is ' + data) })
    .catch((error) => { console.log('error --> ' + error) })