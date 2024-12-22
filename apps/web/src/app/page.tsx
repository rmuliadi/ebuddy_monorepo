'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { useAppSelector } from '../store';

export default function HomePage() {
  const router = useRouter();
  const { uid, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    // Redirect authenticated users to dashboard
    if (uid) {
      router.push('/dashboard');
    }
    // Redirect non-authenticated users to login
    else if (!loading) {
      router.push('/login');
    }
  }, [uid, loading, router]);

  // Show loading spinner while checking authentication
  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    </Container>
  );
}