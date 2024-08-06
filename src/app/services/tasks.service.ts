import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

interface Task {
  id: string;
  description: string;
  priority: string;
  responsible: string;
  status: string;
  creation_date: string;
  expected_delivery_date: string;
  actual_delivery_date?: string;
  update_at ?: string
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private httpClient: HttpClient
  ) {}


  
  fetchData(url: string): Observable<Task[]> {
    return this.httpClient.get<Task[]>(url).pipe(
      catchError(() => of([]))
    )
  }

  removeData(url: string, ids: string[]): Observable<void> {
    return this.httpClient.request<void>('PUT', url, {
      body: { ids },
      headers: { 'Content-Type': 'application/json' },
    }).pipe(
      catchError(() => of(void 0))
    );
  }
}