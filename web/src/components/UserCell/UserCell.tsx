import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
      email
      name
    }
  }
`

interface Props extends CellSuccessProps<FindUserQuery> {
  type: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Null</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user, type }: Props) => {
  if (type === 'id') {
    return <span>{JSON.stringify(user[type])}</span>
  } else {
    return <span>{JSON.stringify(user[type]).slice(1, -1)}</span>
  }
}
