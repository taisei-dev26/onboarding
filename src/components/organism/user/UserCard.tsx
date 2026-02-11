import styled from 'styled-components'
import Card from '../../atoms/card/Card';
import UserIconWithName from '../../molecules/user/UserIconWithName';

type User = {
  name: string;
  image: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  website: string;
};

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  const { user } = props;

  return (
    <Card>
        <UserIconWithName image={user.image} name={user.name} />
        <SDL>
            <dt>メール</dt>
            <dd>{user.email}</dd>
            <dt>TEL</dt>
            <dd>{user.phone}</dd>
            <dt>会社名</dt>
            <dd>{user.company.name}</dd>
            <dt>WEB</dt>
            <dd>{user.website}</dd>
        </SDL>
    </Card>
  )
}

const SDL = styled.dl`
  text-aligh: left;
  margin-botttom: 0px;
  dt {
    float: left;
  }
  dd {
    text-align: left;
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`

export default UserCard