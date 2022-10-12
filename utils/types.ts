export interface registerProps {
  FirstName: string
  LastName: string
  IsAdmin: boolean
  Email: string
  Password: string
}

export default interface productProps {
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
