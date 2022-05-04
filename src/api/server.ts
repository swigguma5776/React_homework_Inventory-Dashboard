let token = '12eae16a970af0ef5323ea9add761d7d0d9c4f67bd5fe3d8';

export const serverCalls = {    
    get: async () =>{        
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{           
             method: 'GET',            
             headers: {                
                 'Content-Type': 'application/json',                
                 'x-access-token': `Bearer ${token}`            
                }        
            })    
        }
    }