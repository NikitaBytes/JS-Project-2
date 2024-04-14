import { getRandomActivity } from './activity.js';

// Call the updateActivity() function to start updating the activity
document.addEventListener('DOMContentLoaded', () => {
    updateActivity();
    setTimeout(updateActivity, 60000); // Update every minute
});

/**
 * Asynchronously updates the activity text on the webpage by fetching a random activity and displaying it. If an error occurs during the fetching process, an error message is displayed instead.
 *
 * @return {Promise<void>} Promise that resolves once the activity text is updated
 */

async function updateActivity() {
    try {
        const activityText = await getRandomActivity();
        document.getElementById('activity').textContent = activityText;
    } catch (error) {
        document.getElementById('activity').textContent = 'К сожалению, произошла ошибка';
    }
}
