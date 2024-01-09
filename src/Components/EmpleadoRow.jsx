/* eslint-disable react/prop-types */

import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import EmpleadoAvatar from './EmpleadoAvatar';

export default function EmpleadoRow({name, title, department, pic  }) {
  return (
    <Card
     
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
        <EmpleadoAvatar pic={pic}/>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          {name}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            {title}
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          {department}
        </Chip>
      </CardContent>
    </Card>
  );
}
