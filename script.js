document.addEventListener('DOMContentLoaded', function() {
    fetchLatestAlerts();
});

function fetchLatestAlerts() {
    // Sample data, replace with real API or data source
    const alerts = [
        { title: "Severe Thunderstorm Warning", date: "2024-08-31", details: "A severe thunderstorm is expected in your area." },
        { title: "Hurricane Watch", date: "2024-08-30", details: "A hurricane watch has been issued for your region." }
    ];

    const alertsContainer = document.getElementById('alerts');
    alerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.innerHTML = `<h4>${alert.title}</h4><p>Date: ${alert.date}</p><p>${alert.details}</p>`;
        alertsContainer.appendChild(alertDiv);
    });
}
