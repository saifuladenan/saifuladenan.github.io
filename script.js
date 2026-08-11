document.addEventListener("DOMContentLoaded", function () {
    fetch("./catelog.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            const keys = Object.keys(data);

            console.log("Keys:", keys);

            // First key
            const key = keys[0];
            console.log("First key:", key);

            // Check if JSON has data
            if (keys.length === 0) {
                console.log("catelog.json is empty");
                return;
            }

            console.log("JSON has data");
        })
        .catch(error => {
            console.error("Failed to load catelog.json:", error);
        });
});