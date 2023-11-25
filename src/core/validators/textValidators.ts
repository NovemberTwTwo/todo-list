type Validator = (formData: any) => void;

const minLengthValidator = (length: number): Validator => {
  return (formData: string) => {
    if (formData.length < length)
      throw new Error(`최소 ${length}자 이상이여야 합니다.`);
    return;
  };
};

const maxLengthValidator = (length: number): Validator => {
  return (formData: string) => {
    if (formData.length > length)
      throw new Error(`최대 ${length}자 이하여야 합니다.`);
    return;
  };
};

const equalLengthValidator = (length: number): Validator => {
  return (formData: string) => {
    if (formData.length !== length)
      throw new Error(`반드시 ${length}자로 일치하여야 합니다.`);
    return;
  };
};

const stringNullValidator = (): Validator => {
  return (formData: string | null) => {
    if (formData === null || formData.replaceAll(' ', '').length === 0)
      throw new Error(`해당하는 정보는 반드시 입력되어야 합니다.`);
    return;
  };
};

const blankValidator = (): Validator => {
  return (formData: string) => {
    if (formData.includes(' '))
      throw new Error(`해당 입력란에는 공백이 포함되어서는 안됩니다.`);
    return;
  };
};

const regexValidator = (regex: RegExp, errorMessage: string): Validator => {
  return (formData: string) => {
    if (!regex.test(formData)) throw new Error(errorMessage);
    return;
  };
};

export {
  minLengthValidator,
  maxLengthValidator,
  equalLengthValidator,
  stringNullValidator,
  blankValidator,
  regexValidator,
};
