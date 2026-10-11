const API_URL = "https://dt207g-lab3-workexperience-api.onrender.com/api/workexperience";

document.getElementById("add-experience-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const companyname = document.getElementById("companyname").value.trim();
    const jobtitle = document.getElementById("jobtitle").value.trim();
    const location = document.getElementById("location").value.trim();
    const startdate = document.getElementById("startdate").value.trim();
    const enddate = document.getElementById("enddate").value.trim();
    const description = document.getElementById("description").value.trim();
    const errorEl = document.getElementById("error-message");
    const successEl = document.getElementById("success-message");

    errorEl.textContent = "";
    successEl.textContent = "";

    if (!companyname || !jobtitle || !location || !startdate || !description) {
        errorEl.textContent = "Vänligen fyll i alla obligatoriska fält!";
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ companyname, jobtitle, location, startdate, enddate, description })
        });

        if (response.ok) {
            successEl.textContent = "Arbetserfarenheten har sparats! Skickar till startsidan...";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1200);
        } else {
            const errData = await response.json();
            errorEl.textContent = errData.error || "Kunde inte spara posten.";
        }
    } catch (err) {
        errorEl.textContent = "Kunde inte ansluta till servern.";
    }
});