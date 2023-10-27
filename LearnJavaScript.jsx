const person = {
    name : ' Tapan Behera Eleven11',
    address:{
        line:'Arei',
        city:'jajpur',
        block:'Binjharpur',
    },
    profiles:['twitter','instagram','whatsapp'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
                return profile
            }
        )
    }
};

export default function LearnJavaScript(){
    return(
        <>
        <div className="myName"> {person.name} </div>
        <div className="myName"> {person.address.block} </div>
        <div className="myName"> {person.address.city} </div>
        <div className="myName"> {person.profiles[2]} </div>
        <div className="myName"> {person.profiles[1]} </div>
        <div className="myName"> { person.printProfile() } </div>


        </>
    )
}