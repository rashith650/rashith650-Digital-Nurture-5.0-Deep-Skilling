import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  standalone: false
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm: string = '';
  loading: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loading = true;
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading courses:', err);
        this.loading = false;
      }
    });
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm) {
      return this.courses;
    }
    const search = this.searchTerm.toLowerCase().trim();
    return this.courses.filter(course => 
      course.name.toLowerCase().includes(search)
    );
  }

  trackByCourseCode(index: number, course: Course): string {
    return course.code;
  }
}
