import styled from '@emotion/styled'

export const StyledInput = styled.input`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #5a4a4a;
  font-size: 20px;
  text-align: center;
  &[type='absent'],
  &[type='present'] {
    border: 1px solid red;
  }
  &[type='correct'] {
    border: 1px solid green;
  }
`
