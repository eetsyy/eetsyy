document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Generate a random love score between 1 and 100
    const loveScore = Math.floor(Math.random() * 100) + 1;

    // Show the result in a popup
    alert(`${name1} and ${name2} have a love score of ${loveScore}%!`);
});
