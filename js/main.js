const API_URL = "http://localhost:3000/api/workexperience";

document.addEventListener("DOMContentLoaded", () => {
    fetchWorkExperiences();
});

async function fetchWorkExperiences() {
    const listEl = document.getElementById("experience-list");
    const errorEl = document.getElementById("error-message");

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Kunde inte hämta data");

        const data = await response.json();
        
        if (data.length === 0) {
            listEl.innerHTML = `<tr><td colspan="7">Inga sparade arbetserfarenheter hittades.</td></tr>`;
            return;
        }

        listEl.innerHTML = "";
        data.forEach(item => {
            listEl.innerHTML += `
                <tr>
                    <td><strong>${item.companyname}</strong></td>
                    <td>${item.jobtitle}</td>
                    <td>${item.location}</td>
                    <td>${item.startdate}</td>
                    <td>${item.enddate || "Pågående"}</td>
                    <td>${item.description}</td>
                    <td><button onclick="deleteWorkExperience('${item._id}')" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;">Radera</button></td>
                </tr>
            `;
        });
    } catch (err) {
        errorEl.textContent = "Kunde inte ansluta till servern för att hämta data.";
    }
}

async function deleteWorkExperience(id) {
    if (!confirm("Är du säker på att du vill radera denna post?")) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            fetchWorkExperiences(); // Uppdatera listan
        } else {
            alert("Kunde inte radera posten.");
        }
    } catch (err) {
        alert("Ett nätverksfel uppstod vid radering.");
    }
}