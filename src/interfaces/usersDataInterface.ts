interface usersDataInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdress,
    phone: number,
    website: string,
    company: object,
}

interface IAdress {
    street:string;
    city:string;
}

export default usersDataInterface