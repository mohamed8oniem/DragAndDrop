import { Input, Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const ProblemSolving = () => {
  const [emailValue, setEmailValue] = useState('');
  const [bracketsValue, setBracketsValue] = useState('');

  const handleChangeEmail = (val) => {
    setEmailValue(val);
  };
  const handleValidate = () => {
    // validate the length
    if (emailValue.length > 256) {
      console.log('first check ');
      return false;
    }
    //it should contain one '@' char
    let signCount = 0;
    let signIndex = null;
    for (let i = 0; i < emailValue.length; i++) {
      if (emailValue[i] === '@') {
        signCount++;
        signIndex = i;
      }
    }
    //@ char just once and not in first index or last index
    if (
      signCount !== 1 ||
      signIndex === 0 ||
      signIndex === emailValue.length - 1
    ) {
      return false;
    }
    // has one dot after @
    let hasDot = false;
    let dotIndex = null;
    for (let i = signIndex + 1; i < emailValue.length; i++) {
      if (emailValue[i] === '.') {
        hasDot = true;
        dotIndex = i;
        break;
      }
    }

    if (
      !hasDot ||
      emailValue[dotIndex - 1] === '@' ||
      emailValue[dotIndex + 1] === '@' ||
      emailValue[dotIndex + 1] === '.'
    ) {
      return false;
    }
    return true;
  };
  const handleValidateBrackets = () => {
    const arr = [];
    if (!bracketsValue) return false;
    for (let char of bracketsValue) {
      if (char === '(' || char === '[' || char === '{') {
        arr.push(char);
      } else if (char === ')') {
        if (arr.length === 0 || arr.pop() !== '(') return false;
      } else if (char === ']') {
        if (arr.length === 0 || arr.pop() !== '[') return false;
      } else if (char === '}') {
        if (arr.length === 0 || arr.pop() !== '{') return false;
      }
    }
    return arr.length === 0 ? true : false;
  };

  return (
    <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
      <div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email Validation
          </Typography>
          <Input
            value={emailValue}
            onChange={(e) => handleChangeEmail(e.target.value)}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
        </div>
        <Button
          className="mt-6"
          fullWidth
          onClick={() => console.log(handleValidate())}
        >
          Validate
        </Button>
      </div>
      <div className="mt-20">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Brackets Validation
          </Typography>
          <Input
            value={bracketsValue}
            onChange={(e) => setBracketsValue(e.target.value)}
            size="lg"
            placeholder="Type test case"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
        </div>
        <Button
          className="mt-6"
          fullWidth
          onClick={() => console.log(handleValidateBrackets())}
        >
          Validate
        </Button>
      </div>
    </form>
  );
};

export default ProblemSolving;
