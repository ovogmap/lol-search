import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchUser, fetchUserMatch } from '../../utils/API';

export default function Detail(): React.ReactElement {
  const [user, setUser] = useState();
  const router = useRouter();
  const nickName = router.query.id;
  const getUserData = async () => {
    const result = await fetchUser(nickName);
    console.log(result);
    const id = await result.accountId;
    const match = await fetchUserMatch(id);
    console.log(match);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <div>{nickName}</div>;
}
