let token = '067e16afe1292a614422b7a2b031ed6dfee7bb0b55275be6';

export const serverCalls = {    
    get: async () =>{        
        const response = await fetch(`http://127.0.0.1:5000/api/turbines`,{           
             method: 'GET',            
             headers: {                
                 'Content-Type': 'application/json',                
                 'x-access-token': `Bearer ${token}`            
                }        
            });
            
            if (!response.ok){
                throw new Error('Failed to fetch data from server')
            }
            return await response.json()
        },

        create: async (data: any = {}) => {
            const response = await fetch(`http://127.0.0.1:5000/api/turbines`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',                
                    'x-access-token': `Bearer ${token}`              
                },
                body: JSON.stringify(data)
            });

            if (!response.ok){
                throw new Error('Failed to create new data on server')
            }

            return await response.json()

        },

        update: async ( id:string, data:any = {} ) => {
            const response = await fetch(`http://127.0.0.1:5000/api/turbines/${id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',                
                    'x-access-token': `Bearer ${token}`              
                },
                body: JSON.stringify(data)
            });
        },

        delete: async ( id:string ) => {
            const response = await fetch(`http://127.0.0.1:5000/api/turbines/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',                
                    'x-access-token': `Bearer ${token}`              
                },
        });
    }
}