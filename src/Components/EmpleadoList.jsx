import EmpleadoRow from './EmpleadoRow'
import ResponseEmployees from "../mocks/empleados.json"

const EmpleadoList = () => {

  const employees = ResponseEmployees.Search
 

  return (
    <div className='flex flex-col gap-5 border h-[100vh] p-2 '>
      {
        employees.map(employees => (
          <EmpleadoRow
          key={employees.id}
          name={employees.fullName}
          title={employees.title}
          department={employees.department}
          pic={employees.pic}
          />
        ))
      }
    </div>
  )
}

export default EmpleadoList