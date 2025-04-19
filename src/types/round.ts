export interface Round {
  roundId: string;
  companyId: string;
  roundName: 'PPT' | 'Communication' | 'Mentor' | 'Practice Head';
  studentsList: {
    studentId: string;
    status: 'Selected' | 'Rejected' | 'Hold';
  }[];
}
