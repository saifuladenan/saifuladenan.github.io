document.addEventListener("DOMContentLoaded", function () {
    fetch("./catelog.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            const container = document.getElementById("catelog_container");
			
            Object.entries(data).forEach(([key, item]) => {
                const catalogItem = document.createElement("div");

                catalogItem.classList.add("catalog-item");

                catalogItem.innerHTML = `
                    <h3>${key}</h3>
                    <p><strong>Description:</strong> ${item.Description}</p>
                    <p><strong>Language:</strong> ${item.Language}</p>
                    <p><strong>Scale:</strong> ${item.Scale}</p>
                    <p><strong>Date:</strong> ${item.Date || "N/A"}</p>
                `;

                container.appendChild(catalogItem);
            });
        })
        .catch(error => {
            console.error("Failed to load catelog.json:", error);
        });
});