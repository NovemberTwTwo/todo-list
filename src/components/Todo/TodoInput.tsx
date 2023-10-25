import { Box, FlexBox } from '../UI/Boxes';
import Card from '../UI/Card';
import { ArrowIcon, CalenderIcon, DocumentIcon, TitleIcon } from '../UI/Icons';
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
        <TextBox
          onClick={() => {
            window.history.back();
          }}
          $fontSize={12}
          $lineHeight={16}
          $margin='0 0 0 0'
          $alignCenter={true}>
          이전 페이지로
          <ArrowIcon />
        </TextBox>
      </FlexBox>
      <hr />
      <Box $margin='0 0 42px 0'>
        <Label>
          <TitleIcon $margin='0 4px 0 0' />
          목표명
        </Label>
        <CommonInput
          $margin='6px 0 0 0'
          type='text'
          name='GoalName'
          $padding='0 10px 0 10px'
          $width='100%'></CommonInput>
      </Box>
      <Box $margin='0 0 42px 0'>
        <Label>
          <CalenderIcon $margin='0 4px 0 0' />
          기간
        </Label>
        <FlexBox
          $width='100%'
          $justifyContents='space-between'
          $margin='6px 0 0 0'>
          <CommonInput type='date' $padding='0 10px 0 10px' $width='45%' />
          <CommonInput type='date' $padding='0 10px 0 10px' $width='45%' />
        </FlexBox>
      </Box>
      <Box $margin='0 0 42px 0'>
        <Label>
          <DocumentIcon $margin='0 4px 0 0' />
          상세 내용
        </Label>
        <CommonInput
          as='textarea'
          $padding='15px 15px 15px 15px'
          $margin='6px 0 0 0'
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
