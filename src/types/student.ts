export interface Student {
  studentId: string;
  name: string;
  email: string;
  college: string;
  specialization: string;
  batchYear: number;
  semester: number;
  status: 'Selected' | 'Rejected' | 'Hold';
}
