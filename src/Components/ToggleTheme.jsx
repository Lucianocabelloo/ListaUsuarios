import { Button } from '@mui/joy';
import {useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from 'react';


export default function ToggleTheme() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }
  
    return (
      <Button
        variant="outlined"
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    );
  }
  