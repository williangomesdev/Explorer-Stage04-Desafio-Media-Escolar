const students = [
    {
      name: "Júlia",
      first_test: 9,
      second_test: 9,
    },
  
    {
      name: "Carlos",
      first_test: 7,
      second_test: 4,
    },
  
    {
      name: "João",
      first_test: 10,
      second_test: 4,
    },
  
    {
      name: "Maria",
      first_test: 8,
      second_test: 5,
    },
  ];
  
  const studentAssessment = (student) => {
    function average(first_test, second_test) {
      return (first_test + second_test) / 2;
    }
  
    function passOrFail(studentName) {
      if (average(student.first_test, student.second_test) >= 7) {
        return `Parabéns ${studentName}! Você foi aprovado(a) no concurso`;
      } else {
        return `Não foi dessa vez ${studentName}! Tente novamente`;
      }
    }
    return `A média do(a) aluno(a) ${student.name} é ${average(
      student.first_test,
      student.second_test
    )}\n ${passOrFail(student.name)}`;
  };
  
  for (const student of students) {
    let studentsDescription = studentAssessment(student);
    alert(studentsDescription);
  }
  
  
  