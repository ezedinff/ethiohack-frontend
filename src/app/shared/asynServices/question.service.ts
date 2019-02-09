import {Injectable} from '@angular/core';
import {Option, Question} from '../interfaces/question';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Subject} from '../interfaces/subject';
import {forEach} from '@angular/router/src/utils/collection';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuestionService {
  private questions$: AngularFirestoreCollection<Question>;
  private options$: AngularFirestoreCollection<Option>;
  constructor(private afd: AngularFirestore, private storage: AngularFireStorage) {
  }

  getQuestions(subject_name, grade) {
    return this.afd.collection<Question>(`/subjects/${subject_name}/questions`, ref => ref.where('grade', '==', grade));
  }
  getOptions(subject_name, question_id) {
    return this.afd.collection<Option>(`/subjects/${subject_name}/questions/${question_id}/options`);
  }
  getQuestion(subject_name, question_id) {
    return this.afd.doc(`/subjects/${subject_name}/questions/${question_id}`);
  }
  createQuestion(question: Question, subject_name) {
    const id = this.afd.createId();
    question.id = id;
    return this.afd.collection<Question>(`/subjects/${subject_name}/questions`).doc(id).set(question);
  }
  updateQuestion(question, subject_name, question_id) {
    return this.getQuestion(subject_name, question_id).update(question);
  }
  uploadImage(f) {
    const file = f;
    const filePath = `/images/${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    return task.snapshotChanges().pipe(
      finalize(() => fileRef.getDownloadURL() ),
      map(response => response.ref.getDownloadURL())
    );
  }
  deleteQuestion(subject_name, question_id) {
    return this.getQuestion(subject_name, question_id).delete();
  }

}
