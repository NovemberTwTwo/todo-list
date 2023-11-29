import { useEffect, useState } from 'react';
import useUserIdState from '../../hooks/useUserIdState';
import { child, get, getDatabase, ref } from 'firebase/database';

const TodoList = () => {
  const { userId } = useUserIdState();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const db = getDatabase();
    console.log(userId);
    get(child(ref(db), `users/${userId}/todos`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.toJSON());
        }
      })
      .catch((e) => console.log(e));
  }, [userId]);

  if (data)
    return (
      <div>
        {Object.keys(data).map((key) => {
          return (
            <div key={key}>
              <h3>{data[key].title}</h3>
              <p>{data[key].description}</p>
            </div>
          );
        })}
      </div>
    );
  return <div></div>;
};

export default TodoList;
