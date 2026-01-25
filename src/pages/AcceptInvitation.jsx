import api from '@/api/axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner';

const AcceptInvitation = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams()

  const token = searchParams.get("token");

  const navigate = useNavigate();

  const acceptInvitation = async () => {
    try {
      const response = await api.get(`/trips/${id}/invite/accept?token=${token}`);
      if (response.data?.success) {
        toast.success("Invitation accepted successfully!");
      } else {
        toast.info(response.data?.message || "Could not accept the invitation.");
      }
    } catch (error) {
      console.error(error);
      toast.info("User already exists or some error occurred.");
    } finally {
      navigate(`/trips`);
    }
  }

  useEffect(() => {
    console.log("Trip ID:", id);
    console.log("Token:", token);
    if (id && token) {
      acceptInvitation();
    }
  }, [id, token]);

  return (
    <div>AcceptInvitation</div>
  )
}

export default AcceptInvitation