import React from 'react';

import { 
  Avatar, 
  Container, 
  DoctorProps, 
  Name, 
  Speciality 
} from './styles';

export type DoctorDataProps = {
  id: string;
  name: string;
  avatar: string;
  speciality: string;
}

interface Props extends  DoctorProps {
  data: DoctorDataProps;
}

export function Doctor({ type, data, ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Avatar 
        source={{uri: data.avatar}}
      />
      <Name>
        {data.name}
      </Name>

      <Speciality>
        {data.speciality}
      </Speciality>

    </Container>
  );
}