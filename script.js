document.addEventListener("DOMContentLoaded", function () {
    fetch("./catelog.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            const container = document.getElementById("Catelog_Container");

            Object.entries(data).forEach(([key, item]) => {
                const catalogItem = document.createElement("div");

                catalogItem.classList.add("catalog-item");

                catalogItem.innerHTML = `
                   <div class="Key_Container">

                        <h3>
							${
								item.Link
									? `<a href="${item.Link}" target="_blank" rel="noopener noreferrer">${key}</a>`
									: key
							}
						</h3>

                        <div class="Key_Item_Container">
                            <div class="Label_text">Description:</div>
                            <div class="Item_text">${item.Description}</div>
                        </div>

                        <div class="Key_Item_Container">
                            <div class="Label_text">Language:</div>
                            <div class="Item_text">${item.Language}</div>
                        </div>

                        <div class="Key_Item_Container">
                            <div class="Label_text">Platform:</div>
                            <div class="Item_text">${item.Platform}</div>
                        </div>

                        <div class="Key_Item_Container">
                            <div class="Label_text">Scale:</div>
                            <div class="Item_text">${item.Scale}</div>
                        </div>

                        <div class="Key_Item_Container">
                            <div class="Label_text">Date:</div>
                            <div class="Item_text">${item.Date || "-"}</div>
                        </div>
					</div>
                     
						<div class="Image_Container">
							${
								item.Image
								? `<img src="${item.Image}" alt="${key}">`
								: `<div class="No_Image">No Image</div>`
							}
						</div>
                 
                `;

                container.appendChild(catalogItem);
            });
        })
        .catch(error => {
            console.error("Failed to load catelog.json:", error);
        });
});