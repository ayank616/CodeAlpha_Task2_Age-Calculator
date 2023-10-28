function calculateAge() {
    const Day = parseInt(document.getElementById('Day').value);
    const Month = parseInt(document.getElementById('Month').value);
    const Year = parseInt(document.getElementById('Year').value);

    const today = new Date();
    const birthDate = new Date(Year, Month - 1, Day); // Month is 0-based.

    if (isNaN(birthDate)) {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
    } else {
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / 31536000000); // Approximate milliseconds in a year

        document.getElementById('result').textContent = `Your age is approximately ${ageInYears} years.`;
    }
}
