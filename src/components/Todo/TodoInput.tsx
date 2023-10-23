import Card from '../UI/Card';
import TextBox from '../UI/TextBox';

const TodoInput = () => {
  return (
    <Card $start={1} $end={7}>
      <TextBox $fontSize={28} $lineHeight={32}>
        목표 추가하기
      </TextBox>
    </Card>
  );
};

export default TodoInput;
