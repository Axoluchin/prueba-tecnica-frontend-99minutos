export interface userProps {
  FirstName: string
  LastName: string
  Email: string
}

export interface registerProps extends userProps {
  IsAdmin: boolean
  Password: string
}

export interface productProps {
  name: string
  amount: number
}

export interface orderProps {
  DestinationAddress: {
    Coordinates: string
    FirstName: string
    LastName: string
    Street: string
    ZipCode: string
    State: string
    City: string
    Neighbourhood: string
    ExNumber: string
    InNumber: string
    PhoneNumber: string
  }
  Products: productProps[]
}

export interface frutsProps {
  frut: string
  name: string
  desc: string
}
