export function api(url: string) {
    return fetch(url).then(response => {
        
        return response.json();
    });
    // .catch(error => {
    //     console.log(`Ошибка! Пожалуйста, попробуйте позже. ${error}`);
    // })
}