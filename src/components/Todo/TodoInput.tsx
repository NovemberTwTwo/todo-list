import { Box, FlexBox } from '../UI/Boxes';
import Card from '../UI/Card';
import { CommonInput } from '../UI/Inputs';
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
        <CommonInput
          type='text'
          name='GoalName'
          $padding='0 10px 0 10px'
          $width='100%'></CommonInput>
      </Box>
      <Box>
        <Label>기간</Label>
        <FlexBox $width='100%' $justifyContents='space-between'>
          <CommonInput type='date' $padding='0 10px 0 10px' $width='45%' />
          <CommonInput type='date' $padding='0 10px 0 10px' $width='45%' />
        </FlexBox>
      </Box>
      <Box>
        <Label>상세 내용</Label>
        <CommonInput
          as='textarea'
          $padding='15px 15px 15px 15px'
          $width='100%'
          $minHeight='200px'
          $maxHeight='400px'
          $fontSize={14}
          $lineHeight={16}
          onInput={({ target }: React.FormEvent<HTMLTextAreaElement>) => {
            console.log((target as HTMLTextAreaElement).scrollHeight);
            (target as HTMLTextAreaElement).style.height = '';
            (target as HTMLTextAreaElement).style.height =
              (target as HTMLTextAreaElement).scrollHeight + 'px';
          }}></CommonInput>
      </Box>
    </Card>
  );
};

export default TodoInput;
