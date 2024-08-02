import React, { useState } from 'react';
import styled from 'styled-components';
import JNLabel, { BaseLabelProps } from '../DesignSystem/JNLabel';

const JNLabelDemo: React.FC = () => {
  const [labelProps, setLabelProps] = useState<BaseLabelProps>({
    text: 'Sample Text',
    font: 'Pretendard, sans-serif',
    textColor: '#000000',
    isCenter: true,
    numberOfLineCount: 1,
    size: '16px',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setLabelProps((prevProps) => ({
      ...prevProps,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Container>
      <SettingsContainer>
        <FormRow>
          <Label htmlFor="text">Text:</Label>
          <Input
            id="text"
            type="text"
            name="text"
            value={labelProps.text}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="font">Font:</Label>
          <Select
            id="font"
            name="font"
            value={labelProps.font}
            onChange={handleChange}
          >
            <option value="Pretendard, sans-serif">Pretendard</option>
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Courier New, monospace">Courier New</option>
          </Select>
        </FormRow>
        <FormRow>
          <Label htmlFor="textColor">Color:</Label>
          <Input
            id="textColor"
            type="color"
            name="textColor"
            value={labelProps.textColor}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="isCenter">Center:</Label>
          <Input
            id="isCenter"
            type="checkbox"
            name="isCenter"
            checked={labelProps.isCenter}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="numberOfLineCount">Lines:</Label>
          <Input
            id="numberOfLineCount"
            type="number"
            name="numberOfLineCount"
            value={labelProps.numberOfLineCount}
            onChange={handleChange}
            min={1}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="size">Font Size:</Label>
          <Input
            id="size"
            type="text"
            name="size"
            value={labelProps.size}
            onChange={handleChange}
          />
        </FormRow>
      </SettingsContainer>
      <LabelDisplay>
        <JNLabel {...labelProps} />
      </LabelDisplay>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  background: #ffff;
  height: 30vh;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
`;

const SettingsContainer = styled.div`
  width: 30%;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const LabelDisplay = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #000;
  font-size: 0.8rem;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  /* color: #fff; */
  border-radius: 4px;
  width: 60%;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  /* background: white; */
`;

export default JNLabelDemo;
