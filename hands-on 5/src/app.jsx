import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CourseCard from "./components/CourseCard"
import StudentProfile from "./components/StudentProfile"

function App() {
  const [courses, setCourses] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const courseData = data.slice(0, 5).map((post) => ({
          id: post.id,
          name: post.title,
          code: `CS${post.id}`,
          credits: 4,
          grade: "A"
        }))

        setCourses(courseData)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load courses.")
        setLoading(false)
      })
  }, [])

  // Runs whenever courses state changes.
  // Dependency array prevents running after every render.
  useEffect(() => {
    console.log("Courses updated")
  }, [courses])

  const handleEnroll = (id) => {
    if (!enrolledCourses.includes(id)) {
      setEnrolledCourses([...enrolledCourses, id])
    }
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <Header
        siteName="Student Portal"
        count={enrolledCourses.length}
      />

      <div className="search">
        <input
          type="text"
          placeholder="Search course"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      <div className="course-container">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEnroll={handleEnroll}
          />
        ))}
      </div>

      <StudentProfile />

      <Footer />
    </>
  )
}

export default App