import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Course {
  name: string;
  code: string;
  credits: number;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(posts => {
        const codes = ['CS101', 'CS202', 'MAT301', 'PHY102', 'ENG105'];
        const courseNames = [
          'Introduction to Computer Science',
          'Data Structures & Algorithms',
          'Calculus & Linear Algebra',
          'Introduction to Physics',
          'English Composition & Writing'
        ];
        const grades = ['A', 'B+', 'A-', 'B', 'A+'];
        return posts.map((post, index) => {
          // Random credits between 3 and 5
          const credits = Math.floor(Math.random() * 3) + 3;
          return {
            name: courseNames[index % courseNames.length],
            code: codes[index % codes.length],
            credits: credits,
            grade: grades[index % grades.length]
          };
        });
      })
    );
  }

  private capitalizeTitle(title: string): string {
    if (!title) return '';
    // Capitalize first letter of each word and slice the title to make it sound like a course name (e.g., first 4 words)
    const words = title.split(' ').slice(0, 4);
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
