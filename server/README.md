BACKEND ENDPOINTS 


#  ENDPOINT #  METHOD #  REQUEST  FORMAT #  RESPONSE FORMAT #  DESCRIPTION 
*******************************************************************************************************
/user/:email    GET    {email}     [{id,email,name...}]             get user based on signed in user   
                                "Not found, the user has been"      no user matching the email found
*******************************************************************************************************
/planets        GET     none    [{name,climate,...}]            get all planets in database
                                "Planets not found"             no planet found matching in database
******************************************************************************************************
/allcharacters  GET     none    [{name,height,...}]             get all characters in database
                                "Characters not found"       no character found matching in database   
******************************************************************************************************
/profilepics    GET     none    [{id,url}]                          get picture for profile background
                                "Profile pictures were not found"   no profile backgrond pic found
*******************************************************************************************************
/homepics       GET     none    [{id,name,url}]               get all pictures for homepage background 
                                "Background pictures not found"  no home pictures found in databse
*******************************************************************************************************
/quests         GET     none    [{id,name,url,code}]            get info related to film being chosen
                                "Quest pictures not found"      no quest info because not found
*******************************************************************************************************
/:id            GET    {ObjectId}   [{name,climate,...}]    get info related to planet on from database
                                    "Planet not found"      no planet info because it was not found
*******************************************************************************************************
/:email         DELETE  none   "User has fallen"                logged in user was deleted  
                               "Not found, the user has been"   user does not exists so not deleted
*******************************************************************************************************
/user           POST   {email,name...}  "May the force be with you"     user ready to use in database
*******************************************************************************************************
/user           PATCH   {email}     "There has been an..."                 the user has been patched 
                                    "Do. Or do not. There is no try"       no change to the user
                                    "I have a bad feeling about this"      user to patch not found 
*******************************************************************************************************


