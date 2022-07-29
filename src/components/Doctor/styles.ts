import styled, { css } from 'styled-components/native';

export type DoctorProps = {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<DoctorProps>`
  width: 45%;
  margin: 7px;
  margin-top: 20px;

  padding: 22px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.INFO};

  align-items: center;
  justify-content: center;

  ${({ type }) => type === 'primary' && css `
    border: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY}; 
  `};
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY}

  font-weight: 700;
`;

export const Speciality = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY}
`;