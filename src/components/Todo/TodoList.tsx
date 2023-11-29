import { useEffect, useState } from 'react';
import useUserIdState from '../../hooks/useUserIdState';
import { child, get, getDatabase, ref } from 'firebase/database';
import Todo from './Todo';
import Card from '../UI/Card';

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
      <Card $start={1} $end={7}>
        {Object.keys(data).map((key) => {
          const { title, description } = data[key];
          return (
            <Todo key={key} id={key} title={title} description={description} />
          );
        })}
      </Card>
    );
  return <div></div>;
};

export default TodoList;
