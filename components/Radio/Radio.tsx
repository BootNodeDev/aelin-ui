import { FC } from 'react';
import styled from 'styled-components';
import { FormikProps } from "formik";
interface IRadio {
  name: string;
  value: string;
  formik: FormikProps<any>;
}

const Radio: FC<IRadio> = ({ name, value, formik }) => (
  <>
    <RadioButton
      type="radio"
      id={value}
      name={name}
      value={value}
      checked={formik.values.poolPrivacy === value}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    <Label htmlFor={value}>
    { value }
  </Label>
  </>
);

const Label = styled.label`
  position: relative;
  margin: 7.5px;
  cursor: pointer;
  text-transform: capitalize;
  color: #252626;
  font-size: 14px;
`;

const RadioButton = styled.input`
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background: #3F7923;
    border-radius: 50%;
  }

  &:checked {
    &:before {
      width: 14px;
      height: 14px;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #f2f2f2;
    border-radius: 50%;
  }
`;

export { Radio };
export default Radio;