interface Student {
    student_id: number;
    name: string;
  }
    
  interface Teacher {
    Teacher_Id: number;
    teacher_name: string;
  }
    
  type intersected_type = Student & Teacher;
    
  let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    Teacher_Id: 7873,
    teacher_name: "seema",

  };
    
  console.log(obj1.Teacher_Id);
  console.log(obj1.name);