export const delay = 1000;

//Generate a random integer
export function generateRandomInt(){
    const randomFloat = Math.random();
    return Math.round(randomFloat * 1000000);
}