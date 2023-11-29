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
    <Box
      $borderColor='black'
      $borderRadius={10}
      $padding='0 20px 0 20px'
      $margin='0 0 20px 0'>
      <FlexBox $justifyContents='space-between' $alignItems='center'>
        <h3>{title}</h3>
        <FlexBox $width='16%' $justifyContents='space-between'>
          <Button
            $width='20px'
            $height='20px'
            $backgroundColor='transparent'
            $borderColor='black'
            $padding='0 0 0 0'
            $borderRadius={5}>
            <CheckIcon
              $width='12px'
              $height='12px'
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
            $borderRadius={5}
            $fontColor='black'
            $fontSize={17}
            $lineHeight={0.1}>
            +
          </Button>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};

export default Todo;
