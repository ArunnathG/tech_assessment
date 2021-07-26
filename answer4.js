
// You have been tasked with creating a helper function that will be used to determine the output of an array of data.
// Each element of the array has the following structure:

// {  
//     state: <String> // a state to go to  
//     errorCode: <String> // optional error code  
// }  
// The states have different functionalities:
// 'processing' = execution should be delayed by 2 seconds, then fetch the next state
// 'error' = handle the error code provided (see below)
// 'success' = return from the helper with the object: { title: 'Order complete' message: null }
// Handling error codes:
// 'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }
// 'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }
// null = return from the helper with an object: { title: 'Error page', message: null }
// undefined = return from the helper with an object: { title: 'Error page', message: null }
// Example usage:
//  getProcessingPage([{ state: 'processing' }, { state: 'error' }])

// This code should return after 2 seconds with the object: { title: 'Error page', message: null }



function getProcessingPage(data) {
 
    //returns errors and success based on input
    const handleResult = ({state, errorCode =null}) => {
        if(state === 'error' ) {
            if(errorCode === 'NO_STOCK' ) {
                return (
                    { title: 'Error page', message: 'No stock has been found' }
                )
            } else if(errorCode === 'INCORRECT_DETAILS' ) {
                return(
                    { title: 'Error page', message: 'Incorrect details have been entered' }
                )
            } else {
                return ({
                    title: 'Error page',
                    message: errorCode
                })
            }
           
        } else if (state === 'success' ) {
            return ({ title: 'Order complete', message: null }
        )
        }
        
    }
 
    //return result after processing or immediately
    let result = data
    let processed = false
            for(const [index ,  value] of data.entries()) {
                const {state} = value
                const processedData = () => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {  
                            resolve(handleResult(result[index +1 ]))
                            
                        }, 2000)
                       
                    })
                }
               if(state === 'processing') {
                processed= true;
                processedData().then((res) => {return res})
               } else if(!processed){
                  
                return handleResult(result[index])
               }
              
            }
}
getProcessingPage([ { state: 'error' }])
//console.log()

module.exports.getProcessingPage = getProcessingPage