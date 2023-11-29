import { Box, FlexBox } from '../UI/Boxes';
import Card from '../UI/Card';
import { ArrowIcon, DocumentIcon, TitleIcon } from '../UI/Icons';
import { CommonInput } from '../UI/Inputs';
import Label from '../UI/Label';
import TextBox from '../UI/TextBox';
import { getDatabase, push, ref, set } from 'firebase/database';
import Button from './../UI/Button';
import useUserIdState from '../../hooks/useUserIdState';
import useForm from '../../hooks/useForm';
import {
  maxLengthValidator,
  stringNullValidator,
} from '../../core/validators/textValidators';

const TodoInput = () => {
  const { userId } = useUserIdState();
  const { handleSubmit, errorData, register } = useForm(
    { title: null, description: '' },
    (formData) => {
      try {
        const db = getDatabase();
        push(ref(db, `users/${userId}/todos`), formData);
      } catch (e: any) {
        console.log(e.message);
      }
    },
  );

  return (
    <Card $start={1} $end={7}>
      <form onSubmit={handleSubmit}>
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
            $width='100%'
            {...register('title', [
              stringNullValidator(),
              maxLengthValidator(24),
            ])}
          />
          <TextBox
            $fontSize={14}
            $margin={'4px 10px 0 10px'}
            $warning={!errorData['title'].isValid}
            $height='40px'>
            {errorData['title'].errorMessage}
          </TextBox>
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
              (target as HTMLTextAreaElement).style.height = '';
              (target as HTMLTextAreaElement).style.height =
                (target as HTMLTextAreaElement).scrollHeight + 'px';
            }}
            {...register('description')}
          />
        </Box>
        <Box>
          <Button type='submit'>TestSubmit</Button>
        </Box>
      </form>
    </Card>
  );
};

export default TodoInput;
