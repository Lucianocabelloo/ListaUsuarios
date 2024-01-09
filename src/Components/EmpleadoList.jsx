
import EmpleadoRow from './EmpleadoRow'

const EmpleadoList = () => {
  return (
    <div className='flex flex-col gap-5 max-w-[25vw] border h-[100vh] p-2'>
        <EmpleadoRow/>
        <EmpleadoRow/>
        <EmpleadoRow/>
        <EmpleadoRow/>
    </div>
  )
}

export default EmpleadoList