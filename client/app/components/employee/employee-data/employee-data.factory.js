let EmployeeDataFactory = function () {
  const employeeTestData = [
    {
        id: 0,
        name: 'Иван',
        surname: 'Петров',
        experience: 5,
        age: 33,
        address: 'Спб, ул. Ленина, д.77, кв.5'
    },{
        id: 1,
        name: 'Федор',
        surname: 'Иванов',
        experience: 10,
        age: 40,
        address: 'Спб, ул. Ленина, д.77, кв.5'
    },{
        id: 2,
        name: 'Петр',
        surname: 'Федоров',
        experience: 7,
        age: 35,
        address: 'Спб, ул. Ленина, д.77, кв.5'
    },{
        id: 3,
        name: 'Алексей',
        surname: 'Викторович',
        experience: 1,
        age: 25,
        address: 'Спб, ул. Ленина, д.77, кв.5'
    },{
        id: 4,
        name: 'Виктор',
        surname: 'Алексеевич',
        experience: 3,
        age: 30,
        address: 'Спб, ул. Ленина, д.77, кв.5'
    },
  ];

  let getEmployeeData = () => {
    return employeeTestData;
  };

  return {
    getEmployeeData 
  };
};

export default EmployeeDataFactory;
