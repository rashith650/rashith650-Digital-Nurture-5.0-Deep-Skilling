import { courses } from './data.js';

// Destructuring
courses.forEach(course => {
    const { name, credits } = course;
    console.log(name, credits);
});

// map()
const formattedCourses = courses.map(
    course =>
        `${course.code} — ${course.name} (${course.credits} credits)`
);

console.log(formattedCourses);

// filter()
const highCreditCourses =
    courses.filter(course => course.credits >= 4);

console.log("Courses with credits >=4:",
    highCreditCourses.length);

// reduce()
const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log("Total Credits:", totalCredits);

// DOM Selection
const courseGrid =
    document.querySelector(".course-grid");

const totalText =
    document.getElementById("total-credits");

const selectedCourse =
    document.getElementById("selected-course");

let displayedCourses = [...courses];

// Render Function
function renderCourses(courseList) {

    courseGrid.innerHTML = "";

    courseList.forEach(course => {

        const card =
            document.createElement("article");

        card.className = "course-card";

        card.dataset.id = course.id;

        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseGrid.appendChild(card);
    });

    const credits =
        courseList.reduce(
            (sum, course) =>
                sum + course.credits,
            0
        );

    totalText.textContent =
        `Total Credits: ${credits}`;
}

renderCourses(displayedCourses);

// Search
document
    .getElementById("search-courses")
    .addEventListener("input", e => {

        const search =
            e.target.value.toLowerCase();

        const filtered =
            displayedCourses.filter(course =>
                course.name
                    .toLowerCase()
                    .includes(search)
            );

        renderCourses(filtered);
    });

// Sort Button
document
    .getElementById("sort-btn")
    .addEventListener("click", () => {

        displayedCourses.sort(
            (a, b) =>
                b.credits - a.credits
        );

        renderCourses(displayedCourses);
    });

// Event Delegation
courseGrid.addEventListener("click", e => {

    const card =
        e.target.closest(".course-card");

    if (!card) return;

    const courseId =
        Number(card.dataset.id);

    const selected =
        courses.find(
            course => course.id === courseId
        );

    selectedCourse.textContent =
        `Selected: ${selected.name} | Grade: ${selected.grade}`;
});