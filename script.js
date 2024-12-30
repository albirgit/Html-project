// Course descriptions
const courseDescriptions = {
    cs: "Computer Science (CS) focuses on the theoretical foundations of computation and programming.",
    it: "Information Technology (IT) emphasizes the application of computing technologies in businesses.",
    se: "Software Engineering (SE) involves designing, developing, and maintaining software systems.",
    ds: "Data Science (DS) deals with analyzing and interpreting complex data to derive insights."
};

// Function to display course descriptions
function showDescription(course) {
    const descriptionBox = document.getElementById("description-box");
    const descriptionText = document.getElementById("course-description");

    descriptionText.textContent = courseDescriptions[course];
    descriptionBox.style.display = "block";
}
