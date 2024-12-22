'use client';
import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import AuthGuard from '../../../components/auth/AuthGuard';
import { fetchUserData, updateUserData } from '../../../apis/userApi';
import { useAppDispatch } from '../../../store';

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      if (data) setUserData(data);
    };
    loadUserData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateUserData({ 
        displayName: 'Updated Name', 
        // Add more fields as needed 
      });
      alert('Profile Updated');
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  return (
    <AuthGuard>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4">Dashboard</Typography>
          {userData && (
            <Box>
              <Typography>Email: {userData.email}</Typography>
              <Button 
                variant="contained" 
                onClick={handleUpdateProfile}
                sx={{ mt: 2 }}
              >
                Update Profile
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </AuthGuard>
  );
}