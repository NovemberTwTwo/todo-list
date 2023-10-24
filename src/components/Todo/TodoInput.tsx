import { Box, FlexBox } from '../UI/Boxes';
import Card from '../UI/Card';
import { TextInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';

const TodoInput = () => {
  return (
    <Card $start={1} $end={7}>
      <FlexBox $justifyContents='space-between'>
        <TextBox $fontSize={28} $lineHeight={32} $margin='0 0 0 0'>
          목표 추가하기
        </TextBox>
        <TextBox $fontSize={12} $lineHeight={16} $margin='0 0 0 0'>
          이전 페이지로
        </TextBox>
      </FlexBox>
      <hr />
      <Box>
        <Label>목표명</Label>
        <TextInput type='text' name='GoalName'></TextInput>
      </Box>
    </Card>
  );
};

export default TodoInput;
