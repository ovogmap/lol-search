import axios from 'axios';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchUser, fetchUserMatch, fetchGameDetil } from '../../utils/API';

import styles from './Detail.module.scss';
export default function Detail(): React.ReactElement {
  const [user, setUser] = useState({});
  const [matchList, setMatchList] = useState([]);
  const router = useRouter();
  const nickName = router.query.id;
  const getUserData = async () => {
    const getUser = await fetchUser(nickName);
    console.log(getUser);
    const id = getUser.accountId;
    const match = await fetchUserMatch(id);
    console.log(match);
    const matchList = match.matches.splice(0, 4);
    console.log(matchList);
    // for (let item of matchList) {
    //   const id = item.gameId;
    //   const result = await fetchGameDetil(id);
    //   console.log(result);
    //   setMatchList([...match, result]);
    // }
    // setUser(getUser);
  };
  useEffect(() => {
    // getUserData();
  }, []);
  return (
    <div className={styles.Container}>
      <div className={styles.IntroContainer}>
        <div className={styles.LeftBox}>
          <img
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4787.jpg?image=q_auto:best&v=1518361200"
            alt="사진"
          />
        </div>
        <div className={styles.RightBox}>
          <div className={styles.NameBox}>
            <h3>{nickName}</h3>
            <button>즐겨찾기</button>
          </div>
          <div className={styles.BtnBox}>
            <button>전적갱신</button>
            <button>전적갱신</button>
          </div>
        </div>
      </div>

      <div className={styles.ContantContainer}>
        <div className={styles.UserContainer}>
          <div className={styles.Champ}>
            <div className={styles.Intro}>
              <img
                src="https://opgg-static.akamaized.net/images/lol/champion/Ezreal.png?image=c_scale,q_auto,w_45&v=1609898837"
                alt="사진"
              />
              <h3>이즈리얼</h3>
            </div>
            <div>
              <h4>승률: 56%</h4>
            </div>
          </div>
        </div>
        <div className={styles.MatchContainer}></div>
      </div>
    </div>
  );
}
