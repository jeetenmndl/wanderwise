import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const AcceptInvitation = () => {
    const {id} = useParams();

    const [searchParams] = useSearchParams()

    const token = searchParams.get("token");

    useEffect(() => {
        console.log("Trip ID:", id);
        console.log("Token:", token);
    }, [id, token]);

  return (
    <div>AcceptInvitation</div>
  )
}

export default AcceptInvitation