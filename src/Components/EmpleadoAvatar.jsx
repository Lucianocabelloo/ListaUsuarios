/* eslint-disable react/prop-types */

import { Avatar } from '@mui/joy'

const EmpleadoAvatar = ({pic}) => {
  return (
    <div>
        <Avatar variant="outlined" name="John Doe" sx={{"--Avatar-size": "100px"}} src={pic} />
    </div>
  )
}

export default EmpleadoAvatar