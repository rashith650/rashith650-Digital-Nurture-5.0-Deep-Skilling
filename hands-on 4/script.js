const courses = [
    {
        title: "HTML & CSS",
        instructor: "John",
        progress: "75%",
        class: "course1"
    },
    {
        title: "JavaScript",
        instructor: "David",
        progress: "60%",
        class: "course2"
    },
    {
        title: "React",
        instructor: "Alice",
        progress: "45%",
        class: "course3"
    }
];

function fetchAllCourses() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(courses);
        }, 1000);
    });
}

async function loadCourses() {

    const loading = document.getElementById("loading");
    const container = document.getElementById("courses");

    const data = await fetchAllCourses();

    loading.style.display = "none";

    data.forEach(course => {

        container.innerHTML += `
        <div class="card">
            <div class="card-top ${course.class}">
                <h2>${course.title}</h2>
            </div>

            <div class="card-body">
                <p>${course.instructor}</p>

                <div class="progress">
                    <div style="width:${course.progress}"></div>
                </div>

                <br>
                <strong>${course.progress} Complete</strong>
            </div>
        </div>
        `;
    });
}

loadCourses();

async function loadPosts() {

    const spinner = document.getElementById("spinner");

    spinner.classList.remove("hidden");

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    _limit: 2
                }
            }
        );

        const posts = response.data;

        document.getElementById("notifications").innerHTML = `

        <div class="notification red">
            <h2>${posts[0].title}</h2>
            <br>
            <p>${posts[0].body}</p>
        </div>

        <div class="notification green">
            <h2>${posts[1].title}</h2>
            <br>
            <p>${posts[1].body}</p>
        </div>

        `;

    }
    catch(error) {

        document.getElementById("error").innerHTML =
        "Unable to load notifications.";

        document.getElementById("retryBtn")
        .classList.remove("hidden");
    }

    spinner.classList.add("hidden");
}

loadPosts();

document.getElementById("retryBtn")
.addEventListener("click", loadPosts);