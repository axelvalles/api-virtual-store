const userMethods = {}

userMethods.login = (req,res) =>{

}

userMethods.resgister = (req,res) =>{
    const { email, fullname, username, password} = req.body

    if(email && fullname && username && password){
        

    }else{
        res.status(400).json({
            status: false,
            message: 'Campos obligatorios requeridos'
        })
    }
}

userMethods.auth = (req,res) =>{
    
}

module.exports = userMethods