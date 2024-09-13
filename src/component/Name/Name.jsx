import './Name.css'

function Name ({firstName,lastName}){

    return(
        <div><h6><span className='firstName'>{firstName}</span> <span className='lastName'>{lastName}</span></h6></div>
    )

}

export default Name;