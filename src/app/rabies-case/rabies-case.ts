import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from '@angular/fire/firestore';

@Component({
  selector: 'app-rabies-case',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rabies-case.html',
  styleUrls: ['./rabies-case.css']
})
export class RabiesCase {

  collectionName = 'rabies_cases';

  form = {
    patientName: '',
    age: '',
    dateOfBite: '',
    biteLocation: '',
    vaccinationStatus: ''
  };

  records: any[] = [];
  editId: string | null = null;

  constructor(private firestore: Firestore) {
    const colRef = collection(this.firestore, this.collectionName);
    collectionData(colRef, { idField: 'id' }).subscribe(data => {
      this.records = data;
    });
  }

  async save() {
    const colRef = collection(this.firestore, this.collectionName);

    if (this.editId) {
      const docRef = doc(this.firestore, this.collectionName, this.editId);
      await updateDoc(docRef, this.form);
    } else {
      await addDoc(colRef, this.form);
    }

    this.reset();
  }

  edit(record: any) {
    this.editId = record.id;
    this.form = { ...record };
  }

  async remove(id: string) {
    const docRef = doc(this.firestore, this.collectionName, id);
    await deleteDoc(docRef);
  }

  reset() {
    this.form = {
      patientName: '',
      age: '',
      dateOfBite: '',
      biteLocation: '',
      vaccinationStatus: ''
    };
    this.editId = null;
  }
}
