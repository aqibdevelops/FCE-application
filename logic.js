document.addEventListener("DOMContentLoaded", function() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    function populateDays(month, year) {
        daySelect.innerHTML = ''; // Clear existing options
        const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
        console.log(daysInMonth)
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    function populateMonths() {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = month;
            monthSelect.appendChild(option);
        });
    }

    function populateYears(startYear, endYear) {
        for (let i = startYear; i <= endYear; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    function onMonthOrYearChange() {
        const selectedMonth = parseInt(monthSelect.value);
        const selectedYear = parseInt(yearSelect.value);
        if (!isNaN(selectedMonth) && !isNaN(selectedYear)) {
            populateDays(selectedMonth, selectedYear);
        }
    }

    // Initial population
    const currentYear = new Date().getFullYear();
    populateMonths();
    populateYears(currentYear - 100, currentYear + 10); // Adjust year range as needed

    // Populate days based on current month and year
    monthSelect.addEventListener('change', onMonthOrYearChange);
    yearSelect.addEventListener('change', onMonthOrYearChange);

    // Initial population of days
    monthSelect.value = new Date().getMonth() + 1;
    yearSelect.value = currentYear;
    populateDays(monthSelect.value, yearSelect.value);
});

let expanded = false;
console.log("JS is running")
function showCheckBoxes() {
    let checkboxes = document.getElementById("checkboxes");

    if(!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}