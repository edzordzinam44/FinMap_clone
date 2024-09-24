// Mock function to simulate fetching user balance
function getUserBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000); 
        }, 1000);
    });
}

// Function to display user balance
function displayUserBalance(balance) {
    console.log(`User Balance: $${balance}`);
}

// Fetch and display user balance on page load
window.addEventListener('load', async () => {
    try {
        const response = await fetch('http://localhost:5000/api/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure that the API response has a `balance` field
        if (data && data.balance !== undefined) {
            displayUserBalance(data.balance);
        } else {
            throw new Error('Balance field not found in response');
        }
        
    } catch (error) {
        alert('Error fetching user balance:', error);
    }
});
