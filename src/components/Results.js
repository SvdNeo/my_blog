import React, { useEffect } from 'react';

function Results(props) {
  const { schoolName, EstablishedDate, studentInfo, selectedGrade, onPassFail } = props;

  const filteredStudents = selectedGrade ? studentInfo.filter(student => student.grade === selectedGrade) : studentInfo;

  return (
    <div>
      {schoolName}-{EstablishedDate}
      <div>
        {filteredStudents.map(student => (
            <div key={student.id}>
            <div>{student.name} - Grade: {student.grade}</div>
            <div>Result: {student.result}</div>
            <button onClick={() => onPassFail(student.id, "Pass")}>Pass</button>
            <button onClick={() => onPassFail(student.id,"Fail")}>Fail</button>
        </div>
          
        ))}
      </div>
    </div>
  );
}

export default Results;
