import React, { useEffect, useState } from 'react'
import withLoading from '../HOC/WithLoading';
import Student from './Student';
const StudentWithLoading = withLoading(Student);

const StudentProfile = () => {
          const [loading, setLoading] = useState(true);
          const [studentName, setStudentName] = useState();

          useEffect(() => {
              setTimeout(() => {
                  setLoading(false);
                  setStudentName({ name: "John Doe" });
              }, 2000);
          });
  return (
      <div>
          <div>
              <StudentWithLoading
                  name={studentName?.name}
                  isLoading={loading}
              />
          </div>
      </div>
  );
}

export default StudentProfile;

