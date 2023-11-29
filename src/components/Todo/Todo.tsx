import { Box, FlexBox } from '../UI/Boxes';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { CheckIcon } from '../UI/Icons';

interface TodoData {
  id: string;
  title: string;
  description: string;
}

const Todo = ({ id, title, description }: TodoData) => {
  return (
    <Box>
      <FlexBox $justifyContents='space-between' $alignItems='center'>
        <h2>{title}</h2>
        <FlexBox $width='14%' $justifyContents='space-between'>
          <Button
            $width='20px'
            $height='20px'
            $backgroundColor='transparent'
            $borderColor='black'
            $padding='0 0 0 0'
            $borderRadius={5}>
            <CheckIcon
              $width='16px'
              $height='16px'
              $strokeWidth={1.5}
              $stroke='black'
            />
          </Button>
          <Button
            $width='20px'
            $height='20px'
            $backgroundColor='transparent'
            $borderColor='black'
            $padding='0 0 0 0'
            $borderRadius={5}>
            +
          </Button>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};

export default Todo;
