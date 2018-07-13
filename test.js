function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

async function b() {
    await a();
    console.log(1);
}

let c=b();
console.log(c);