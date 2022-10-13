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
  Weight: number
}

export interface address {
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

export interface orderFormProps {
  DestinationAddress: address
  Products: productProps[]
}

export interface frutsProps {
  frut: string
  name: string
  desc: string
  Weight: number
}

export interface orderProps {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  PackageSize: string
  Status: string
  Refund: boolean
  DestinationAddress: address
  Products: {
    ID: string
    Weight: string
  }[]
}
