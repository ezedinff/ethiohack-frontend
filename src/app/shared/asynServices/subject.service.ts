import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Subject} from '../interfaces/subject';
import {Question} from '../interfaces/question';

@Injectable({providedIn: 'root'})
export class SubjectService {
  private subjects$: AngularFirestoreCollection<Subject>;
  constructor(private afd: AngularFirestore) {
    this.subjects$ = this.getSubjects();
  }
  getSubjects() {
    return this.afd.collection<Subject>('subjects');
  }
  createSubject(subject: Subject) {
    const id = subject.title;
    subject.id = id;
    return this.afd.collection<Question>(`/subjects`).doc(id).set(subject);
  }
  updateSubject(subject: Subject) {
    return this.afd.doc(`/subjects/${subject.id}`).update(subject);
  }
  deleteSubject(id) {
    return this.afd.doc(`/subjects/${id}`).delete();
  }
}
