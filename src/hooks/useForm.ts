import { useRef, useState } from 'react';

interface FormData {
  [key: string]: any;
}

interface ErrorData {
  [key: string]: {
    isValid: boolean;
    errorMessage: string;
  };
}

const errorObjectGenerator = (initialFormData: FormData): ErrorData => {
  const error: ErrorData = {};
  Object.keys(initialFormData).forEach((key) => {
    error[key] = {
      isValid: initialFormData[key] === null ? false : true,
      errorMessage: '',
    };
  });
  return error;
};

const formDataValidator = (errorData: ErrorData): void => {
  Object.keys(errorData).forEach((key) => {
    if (!errorData[key].isValid) throw new Error(`${key}`);
  });
};

const debouncer = (
  callback: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void,
  delay: number,
) => {
  let timer: ReturnType<typeof setTimeout> | number | undefined;
  return (arg: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, arg);
  };
};

const useForm = (
  initialFormData: FormData,
  submitCallback: (formData: FormData) => void,
) => {
  const formData = useRef<FormData>(initialFormData);
  const [errorData, setErrorData] = useState<ErrorData>(
    errorObjectGenerator(initialFormData),
  );

  const register = (
    key: string,
    validators: { (value: any): void }[] = [],
    isValidateDebounce: boolean = true,
  ) => {
    const validateData = () => {
      try {
        validators.forEach((validator) => {
          validator(formData.current[key]);
        });
        if (errorData[key].isValid !== true)
          setErrorData((prev) => {
            return { ...prev, [key]: { isValid: true, errorMessage: '' } };
          });
      } catch (e: any) {
        if (errorData[key].errorMessage !== e.message)
          setErrorData((prev) => {
            return {
              ...prev,
              [key]: { isValid: false, errorMessage: e.message },
            };
          });
      }
    };

    const changeValueDebounce = debouncer((e) => {
      formData.current[key] = e.target.value;
      if (isValidateDebounce) validateData();
    }, 300);

    const changeHandler = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      changeValueDebounce(e);
    };

    return { onChange: changeHandler, onBlur: validateData };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      formDataValidator(errorData);
      submitCallback(formData.current);
    } catch (e: any) {
      setErrorData((prev) => {
        return {
          ...prev,
          [e.message]: {
            isValid: false,
            errorMessage: `${e.message} data is not valid.`,
          },
        };
      });
    }
  };

  return { handleSubmit, errorData, register };
};

export default useForm;
