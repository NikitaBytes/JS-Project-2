/**
* Fetches a random activity from the API and returns the activity text.
*
* @return {string} The random activity text
*/

export async function getRandomActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    if (!response.ok) {
        throw new Error('Ошибка запроса');
    }
    const data = await response.json();
    return data.activity;
}
