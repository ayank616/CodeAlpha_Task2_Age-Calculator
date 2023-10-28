function calculateAge() {
    const dobDay = parseInt(document.getElementById('dobDay').value);
    const dobMonth = parseInt(document.getElementById('dobMonth').value);
    const dobYear = parseInt(document.getElementById('dobYear').value);

    const today = new Date();
    const birthDate = new Date(dobYear, dobMonth - 1, dobDay); // Month is 0-based.

    if (isNaN(birthDate)) {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
    } else {
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / 31536000000); // Approximate milliseconds in a year

        document.getElementById('result').textContent = `Your age is approximately ${ageInYears} years.`;
    }
}